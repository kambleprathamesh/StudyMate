// import React, { useState } from "react";
// import { VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { sidebarLinks } from "../../../data/dashboard-links";
// import { logout } from "../../../Service/operation/authAPI";
// import SidebarLink from "./SidebarLink";
// import ConfirmationModal from "../../Common/ConfirmationModal";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const [confirmationModal, setConfirmationModal] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   );
//   const { loading: authLoading } = useSelector((state) => state.auth);

//   if (authLoading || profileLoading) {
//     return <div>Loading....</div>;
//   }

//   return (
//     <>
//       <div className="relative">
//         <div>
//           <div className="min-w-[222px] h-[calc(100vh-3.5rem)] flex flex-col border-r-[1px] border-richblack-700 bg-richblack-800 py-10 px-3">
//             <div className="w-full border-4 border-blue-50 flex flex-col">
//               {sidebarLinks.map((link) => {
//                 if (link.type && user?.accountType !== link.type) return null;
//                 return (
//                   <SidebarLink key={link.id} link={link} iconName={link.icon} />
//                 );
//               })}
//             </div>
//             <div className="mx-auto mt-8 mb-5 h-[1px] w-10/12 bg-richblack-700"></div>
//             <div>
//               <SidebarLink
//                 link={{ name: "Setting", path: "dashboard/setting" }}
//                 iconName="VscSettingsGear"
//               />
//               <button
//                 onClick={() =>
//                   setConfirmationModal({
//                     text1: "Are You Sure?",
//                     text2: "You will be Logged out",
//                     btn1Text: "Logout",
//                     btn2Text: "Cancel",
//                     btn1handler: () => dispatch(logout(navigate)),
//                     btn2handler: () => setConfirmationModal(null),
//                   })
//                 }
//                 className="text-sm font-medium text-richblack-300"
//               >
//                 <div className="flex items-center gap-x-3">
//                   <VscSignOut className="text-lg" />
//                   <span>Logout</span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//         {confirmationModal && (
//           <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
//             <ConfirmationModal modalData={confirmationModal} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { sidebarLinks } from "../../../data/dashboard-links";
// import { logout } from "../../../Service/operation/authAPI";
// import SidebarLink from "./SidebarLink";
// import ConfirmationModal from "../../Common/ConfirmationModal";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const [confirmationModal, setConfirmationModal] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   );
//   const { loading: authLoading } = useSelector((state) => state.auth);

//   if (authLoading || profileLoading) {
//     return <div>Loading....</div>;
//   }

//   return (
//     <>
//       <div className="flex relative min-h-screen">
//         <div className="min-w-[222px] flex flex-col border-r-[1px] border-richblack-700 bg-richblack-800 py-10 px-3">
//           <div className="flex flex-col  space-y-4">
//             {sidebarLinks.map((link) => {
//               if (link.type && user?.accountType !== link.type) return null;
//               return (
//                 <SidebarLink key={link.id} link={link} iconName={link.icon} />
//               );
//             })}
//           </div>
//           <div className="mx-auto mt-8 mb-5 h-[1px] w-10/12 bg-richblack-700"></div>
//           <div>
//             <SidebarLink
//               link={{ name: "Setting", path: "dashboard/setting" }}
//               iconName="VscSettingsGear"
//             />
//             <button
//               onClick={() =>
//                 setConfirmationModal({
//                   text1: "Are You Sure?",
//                   text2: "You will be Logged out",
//                   btn1Text: "Logout",
//                   btn2Text: "Cancel",
//                   btn1handler: () => dispatch(logout(navigate)),
//                   btn2handler: () => setConfirmationModal(null),
//                 })
//               }
//               className="text-sm font-medium text-richblack-300"
//             >
//               <div className="flex items-center gap-x-3">
//                 <VscSignOut className="text-lg" />
//                 <span>Logout</span>
//               </div>
//             </button>
//           </div>
//         </div>
//         {confirmationModal && (
//           <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm">
//             <ConfirmationModal modalData={confirmationModal} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../Service/operation/authAPI";
import SidebarLink from "./SidebarLink";
import ConfirmationModal from "../../Common/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [confirmationModal, setConfirmationModal] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (authLoading || profileLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className="flex relative min-h-screen">
        <div className="min-w-[222px] flex flex-col  border-r-[1px] border-richblack-700 bg-richblack-800 py-10 px-3">
          <div className="flex flex-col space-y-8">
            {sidebarLinks.map((link) => {
              if (link.type && user?.accountType !== link.type) return null;
              return (
                <SidebarLink key={link.id} link={link} iconName={link.icon} />
              );
            })}
          </div>
          <div className="mx-auto mt-8 mb-5 h-[1px] w-10/12 bg-richblack-700"></div>
          <div>
            <SidebarLink
              link={{ name: "Setting", path: "dashboard/setting" }}
              iconName="VscSettingsGear"
            />
            <button
              onClick={() =>
                setConfirmationModal({
                  text1: "Are You Sure?",
                  text2: "You will be Logged out",
                  btn1Text: "Logout",
                  btn2Text: "Cancel",
                  btn1handler: () => dispatch(logout(navigate)),
                  btn2handler: () => setConfirmationModal(null),
                })
              }
              className="text-sm font-medium text-richblack-300 ml-4 mt-10"
            >
              <div className="flex items-center gap-x-3 ">
                <VscSignOut className="text-lg" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
        {confirmationModal && (
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm">
            <ConfirmationModal modalData={confirmationModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
