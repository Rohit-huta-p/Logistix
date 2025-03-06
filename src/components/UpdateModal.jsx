import React from 'react'
import LrCopy from '../copies/lrcopy'
import LrUpdateCopy from './updatecopies/LrUpdateCopy'
import { useParams } from 'react-router-dom'
import BillCopyUpdate from './updatecopies/BillCopyUpdate'
import LetterpadUpdate from './updatecopies/LetterpadUpdate'
import BookingRegister from '../copies/BookingRegister'
import BookingRegisterUpdate from './updatecopies/BookingRegisterUpdate'


const UpdateModal = () => {
  const {copyName, copyId, companyId} = useParams();
  return (
    <div>
        {
            copyName === 'lr' && (
                <LrUpdateCopy copyid={copyId} companyId={companyId}/>
            )
        }
        {
            copyName === 'billcopy' && (
                <BillCopyUpdate copyId={copyId} companyId={companyId}/>
            )
        }
        {
            copyName === 'letterpad' && (
                <LetterpadUpdate copyId={copyId} companyId={companyId}/>
            )
        }
        {
            copyName === 'bookingRegister' && (
                <BookingRegisterUpdate copyId={copyId} companyId={companyId}/>
            )
        }
    </div>
  )
}

export default UpdateModal