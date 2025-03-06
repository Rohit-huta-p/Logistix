// CompanyPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstanceOf";
import Modal from "./Modal";
import Loader from "./Loader";
import CategoriesList from "./companyPage/CategoriesList";
import LRCopyTable from "./companyPage/LrCopyTable";
import BillCopyTable from "./companyPage/BillCopyTable";
import LetterPadTable from "./companyPage/LetterPadTable";
import BookingRegisterTable from "./companyPage/BookingRegisterTable";

const CompanyPage = () => {
    const {companyId} = useParams();

  
    const categories = [
      {
        name: "lr",
        icon: (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "billcopy",
        icon: (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M8 12.732A1.99 1.99 0 0 1 7 13H3v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.268ZM7 11V7.054a2 2 0 0 0-1.059.644l-2.46 2.87A2 2 0 0 0 3.2 11H7Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M14 3.054V7h-3.8c.074-.154.168-.3.282-.432l2.46-2.87A2 2 0 0 1 14 3.054ZM16 3v4a2 2 0 0 1-2 2h-4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "letterPad",
        icon: (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-5-4v4h4V3h-4Z"
            />
          </svg>
        ),
      },
      {
        name: "bookingRegister",
        icon: (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 20H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.429M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3a1 1 0 0 1-1 1h-3m9-3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.397a1 1 0 0 1 .27-.683l2.434-2.603a1 1 0 0 1 .73-.317H19a1 1 0 0 1 1 1Z"
            />
          </svg>
        ),
      },
      {
        name: "vehicleDetails",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        ),
      },
    ];
  
    // essentials
    const [isLoading, setIsLoading] = useState(false);
  
    const [isDeleting, setIsDeleting] = useState(false);
    const [message, setMessage] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const { id } = useParams();
  // modal show
    const [show, setShow] = useState(false);
  
  
    const [category, setCategory] = useState(null);
    let [data, setData] = useState(null);
  
  
    const handleCategory = async (category) => {
      try {
        setIsLoading(true);
        setData(null);
        await fetchCopyDetails(category);
        setCategory(category);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
  
    const fetchCopyDetails = async (category) => {
      try {
        const response = await axiosInstance.get(`/api/${category}/${companyId}`);
        setData(response.data.content);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
        setIsLoading(false);
      }
    };
  
    const handleReduce = () => {
      setData(null);
    };
  
    const handleAdd = () => {
      setShow(true);
    };
  
    const handleClose = () => {
      setShow(false);
    };
  
    // DELETE
    const handleDelete = async (cid, delelteId) => {
      try {
        setDeletingId(delelteId);
        setIsDeleting(true);
        const response = await axiosInstance.delete(
          `/api/${category}/delete/${id}/${cid}`
        );
  
        fetchCopyDetails(category);
        setIsDeleting(false);
        setDeletingId(null);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleUpdate = async (copyid) => {
  
    };
  
    // const handleDownload = async (lrid) => {
    //   try {
    //     const response = await axiosInstance.get(
    //       `http://localhost:8000/api/lr/generatelr/${lrid}`,
    //       {
    //         responseType: "blob", // Receive binary data
    //       }
    //     );
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", `lr_${lrid}.pdf`);
    //     document.body.appendChild(link);
    //     link.click();
    //     link.remove();
    //   } catch (error) {
    //     console.error("Error downloading the PDF:", error);
    //   }
    // };
  

  
  
    useEffect(() => {
      fetchCopyDetails(category);
    }, []);
  
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="w-full h-full flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <CategoriesList categories={categories} handleCategory={handleCategory} />
        <hr className="mt-5" />

        {isLoading && <Loader isLoading={isLoading} type="companyDetails" category={category} />}

        {category === "lr" && data && (
          <LRCopyTable data={data} handleDelete={handleDelete}  companyId={companyId} 
            handleAdd={handleAdd}
          />
        )}

        {category === "billcopy" && data && (
          <BillCopyTable data={data} handleDelete={handleDelete} handleAdd={handleAdd} 
          companyId={companyId} 
            />
        )}

        {category === "letterPad" && data && (
          <LetterPadTable data={data} handleDelete={handleDelete} 
            handleAdd={handleAdd} 
            deletingId={deletingId}
            isDeleting={isDeleting}
            companyId={companyId} 
          />
        )}
        {category === "bookingRegister" && data && (
          <BookingRegisterTable data={data} handleDelete={handleDelete} 
            handleAdd={handleAdd} 
            deletingId={deletingId}
            isDeleting={isDeleting}
            companyId={companyId} 
          />
        )}
      </div>

      {show && (
            <Modal show={show} setShow={setShow} handle={handleClose} copy={category} companyId={companyId} fetchCopyDetails={fetchCopyDetails}/>
          )}
    </div>
  );
};

export default CompanyPage;