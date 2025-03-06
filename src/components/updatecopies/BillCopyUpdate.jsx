import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Loader from '../Loader'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCopyDetails, update_billcopy } from '../../utils/fetchCopyDetails'
import BillDetailsTable from './components/BillDetailsTable'

const BillCopyUpdate = () => {
    const {copyId, companyId} = useParams();
    const navigate = useNavigate();
    const table_columns = [
        "CN Number",
        "Invoice No.",
        "From",
        "To",
        "Weight",
        "Charged",
        "Rate",
        "Freight",
        "ST",
        "Charges",
        "Others",
        "Amount",
      ];
      // const {isLoading, setIsloading} = useContext(GlobalContext);
      const [isLoading, setIsLoading] = useState(false);

    
      const [isAdd, setIsAdd] = useState(false);
      const [data, setData] = useState({
        name: "",
        billno: "",
        date: "",
        initialBillDetails: {
          cn_number: "",
          invoice_number: "",
          date: "",
          from: "",
          to: "",
          weight: "",
          charged: "",
          rate: "",
          freight: "",
          st: "",
          st_charges: "",
          others: "",
          amount: "",
        },
        billDetails: [],
        total: "",
        gst_payable_by: "",
      });
      console.log(data);
      
      const handleCurrentBillDetails = (key,value, index = null) => {
        console.log("HELLO");
    
        console.log(data);
        
        const updatedBillDetails = data.billDetails.map((bill, ind) => {
          
          if (ind === index) {
            return { ...bill, [key]: value };
          }else{
            return bill;
          }
        });

        setData((prevData) => {
          return {
            ...prevData,
            billDetails: updatedBillDetails,
            };
        })
        

        // setData((prevData) => {    
        //   return({
        //     ...prevData, 
        //     billDetails: {}
        //   })  
        //   prevData.billDetails.map((bill, ind) => {
        //     if (ind === index) {
        //       return { ...bill, [value]: value };
        //     }
        //   })
        // });
      };
      const handleMoreNestedChange = (path, value, type, index = null) => {
        setData((prevData) => {
          const keys = path.split("."); // Split the path into keys
      
          // Helper function to update nested objects
          const updateNestedObject = (obj, keys, value, index) => {
            const [currentKey, ...remainingKeys] = keys;
      
            if (remainingKeys.length === 0) {
              // If it's the last key, update the value
              if (Array.isArray(obj[currentKey]) && index !== null) {
                // Handle array updates
                return {
                  ...obj,
                  [currentKey]: obj[currentKey].map((item, i) =>
                    i === index ? { ...item, [remainingKeys[0]]: value } : item
                  ),
                };
              } else {
                // Update normal object properties
                return {
                  ...obj,
                  [currentKey]: type === "date" ? new Date(value) : value,
                };
              }
            }
      
            return {
              ...obj,
              [currentKey]: updateNestedObject(obj[currentKey], remainingKeys, value, index),
            };
          };
      
          return updateNestedObject(prevData, keys, value, index);
        });
      };
      
    
      const handleAddRecordToLocal = () => {
        setData((prevData) => ({
          ...prevData,
          initialBillDetails: {
            cn_number: "",
            invoice_number: "",
            date: "",
            from: "",
            to: "",
            weight: "",
            charged: "",
            rate: "",
            freight: "",
            st: "",
            st_charges: "",
            others: "",
            amount: "",
          },
          billDetails: [...prevData.billDetails, prevData.initialBillDetails],
        }));
      };

      

      const submit_update = ( ) => {
        console.log("fun call",data);
        
        update_billcopy(data,companyId, copyId, setIsLoading, navigate )
      }
     
      useEffect(() => {
          fetchCopyDetails('billCopy',copyId, setData )
        }, [])
        
        console.log(data);
  return (
    <div className={` relative  bg-white p-2`}>
    {isLoading && (
      <div
        className={`w-full h-full absolute ${isLoading && "bg-black/70"}`}
      ></div>
    )}
    {isLoading && <Loader isLoading={isLoading} />}
    <Header />
    {/* name of delear & billNo */}
    <div className=" grid grid-cols-4">
      {/* NAME OF DEALER */}
      <div className="col-span-3 border-r-2 p-2 ">
        <div className="flex ">
          <h1>M/s:</h1>
          {/* Name */}
          <input
            type="text"
            className="bg-transparent w-full p-1 outline-none border-b-2 border-black"
            name="name"
            value={data.name}
            onChange={(e) =>
              handleMoreNestedChange("name", e.target.value, "")
            }
          />
        </div>
      </div>

      {/* Bill no */}
      <div className=" border-r-2 border-black p-2 ">
        <div className="flex ">
          {/* Bill No */}
          <h1>Bill No.:</h1>
          <input
            type="text"
            className="bg-transparent border-b-2 border-black"
            name="billno"
            value={data.billno}
            onChange={(e) =>
              handleMoreNestedChange("billno", e.target.value, "")
            }
          />
        </div>

        {/* Date */}
        <div className="flex mt-3">
          <h1>Date:</h1>
          <input
            type="date"
            className="ml-3 bg-transparent border-b-2 border-black"
            name="date"
            value={data.date}
            onChange={(e) =>
              handleMoreNestedChange("date", e.target.value, "")
            }
          />
        </div>
      </div>
    </div>
    {/* service charce */}

    <div className="flex text-nowrap justify-between text-xs border border-black">
      <h1>Being the Service Charges as per the following Details :</h1>
      <h1>
        (Interest @ 24% per annum will be charged on all out standing Bills)
      </h1>
    </div>

    <BillDetailsTable
        data={data}
        handleCurrentBillDetails={handleCurrentBillDetails}
        handleMoreNestedChange={handleMoreNestedChange}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        handleAddRecordToLocal={handleAddRecordToLocal}
      />

    {/* footer */}
    <footer className=" grid grid-cols-3 outline p-1 rounded-bl rounded-br">
      <div className="flex flex-col space-y-4  border-r-2 border-black ">
        <p style={{ color: "#d11b0a", fontWeight: "bold" }}>
          PAN: AKMPM6807F
        </p>
        <p style={{ color: "#d11b0a", fontWeight: "bold" }}>
          GST NO: 27AKMPM6807F2ZW
        </p>
        <p>GST Payable by : </p>
        {/* Radio Buttons */}
        <div className="space-x-4  ">
          <input
            id="link-radio-1"
            type="radio"
            value="consignor"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            name="gst_payable_by"
            onChange={(e) =>
              handleMoreNestedChange("gst_payable_by", e.target.value, "")
            }
            checked={data.gst_payable_by === 'consignor' && true}
          />
          <label
            for="link-radio-1"
            class="text-sm font-medium text-black-900"
          >
            Consignor
          </label>

          <input
            id="link-radio-2"
            type="radio"
            value="consignee"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            name="gst_payable_by"
            onChange={(e) =>
              handleMoreNestedChange("gst_payable_by", e.target.value, "")
            }
            checked={data.gst_payable_by === 'consignee' && true}
          />
          <label
            for="link-radio-2"
            class="text-sm font-medium text-gray-900 "
          >
            Consignee
          </label>
        </div>
        <p className="text-[13px] font-bold ">
          PLEASE PAY BY A/C PAYEE CHEQUE OR NEFT
        </p>
      </div>

      <div className="flex flex-col justify-center items-center  border-r-2 border-black  ">
        <p className="font-bold">AKASH ROAD CARRIERS</p>
        <p>Bank Name : IDBI Bank, Nigdi.</p>
        <p>Account No.: 087102000014243</p>
        <p>IFSE Code No.: IBKL0000087</p>
      </div>

      <div className="flex flex-col justify-between h-full items-center">
        <p>For AKASH ROAD CARRIERS</p>
        <p className="">E.& O.E.</p>
      </div>
    </footer>
    <button
      className="bg-blue-800 rounded px-3 text-white w-full m-3"
    //   onClick={() => handleSubmit_addBillCopy()}
    onClick={() => submit_update()}
    >
      Submit
    </button>
  </div>
  )
}

export default BillCopyUpdate