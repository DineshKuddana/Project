import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";


const dashboard = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>

      <div>
        <main className="md:pl-72">
          <Navbar />
        </main>
      </div>
    </div>
  );
};

export default dashboard;