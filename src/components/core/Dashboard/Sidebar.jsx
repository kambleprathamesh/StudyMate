import React, { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../Service/operation/authAPI";
import { useSelector } from "react-redux";
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
      <div>
        <div className="min-w-[222px] h-[calc(100vh-3.5rem)] flex flex-col border-r-[1px] border-richblack-700 bg-richblack-800 py-10">
          <div className="flex flex-col">
            {sidebarLinks.map((link) => {
              // console.log("user?.accoutType", user?.accountType);
              // return;
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
              className="text-sm font-medium text-richblack-300"
            >
              <div className="flex items-center gap-x-3">
                <VscSignOut className="text-lg" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default Sidebar;
