import { Bell, ChevronsLeft } from "lucide-react";
import React from "react";
import Avatar from "./Avatar";

const Navbar = ({ sidebarOpen, setSidebarOpen, isMobile }) => {
  return (
    <div className="bg-white shadow-sm px-6 pt-1">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="ml-auto mr-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <ChevronsLeft
                size={17}
                className={`${sidebarOpen ? "" : "rotate-180"}`}
              />
            </button>
          )}
          <div>
            <h1 className="text-lg font-medium text-gray-800">New Invoices</h1>
          </div>
        </div>

        {/* Right Section - User Info */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg bg-gray-100 transition-colors text-gray-600 relative">
            <span className="text-xl">
              <Bell />
            </span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <Avatar isOpen={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
