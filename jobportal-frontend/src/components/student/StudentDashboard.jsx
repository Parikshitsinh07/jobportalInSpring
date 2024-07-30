import React from "react";
import { Topbar } from "../admin/Topbar";
import { Sidebar } from "../student/Sidebar";
import { Outlet } from 'react-router-dom';

export const StudentDashboard = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="right-content">
        <Outlet />
      </div>
    </>
  );
};
