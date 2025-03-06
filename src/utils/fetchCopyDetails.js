
import axiosInstance from "../axiosInstanceOf";

export const fetchCopyDetails = async (copy, copyId, setData) => {
    try {
        console.log(copy);
        
        const response = await axiosInstance.get(`/api/${copy}/specific/${copyId}`)
        console.log(copy === 'bookingregister');
        
        
        const data = response.data;
        console.log("DATA", data);
        if(copy === 'billCopy'){
            setData((prevData) => ({
                ...data.data,
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
              }));
            return
        }else if(copy == 'bookingregister') {
            setData((prevData) => ({
                ...data.data,
                initialRegisterData: {
                    cn_number: "",
                    date: "",
                    number_of_packages: "",
                    consignor: "",
                    consignee: "",
                    destination: "",
                    weight: "",
                    bill_amount: "",
                    to_pay_tbb: "",
                    bill_number: "",
                    mr_number: "",
                    broker_name: "",
                    challan_number: "",
                    lorry_number: "",
                    hire: "",
                    advance: "",
                    balance: "",
                    remark: "",
                  },
              }));
              return
        } else{
            setData(data.data);
        }

        
        
      } catch (error) {
        console.log(error);
        
      }
}



export const update_billcopy = async (data,companyId, copyId, setIsLoading, navigate) => {
    console.log("Inside update Func", data);
    
    const { initialBillDetails, ...updatedData } = data;
    console.log(updatedData);
    
    try {
        setIsLoading(true);
        const res = await axiosInstance.patch(`/api/billcopy/update/${copyId}`, updatedData);
        setIsLoading(false);
        navigate(`/companypage/${companyId}`)
    } catch (error) {
        console.log(error);
        
    }
}


export const updateCopy = async (copy, data, companyId, copyId, setIsLoading, navigate) => {
    console.log("f");
    
    try {
        setIsLoading(true);
        const res = await axiosInstance.patch(`/api/${copy}/update/${copyId}`, data);
        setIsLoading(false);
        navigate(`/companypage/${companyId}`)

    } catch (error) {
        console.log(error);
        
    }
}