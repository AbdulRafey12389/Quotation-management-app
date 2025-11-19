import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    } else if (user.role === "admin") {
      navigate("/admin/dashboard");
      return;
    } else {
      navigate("/quotation");
    }
  }, [navigate]);

  // Detect mobile screen
  useEffect(() => {
    // lo;
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        currentPath={location.pathname}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        role={user?.role}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
          ${!isMobile && sidebarOpen ? "" : ""}
          ${!isMobile && !sidebarOpen ? "" : ""}
        `}
      >
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentPath={location.pathname}
          isMobile={isMobile}
        />

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
