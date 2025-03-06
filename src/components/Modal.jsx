import React, { useState } from "react";
import LrCopy from '../copies/lrcopy'
import BillBook from '../copies/Billbook'
import Letterpad from "../copies/Letterpad";
import BookingRegister from "../copies/BookingRegister";
const Modal = ({setShow, copy, companyId, fetchCopyDetails, handleClose, setMessage}) => {
  console.log(companyId);
  
    return (
     
        <div className="">
          {
            copy === 'lr' && (
              <LrCopy companyId={companyId} setShow={setShow} fetchCopyDetails={fetchCopyDetails}/>
            )
          }
          {
            copy === 'billcopy' && (
              <BillBook id={companyId} setShow={setShow} fetchCopyDetails={fetchCopyDetails}/>
            )
          }
          {
            copy === 'letterPad' && (
              <Letterpad id={companyId} fetchCopyDetails={fetchCopyDetails} handleClose={handleClose} setMessage={setMessage} setShow={setShow} />
            )
          }
          {
            copy === 'bookingRegister' && (
              <BookingRegister id={companyId} fetchCopyDetails={fetchCopyDetails} handleClose={handleClose} setMessage={setMessage} setShow={setShow}/>
            )
          }
        </div>
        
  );
};

export default Modal;
