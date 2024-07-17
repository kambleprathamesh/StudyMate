// import React from "react";
// import { useLocation, NavLink, matchRoutes } from "react-router-dom";
// import * as Icons from "react-icons/vsc";
// import { useDispatch } from "react-redux";
// const SidebarLink = (link, iconName) => {
//   const icons = Icons[iconName];
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const matchRoute = (route) => {
//     return matchRoutes({ path: route }, location.pathname);
//   };
//   return (
//     <div>
//       <NavLink
//         to={link.path}
//         className={`${
//           matchRoute(link.path) ? "bg-yellow-800" : "bg-transparent"
//         } relative px-12 py-8 text-sm font-medium`}
//       >
//         <span
//           className={`absolute left-0 top-0 h-full w-[0.5rem] bg-yellow-50 ${
//             matchRoute(link.path) ? "bg-opacity-100" : "bg-opacity-0"
//           }`}
//         ></span>
//         <div className="felx items-center gap-x-3">
//           <Icons className="text-lg" />
//           <span>{link.name}</span>
//         </div>
//       </NavLink>
//     </div>
//   );
// };

// export default SidebarLink;

import React from "react";
import { useLocation, NavLink, matchPath } from "react-router-dom";
import * as Icons from "react-icons/vsc";
// import { useDispatch } from "react-redux";

const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();
  // const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div>
      <NavLink
        to={link.path}
        className={`relative px-8 py-2 text-sm font-medium ${
          matchRoute(link.path)
            ? "bg-yellow-800 text-yellow-50"
            : "bg-opacity-0 text-richblack-300"
        } transition-all duration-200`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
            matchRoute(link.path) ? "opacity-100" : "opacity-0"
          }`}
        ></span>
        <div className="flex items-center gap-x-2">
          {/* Icon Goes Here */}
          <Icon className="text-lg" />
          <span>{link.name}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarLink;
