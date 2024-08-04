// import React from "react";
// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/core/Dashboard/Sidebar";

// const Dashboard = () => {
//   const { loading: authLoading } = useSelector((state) => state.auth);
//   const { loading: profileLoading } = useSelector((state) => state.profile);
//   if (authLoading || profileLoading) {
//     return <div>Loading....</div>;
//   }
//   return (
//     <div className="w-screen  mx-auto min-h-[cal(100vh-3.5rem)]  relative  flex border-blue-300 ">
//       <div className="w-20% ">
//         <Sidebar />
//       </div>
//       <div className="w-full h-[cal(100vh-3.5rem)]">
//         <div className="w-[95%] mx-auto  py-10 ">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


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
    <div className="w-screen mx-auto min-h-screen relative flex border-blue-300">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[240px] bg-gray-800">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto  overflow-x-hidden bg-gray-900">
        <div className="w-[95%] mx-auto py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
