// CategoriesList.jsx
import React from "react";

const CategoriesList = ({ categories, handleCategory }) => {
  return (
    <ul className="flex space-x-8">
      {categories.map((catname, idx) => (
        <li key={idx} className="w-full">
          <button
            className="bg-gray-800 rounded-xl shadow-md py-0.5 cursor-pointer 
                      flex flex-col justify-center items-center 
                      transition-all duration-300 hover:shadow-xl hover:scale-105 w-full"
            onClick={() => handleCategory(catname.name)}
          >
            <div className="flex py-1">
              <p className="text-white mr-2">{catname.icon}</p>
              <span className="font-thin text-white">
                {catname.name.toLocaleUpperCase()}
              </span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;