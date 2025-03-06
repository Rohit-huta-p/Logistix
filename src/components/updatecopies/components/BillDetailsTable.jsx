const BillDetailsTable = ({ data,handleCurrentBillDetails, handleMoreNestedChange, isAdd, setIsAdd, handleAddRecordToLocal }) => {
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

    console.log("BillDetailsTable DATA",data);
    
  
    return (
      <table className="p-4 w-full mt-2">
        <thead className="grid grid-cols-12 border border-black">
          {table_columns.map((column) => (
            <th key={column} className="text-xs">{column}</th>
          ))}
        </thead>
        <tbody>
          { data.billDetails.map((record, index) => (
            <tr key={index} className="grid grid-cols-12">
              {/* CN Number */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.cn_number}
                 
                />
              </td>
              {/* Invoice No. */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.billDetails[index].invoice_number}
                  onChange={(e) =>
                    handleCurrentBillDetails(
                      "invoice_number",
                      e.target.value,
                      index,
                    )
                  }
                />
              </td>
              {/* From */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.from}
                 
                />
              </td>
              {/* To */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.to}
                 
                />
              </td>
              {/* Weight */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.weight}
                 
                />
              </td>
              {/* Charged */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.charged}
                 
                />
              </td>
              {/* Rate */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.rate}
                 
                />
              </td>
              {/* Freight */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.freight}
                 
                />
              </td>
              {/* ST */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.st}
                 
                />
              </td>
              {/* Charges */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.st_charges}
                 
                />
              </td>
              {/* Others */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.others}
                 
                />
              </td>
              {/* Amount */}
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={record.amount}
                  
                />
              </td>
            </tr>
          ))}

          
          {/* Add New Row */}
          {isAdd && (
            <tr className="grid grid-cols-12 ">
              <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.cn_number}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.cn_number",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>

                {/* Invoice No. */}
                <td className="flex justify-center">
                  <input
                    type="text"
                    className="bg-transparent border-b-2 border-black w-12"
                    value={data.initialBillDetails.invoice_number}
                    onChange={(e) =>
                      handleMoreNestedChange(
                        "initialBillDetails.invoice_number",
                        e.target.value,
                        ""
                      )
                    }
                  />
                </td>
                {/* From. */}
                <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.from}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.from",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                <td className="flex justify-center">
                {/* To */}
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.to}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.to",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>

                {/* Weight */}
                <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.weight}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.weight",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                {/* Charged */}
                <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.charged}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.charged",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                {/* Rate */}
                <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.rate}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.rate",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                {/* Freight */}
                <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.freight}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.freight",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                {/* ST */}
                <td className="flex justify-center">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.st}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.st",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
         
                <td className="flex justify-center">
                {/* Charges */}
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.charges}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.charges",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                <td className="flex justify-center">
                {/* others */}
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.others}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.others",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                <td className="flex justify-center">
                {/* amount */}
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-black w-12"
                  value={data.initialBillDetails.amount}
                  onChange={(e) =>
                    handleMoreNestedChange(
                      "initialBillDetails.amount",
                      e.target.value,
                      ""
                    )
                  }
                />
                </td>
                

              {/* Add other input fields similarly for the new row */}
            </tr>
          )}
          <div className="flex">
            <button
              className="bg-blue-800 text-white px-3 rounded m-2 w-full"
              onClick={() => (isAdd ? handleAddRecordToLocal() : setIsAdd(true))}
            >
              {isAdd ? "Submit" : "Add record"}
            </button>
            {isAdd && (
              <button
                type="button"
                onClick={() => setIsAdd(false)}
                className="bg-red-700 text-white px-3 rounded m-2 w-full"
              >
                Cancel
              </button>
            )}
          </div>
        </tbody>
      </table>
    );
  };

  export default BillDetailsTable