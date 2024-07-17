// import { useState, useEffect } from "react";
import { Link, matchPath } from "react-router-dom";
import logo from "../../assets/Logo/Logo.svg";
import { useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
// import { apiConnector } from "../../service.js/apiConnector";
// import { categories } from "../../service.js/api";
import { FaAngleDown } from "react-icons/fa6";
function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const subLinks = [
    {
      title: "Python",
      link: "/catalog/python",
    },
    {
      title: "Web Development",
      link: "/catalog/Web-dev",
    },
  ];
  //   const [subLinks, setSublinks] = useState([]);
  //   const fetchSubLink = async () => {
  //     try {
  //       const result = await apiConnector("GET", categories.CATEGORIES_API);
  //       console.log("Printing SubLinks ", result);
  //       setSublinks(result.data.data);
  //     } catch (error) {
  //       console.log("ERROR ocuured while fetching Categories ", error);
  //     }
  //   };
  //   useEffect(() => {
  //      fetchSubLink();
  //   }, []);

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }
  return (
    <div className="h-14 flex  border-b-[1px]  border-richblack-700">
      <div className="w-11/12 max-w-maxContent mx-auto flex lg:flex-row justify-between items-center ">
        {/* logo img */}
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* navLibnks */}
        <nav>
          <ul className="flex gap-5 text-richblack-25">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="flex relative gap-2 items-center group">
                      <p>{link.title}</p>
                      <FaAngleDown />
                      <div className="invisible absolute left-[50%] top-6 translate-x-[-50%] translate-y-[12%] flex flex-col p-5 justify-center bg-richblack-5 text-richblue-900 rounded-md transition-all duration-200 group-hover:visible lg:w-[200px] z-100">
                        <div className="invisible absolute right-[35%] -top-2 bg-richblack-5 h-6 w-6 rotate-45  group-hover:visible"></div>
                        {subLinks.length ? (
                          subLinks.map((subLink, index) => (
                            <Link key={index} to={`${subLink.link}`}>
                              <p>{subLink.title}</p>
                            </Link>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* login-signup Button */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <IoCartOutline />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 rounded-md  text-richblack-100 px-[12px] py-[8px]">
                Log In
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signUp">
              <button className="border border-richblack-700 bg-richblack-800 rounded-md  text-richblack-100 px-[12px] py-[8px]">
                Sign Up
              </button>
            </Link>
          )}
          {token != null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
