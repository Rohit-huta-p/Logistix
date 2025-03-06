// LRCopyTable.jsx
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { handleDownload } from "../../utils/downloadFunc";

const LRCopyTable = ({ data, handleDelete, companyId, handleAdd }) => {

  return (
    <div className="place-items-center">
      <div className="w-[80vw]">
        <div className="flex justify-end mt-4">
          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white font-bold py-1 px-4 rounded flex items-center space-x-2 mb-4"
          >
            <span className="text-lg">+</span> Add
          </button>
        </div>

        <div className="flex justify-center">
          <table className="w-full shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th className="py-3 px-6 text-center">ID</th>
                <th className="py-3 px-6 text-center">Date</th>
                <th className="py-3 px-6 text-center">Consignee</th>
                <th className="py-3 px-6 text-center">Consignor</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-100">
                  <td className="px-6 py-4 text-gray-800">9000</td>
                  <td className="px-6 py-4 text-gray-800">
                    {item.caution.consignment_note.consignment_date}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {item.delivery_details.consignee.name}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {item.delivery_details.consignor.name}
                  </td>
                  <td className="px-6 py-4 text-gray-800 flex space-x-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                    <Link to={`/updatecopy/lr/${companyId}/${item._id}`}>
                      Update
                    </Link>
                    <button
                      onClick={() => handleDownload(item._id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LRCopyTable;