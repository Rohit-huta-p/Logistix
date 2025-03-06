import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Loader from '../Loader';
import { fetchCopyDetails, updateCopy } from '../../utils/fetchCopyDetails';
import { useNavigate } from 'react-router-dom';

const LetterpadUpdate = ({copyId, companyId}) => {
  const [letterPadData, setletterPadData] = useState({
    text: "",
  });
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchCopyDetails('letterpad', copyId, setletterPadData )
  }, [])
  

const update_copy =() => {
  console.log("ffff");
  
  updateCopy('letterpad', letterPadData, companyId, copyId, setIsLoading,navigate );
}

  const letterpad = true;
  return (
    <div className={`${isLoading ? "bg-transparent/80" : "bg-white"}`}>
      <div className="relative">
        {
          isLoading && <Loader isLoading={isLoading}  category={'lettpad'}/>
        }
        <Header letterpad={letterpad} />
        <textarea
          className={`w-full p-[30px] ${isLoading && 'bg-black/80'}`}
          name="text"
          id=""
          rows={6}
          cols={6}
          placeholder="Enter Info.."
          value={letterPadData.text}
          onChange={(e) => setletterPadData({ text: e.target.value })}
        ></textarea>
      </div>
      <button
        className="bg-blue-800 text-white w-full mt-4"
        onClick={() => update_copy()}
      >
        Update
      </button>
    </div>
  );
}

export default LetterpadUpdate