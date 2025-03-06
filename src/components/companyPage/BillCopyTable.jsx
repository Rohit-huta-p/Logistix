// BillCopyTable.jsx
import React from "react";
import { handleDownloadBillCopy } from "../../utils/downloadFunc";
import { Link } from "react-router-dom";

const BillCopyTable = ({ data, handleDelete, handleAdd, companyId }) => {

  return (
    <div>
      <div className="flex justify-end mt-4 items-center mb-4">
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
            <th className="py-2 px-4">Bill Number</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Bill To</th>
            <th className="py-2 px-4">Bill From</th>
            <th className="py-2 px-4">Total Amount</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-300">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.bill_to}</td>
              <td className="py-2 px-4">{item.bill_from}</td>
              <td className="py-2 px-4">{item.amount}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
                <Link to={`/updatecopy/billcopy/${companyId}/${item._id}`}>
                  Update
                </Link>
                <button
                  onClick={() => handleDownloadBillCopy(item._id)}
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

export default BillCopyTable;