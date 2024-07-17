import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);
  if (authLoading || profileLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="relative min-h-[cal(100vh-3.5rem)] flex ">
      <Sidebar />
      <div className="h-[cal(100vh-3.5rem)]">
        <div className="w-11/12 max-w-maxContent mx-auto py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
