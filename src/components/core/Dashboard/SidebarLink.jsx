
// import React from "react";
// import { useLocation, NavLink, matchPath } from "react-router-dom";
// import * as Icons from "react-icons/vsc";
// // import { useDispatch } from "react-redux";

// const SidebarLink = ({ link, iconName }) => {
//   const Icon = Icons[iconName];
//   const location = useLocation();
//   // const dispatch = useDispatch();

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };

//   return (
//     <div>
//       <NavLink
//         to={link.path}
//         className={`w-[110px] relative px-8 py-2 text-sm font-medium ${
//           matchRoute(link.path)
//             ? "bg-yellow-800 text-yellow-50"
//             : "bg-opacity-0 text-richblack-300"
//         } transition-all duration-200`}
//       >
//         <span
//           className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
//             matchRoute(link.path) ? "opacity-100" : "opacity-0"
//           }`}
//         ></span>
//         <div className="flex items-center gap-x-2">
//           {/* Icon Goes Here */}
//           <Icon className="text-lg" />
//           <span>{link.name}</span>
//         </div>
//       </NavLink>
//     </div>
//   );
// };

// export default SidebarLink;



// import React from "react";
// import { useLocation, NavLink, matchPath } from "react-router-dom";
// import * as Icons from "react-icons/vsc";
// // import { useDispatch } from "react-redux";

// const SidebarLink = ({ link, iconName }) => {
//   const Icon = Icons[iconName];
//   const location = useLocation();
//   // const dispatch = useDispatch();

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };

//   return (
//     <NavLink
//       to={link.path}
//       className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
//         matchRoute(link.path)
//           ? "bg-yellow-200 text-yellow-900"
//           : "bg-transparent text-richblack-300"
//       }`}
//     >
//       <div className="flex items-center gap-x-2">
//         <Icon className="text-lg" />
//         <span>{link.name}</span>
//       </div>
//     </NavLink>
//   );
// };

// export default SidebarLink;


import React from "react";
import { useLocation, NavLink, matchPath } from "react-router-dom";
import * as Icons from "react-icons/vsc";

const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath(route, location.pathname);
  };

  return (
    <div className="relative">
      <NavLink
        to={link.path}
        className={`flex items-center  gap-x-2 w-full py-2 px-4 text-sm font-medium transition-all duration-200 ${
          matchRoute(link.path) ? "bg-yellow-800 text-yellow-50" : "text-richblack-300"
        }`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-1 bg-yellow-50 ${
            matchRoute(link.path) ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        ></span>
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </NavLink>
    </div>
  );
};

export default SidebarLink;
