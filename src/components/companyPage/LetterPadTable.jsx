// LetterPadTable.jsx
import React, { useState } from "react";
import { handleDownloadLetterPad } from "../../utils/downloadFunc";
import { Link } from "react-router-dom";

const LetterPadTable = ({ data, handleDelete, handleAdd, deletingId, isDeleting, companyId }) => {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white font-bold py-1 px-4 rounded flex items-center space-x-2 mb-4"
        >
          <span className="text-lg">+</span> Add
        </button>
      </div>

      <table className="w-full shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase bg-slate-600">
          <tr className="">
            <th className="py-2 px-4">Sr. no</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-300 animation-blink ${
                deletingId == index &&
                isDeleting &&
                "bg-red-200 animate-pulse duration-1000"
              }`}
            >
              <td className="py-2 px-4">200</td>
              <td className="py-2 px-4">{item.text}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() => handleDelete(item._id, index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
                 <Link to={`/updatecopy/letterpad/${companyId}/${item._id}`}>
                      Update
                  </Link>
                
                <button
                  onClick={() => {handleDownloadLetterPad(item._id, setIsLoading)}}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LetterPadTable;