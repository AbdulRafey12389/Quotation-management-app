import { Bell, Notebook } from "lucide-react";
import React from "react";

const Avatar = ({ className, isOpen }) => {
  return (
    <div
      className={`flex  items-center space-x-2 hover:bg-gray-100 py-2 px-3 rounded-lg cursor-pointer transition ${
        isOpen ? className : ""
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-400 font-bold text-sm shadow-md `}
      >
        A
      </div>

      {isOpen && (
        <div className="text-left hidden md:block">
          <p className="font-medium text-gray-800 text-sm">abdulrafey</p>
          <p className="text-xs text-gray-500 capitalize">abdulrafey</p>
        </div>
      )}
      {/* {!isOpen && (
        <div className="text-left hidden md:block">
          <p className="font-medium text-gray-800 text-sm">abdulrafey</p>
          <p className="text-xs text-gray-500 capitalize">abdulrafey</p>
        </div>
      )} */}
    </div>
  );
};

export default Avatar;
