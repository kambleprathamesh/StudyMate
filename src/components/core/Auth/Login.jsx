// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { useState } from "react";
// // import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormdata] = useState({
//     email: "",
//     password: "",
//   });

//   const handleOnChnage = (e) => {
//     setFormdata((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div className="w-11/12 max-w-maxContent bg-richblack-900">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <div>
//               <label htmlFor="email">
//                 Email Address
//                 <input
//                   type="email"
//                   placeholder="Enter Email Address"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleOnChnage}
//                 />
//               </label>
//             </div>
//             <div>
//               <label htmlFor="password">
//                 Password
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter Password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleOnChnage}
//                 />
//                 <span onClick={setShowPassword((prev) => !prev)}>
//                   {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
//                 </span>
//               </label>
//               <Link to="/forgot-password">
//                 <p>Forgot Password</p>
//               </Link>
//             </div>
//             <button
//               type="submit"
//               className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {login} from "../../../Service/operation/authAPI";
import { login } from "../../../Service/operation/authAPI";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password, navigate));
  };

  return (
    <div className="w-full mt-6 max-w-maxContent bg-richblack-900 ">
      <form
        onSubmit={handleSubmit}
        className="   border-blue-50 flex  lg:flex-col gap-4"
      >
        <div>
          <label htmlFor="email" className="w-[80%] flex flex-col gap-1">
            <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
              {" "}
              Email Address <span className="text-pink-300">*</span>
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              required
              value={formData.email}
              onChange={handleOnChange}
              className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-300"
            />
          </label>
        </div>

        <div className=" relative">
          <label
            htmlFor="password"
            className="w-[80%] flex flex-col relative gap-1"
          >
            <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
              {" "}
              Password <span className="text-pink-300">*</span>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              required
              className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-300"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-9 right-5 cursor-pointer  "
            >
              {showPassword ? (
                <FaRegEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaRegEyeSlash fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <div className="w-[80%]  text-right absolute top-18">
            <Link to="/forgot-password">
              <span className=" text-[12px] text-blue-100 font-inter font-semibold  leading-5 text-center  ">
                Forgot Password
              </span>
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-[80%] mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
