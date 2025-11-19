import {
  BookMarked,
  ChevronsLeft,
  History,
  Layout,
  LayoutDashboard,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Sidebar = ({ isOpen, currentPath, onToggle, role = "user" }) => {
  const navItems = {
    user: [
      {
        id: "quotation",
        label: "Quotation",
        path: "/quotation",
        icon: <BookMarked />,
      },
      {
        id: "client-list",
        label: "Client List",
        path: "/client-list",
        icon: <Users />,
      },
      {
        id: "templates",
        label: "Templates",
        path: "/templates",
        icon: <Layout />,
      },
      {
        id: "view-history",
        label: "View History",
        path: "/view-history",
        icon: <History />,
      },
    ],

    admin: [
      {
        id: "dashboard",
        label: "Dashbarod",
        path: "/admin/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        id: "createQuotation",
        label: "Create Quotation",
        path: "/admin/create-quotation",
        icon: <BookMarked />,
      },
      {
        id: "clientList",
        label: "Client List",
        path: "/admin/client-list",
        icon: <History />,
      },
      {
        id: "templates",
        label: "Templates",
        path: "/admin/templates",
        icon: <Layout />,
      },
      {
        id: "userManagement",
        label: "User Management",
        path: "/admin/user-management",
        icon: <Users />,
      },
    ],
  };

  const items = navItems[role] || [];

  const isActive = (path) => currentPath === path;

  return (
    <div
      className={`h-full bg-white border-r border-gray-300/70 shadow-sm
        fixed md:relative z-30
        transition-all duration-300
        ${isOpen ? "w-70" : "w-18"}
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <div className="p-4 border-b border-gray-300/70 flex items-center">
        {isOpen && (
          <>
            <img src="/logo.svg" className="w-10 h-10" alt="" />
            <p className="font-semibold  text-gray-800 text-lg ml-2">
              SD Quotation
            </p>
          </>
        )}

        <button
          onClick={onToggle}
          className="ml-auto mr-1 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
        >
          <ChevronsLeft size={17} className={`${isOpen ? "" : "rotate-180"}`} />
        </button>
      </div>

      {/* Menu */}
      <div className="py-4 overflow-y-auto">
        <nav className="space-y-1 px-3">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 
                rounded-xl py-3 px-3 text-sm font-medium
                transition-colors duration-200
                ${
                  isActive(item.path)
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="fixed bottom-5">
        <Avatar className="w-66 ml-2" isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
