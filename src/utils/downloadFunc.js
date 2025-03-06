import axiosInstance from "../axiosInstanceOf";

export const handleDownload = async (lrid) => {
    try {
      const response = await axiosInstance.get(
        `/api/lr/generatelr/${lrid}`,
        {
          responseType: "blob", 
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `lr_${lrid}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

export const handleDownloadBillCopy = async (billId) => {
    try {
      console.log(billId);
      
      const response = await axiosInstance.get(
        `/api/billcopy/generatebillcopy/${billId}`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `billCopy_${billId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

export const handleDownloadLetterPad = async (lpId, setIsLoading) => {
    try {
      const response = await axiosInstance.get(
        `/api/letterpad/generateletterpad/${lpId}`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `letterPad_${lpId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

export const handleDownloadBookingRegister = async (bookingRegisterId , setIsLoading) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `/api/bookingregister/generatepdf/${bookingRegisterId}`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `bookingRegister_${bookingRegisterId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsLoading(false);
    } catch (error) {

      console.error("Error downloading the PDF:", error);
      setIsLoading(false)
    }
  };
