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

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import IconBtn from "../../Common/IconBtn";

// const MyProfile = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();
//   // console.log(" user?.additionalDetails", user?.additionalDetails.about);
//   // return;
//   return (
//     <div className="w-full max-w-maxContent text-white flex flex-col ">
//       <h1>My Profile</h1>
//       {/* section1 */}
//       <div className="flex">
//         <div className="flex">
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
//         <IconBtn text="Edit" onClick={() => navigate("/dashboard/settings")} />
//       </div>

//       {/* section2 */}
//       <div>
//         <div className="flex">
//           <p>About</p>
//           <IconBtn
//             text="Edit"
//             onClick={() => navigate("/dashboard/settings")}
//           />
//         </div>
//         <p>
//           {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//         </p>
//       </div>

//       {/* section 3 */}
//       <div>
//         <div>
//           <div>
//             <p>Personal Details</p>
//             <IconBtn
//               text="Edit"
//               onClick={() => navigate("/dashboard/settings")}
//             />
//           </div>
//           <div>
//             <p>First Name</p>
//             <p>{user?.firstName ?? "First Name"}</p>
//           </div>
//           <div>
//             <p>Email</p>
//             <p>{user?.email ?? "Email"}</p>
//           </div>
//           <div>
//             <p>Last Name</p>
//             <p>{user?.firstName ?? "Last Name"}</p>
//           </div>
//           <div>
//             <p>Gender</p>
//             <p>{user?.additionalDetails?.about ?? "Gender"}</p>
//           </div>
//           <div>
//             <p>Contact Number</p>
//             <p>{user?.additionalDetails?.contactNumber ?? "Contact Number"}</p>
//           </div>
//           <div>
//             <p>Date Of Birth</p>
//             <p>{user?.additionalDetails?.dateOfBirth ?? "Date Of Birth"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import IconBtn from "../../Common/IconBtn";

// const MyProfile = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();
//   return (
//     <div className="w-full max-w-maxContent text-richblack-5 ">
//       <h1 className="text-2xl font-bold mb-4">My Profile</h1>
//       <div className="flex flex-col space-y-6 ">
//         {/* section1 */}
//         <div className="flex items-center mb-6 bg-[#161D29] p-6 rounded-md">
//           <img
//             src={user?.image}
//             alt={`profile-${user?.firstName}`}
//             className="aspect-square w-24 h-24 rounded-full object-cover border-2 border-richblack-600"
//           />
//           <div className="ml-4">
//             <p className="text-lg font-semibold">
//               {user?.firstName + " " + user?.lastName}
//             </p>
//             <p className="text-sm">{user?.email}</p>
//           </div>
//           <IconBtn
//             text="Edit"
//             onClick={() => navigate("/dashboard/settings")}
//             className="ml-auto"
//           />
//         </div>

//         {/* section2 */}
//         <div className="mb-6 bg-[#161D29] p-6 rounded-md">
//           <div className="flex items-center mb-2">
//             <p className="text-richblack-600 text-sm font-normal">About</p>
//             <IconBtn
//               text="Edit"
//               onClick={() => navigate("/dashboard/settings")}
//               className="ml-auto"
//             />
//           </div>
//           <p className="text-richblack-5 text-sm">
//             {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//           </p>
//         </div>

//         {/* section 3 */}
//         <div>
//           <div className="mb-4 bg-[#161D29] p-6 rounded-md">
//             <div className="flex items-center mb-2">
//               <p className="text-richblack-600 text-sm font-normal">
//                 Personal Details
//               </p>
//               <IconBtn
//                 text="Edit"
//                 onClick={() => navigate("/dashboard/settings")}
//                 className="ml-auto"
//               />
//             </div>
//             <div className="mb-2">
//               <p className="text-richblack-600 text-sm font-normal">
//                 First Name
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.firstName ?? "First Name"}
//               </p>
//             </div>
//             <div className="mb-2">
//               <p className="text-richblack-600 text-sm font-normal">Email</p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.email ?? "Email"}
//               </p>
//             </div>
//             <div className="mb-2">
//               <p className="text-richblack-600 text-sm font-normal">
//                 Last Name
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.lastName ?? "Last Name"}
//               </p>
//             </div>
//             <div className="mb-2">
//               <p className="text-richblack-600 text-sm font-normal">Gender</p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.additionalDetails?.gender ?? "Gender"}
//               </p>
//             </div>
//             <div className="mb-2">
//               <p className="text-richblack-600 text-sm font-normal">
//                 Contact Number
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.additionalDetails?.contactNumber ?? "Contact Number"}
//               </p>
//             </div>
//             <div className="mb-2">
//               <p className="text-richblack-600 text-sm font-normal">
//                 Date Of Birth
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.additionalDetails?.dateOfBirth ?? "Date Of Birth"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

// import React from "react";
//
// import IconBtn from "../../Common/IconBtn";
// import { FaEdit } from "react-icons/fa";
// const MyProfile = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();
//   return (
//     <div className="w-full max-w-maxContent text-richblack-5">
//       <h1 className="text-2xl font-bold mb-4">My Profile</h1>
//       <div className="flex flex-col space-y-4">
//         {/* section1 */}
//         <div className="w-3/4 mx-auto bg-[#161D29] p-6 rounded-md">
//           <div className="flex items-center mb-4">
//             <img
//               src={user?.image}
//               alt={`profile-${user?.firstName}`}
//               className="aspect-square w-20 h-20 rounded-full object-cover border-2 border-richblack-600"
//             />
//             <div className="ml-4">
//               <p className="text-lg font-semibold">
//                 {user?.firstName + " " + user?.lastName}
//               </p>
//               <p className="text-sm">{user?.email}</p>
//             </div>
//             <IconBtn
//               text="Edit"
//               onClick={() => navigate("/dashboard/settings")}
//               className="ml-auto"
//             />
//           </div>
//         </div>

//         {/* Spacer */}

//         {/* section2 */}
//         <div className=" w-3/4 mx-auto bg-[#161D29] p-6 rounded-md">
//           <div className="flex items-center mb-2">
//             <p className="text-richblack-600 text-sm font-normal">About</p>
//             <IconBtn
//               text="Edit"
//               onClick={() => navigate("/dashboard/settings")}
//               className="ml-auto"
//             />
//           </div>
//           <p className="text-richblack-5 text-sm">
//             {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//           </p>
//         </div>

//         {/* Spacer */}

//         {/* section 3 */}
//         <div className=" w-3/4 mx-auto bg-[#161D29] p-6 rounded-md">
//           <div className="flex items-center mb-4">
//             <p className="text-richblack-600 text-sm font-normal">
//               Personal Details
//             </p>
//             <IconBtn
//               text="Edit"
//               onClick={() => navigate("/dashboard/settings")}
//               className="ml-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-richblack-600 text-sm font-normal">
//                 First Name
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.firstName ?? "First Name"}
//               </p>
//             </div>
//             <div>
//               <p className="text-richblack-600 text-sm font-normal">Email</p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.email ?? "Email"}
//               </p>
//             </div>
//             <div>
//               <p className="text-richblack-600 text-sm font-normal">
//                 Last Name
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.lastName ?? "Last Name"}
//               </p>
//             </div>
//             <div>
//               <p className="text-richblack-600 text-sm font-normal">Gender</p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.additionalDetails?.gender ?? "Gender"}
//               </p>
//             </div>
//             <div>
//               <p className="text-richblack-600 text-sm font-normal">
//                 Contact Number
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.additionalDetails?.contactNumber ?? "Contact Number"}
//               </p>
//             </div>
//             <div>
//               <p className="text-richblack-600 text-sm font-normal">
//                 Date Of Birth
//               </p>
//               <p className="text-richblack-5 text-sm">
//                 {user?.additionalDetails?.dateOfBirth ?? "Date Of Birth"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React from "react";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa"; // Import the FaEdit icon
import { useNavigate } from "react-router-dom";
const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate(); // Make sure to import useNavigate

  return (
    <div className="w-full max-w-maxContent text-richblack-5">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="flex flex-col space-y-4">
        {/* section1 */}
        <div className="w-3/4 mx-auto bg-[#161D29] p-6 rounded-md relative">
          <div className="flex items-center mb-4">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-20 h-20 rounded-full object-cover border-2 border-richblack-600"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">
                {user?.firstName + " " + user?.lastName}
              </p>
              <p className="text-sm">{user?.email}</p>
            </div>
            <button
              onClick={() => navigate("/dashboard/settings")}
              className="absolute right-6 top-6 bg-transparent border-none bg-yellow-100  text-richblack-700 p-3 rounded-md flex items-center gap-2"
            >
              <FaEdit size={20} />
              <span>Edit</span>
            </button>
          </div>
        </div>

        {/* Spacer */}

        {/* section2 */}
        <div className="w-3/4 mx-auto bg-[#161D29] p-6 rounded-md relative">
          <div className="flex items-center mb-2">
            <p className="text-richblack-600 text-sm font-normal">About</p>
            <button
              onClick={() => navigate("/dashboard/settings")}
              className="absolute right-6 top-6 bg-transparent border-none bg-yellow-100  text-richblack-700 p-3 rounded-md flex items-center gap-2"
            >
              <FaEdit size={20} />
              <span>Edit</span>
            </button>
          </div>
          <p className="text-richblack-5 text-sm">
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>

        {/* section 3 */}
        <div className="w-3/4 mx-auto bg-[#161D29] p-6 rounded-md relative">
          <div className="flex items-center mb-4">
            <p className="text-richblack-600 text-sm font-normal">
              Personal Details
            </p>
            <button
              onClick={() => navigate("/dashboard/settings")}
              className="absolute right-6 top-6 bg-transparent border-none bg-yellow-100  text-richblack-700 p-3 rounded-md flex items-center gap-2"
            >
              <FaEdit size={20} />
              <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-richblack-600 text-sm font-normal">
                First Name
              </p>
              <p className="text-richblack-5 text-sm">
                {user?.firstName ?? "First Name"}
              </p>
            </div>
            <div>
              <p className="text-richblack-600 text-sm font-normal">Email</p>
              <p className="text-richblack-5 text-sm">
                {user?.email ?? "Email"}
              </p>
            </div>
            <div>
              <p className="text-richblack-600 text-sm font-normal">
                Last Name
              </p>
              <p className="text-richblack-5 text-sm">
                {user?.lastName ?? "Last Name"}
              </p>
            </div>
            <div>
              <p className="text-richblack-600 text-sm font-normal">Gender</p>
              <p className="text-richblack-5 text-sm">
                {user?.additionalDetails?.gender ?? "Gender"}
              </p>
            </div>
            <div>
              <p className="text-richblack-600 text-sm font-normal">
                Contact Number
              </p>
              <p className="text-richblack-5 text-sm">
                {user?.additionalDetails?.contactNumber ?? "Contact Number"}
              </p>
            </div>
            <div>
              <p className="text-richblack-600 text-sm font-normal">
                Date Of Birth
              </p>
              <p className="text-richblack-5 text-sm">
                {user?.additionalDetails?.dateOfBirth ?? "Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
