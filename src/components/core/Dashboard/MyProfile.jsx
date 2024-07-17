// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import IconBtn from "../../Common/IconBtn";
// const MyProfile = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();
//   return (
//     <div className="text-white">
//       <h1>My Profile</h1>
//       {/* section1 */}
//       <div>
//         <div>
//           <img
//             src={user?.image}
//             alt={`profile-${user?.firstName}`}
//             className="aspect-square w-20 rounded-full object-cover"
//           />
//           <div>
//             <p>{user?.firstName + " " + user?.lastName}</p>
//             <p>{user?.email}</p>
//           </div>
//         </div>
//         <IconBtn text="edit" onClick={() => navigate("/dashboard/settings")} />
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IconBtn from "../../Common/IconBtn";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  // console.log(" user?.additionalDetails", user?.additionalDetails.about);
  // return;
  return (
    <div className="text-white">
      <h1>My Profile</h1>
      {/* section1 */}
      <div>
        <div>
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-20 rounded-full object-cover"
          />
          <div>
            <p>{user?.firstName + " " + user?.lastName}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <IconBtn text="Edit" onClick={() => navigate("/dashboard/settings")} />
      </div>

      {/* section2 */}
      <div>
        <div>
          <p>About</p>
          <IconBtn
            text="Edit"
            onClick={() => navigate("/dashboard/settings")}
          />
        </div>
        <p>
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* section 3 */}
      <div>
        <div>
          <div>
            <p>Personal Details</p>
            <IconBtn
              text="Edit"
              onClick={() => navigate("/dashboard/settings")}
            />
          </div>
          <div>
            <p>First Name</p>
            <p>{user?.firstName ?? "First Name"}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email ?? "Email"}</p>
          </div>
          <div>
            <p>Last Name</p>
            <p>{user?.firstName ?? "Last Name"}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.additionalDetails?.about ?? "Gender"}</p>
          </div>
          <div>
            <p>Contact Number</p>
            <p>{user?.additionalDetails?.contactNumber ?? "Contact Number"}</p>
          </div>
          <div>
            <p>Date Of Birth</p>
            <p>{user?.additionalDetails?.dateOfBirth ?? "Date Of Birt"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
