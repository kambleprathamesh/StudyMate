// third part
import { ACCOUNT_TYPE } from "../../../Utils/constants";
import ToggleButton from "../../Common/ToggleButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../../../Slice/authSlice";
import { sendOtp } from "../../../Service/operation/authAPI";

const tabData = [
  {
    id: 1,
    tabName: "student",
    type: ACCOUNT_TYPE.STUDENT,
  },
  {
    id: 2,
    tabName: "instructors",
    type: ACCOUNT_TYPE.INSTRUCTOR,
  },
];

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const changeHandler = (e) => {
    console.log(e.target.name, "and", e.target.value);
    // Handle input fields when some value changes
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check Password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };
    console.log(signupData);

    // Setting signup data to state

    // To be used after otp verification
    dispatch(setSignupData(signupData));
    console.log(signupData);
    
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  return (
    <div className="w-full mt-6 max-w-maxContent bg-richblack-900 ">
      <ToggleButton
        tabData={tabData}
        field={accountType} // Correctly passing current accountType as field
        setField={setAccountType} // Correctly passing setAccountType as setField
      />
      <form onSubmit={handleSubmit} className=" flex  flex-col gap-4">
        <div className="flex flex-row">
          <div className="flex flex-col ">
            <label htmlFor="firstName" className="w-[95%] flex flex-col gap-1">
              <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
                {" "}
                First Name <span className="text-pink-300">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                required
                onChange={changeHandler}
                className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-500"
              />
            </label>
          </div>
          <div className="flex flex-col mr-4">
            <label htmlFor="lastName" className="w-[95%] flex flex-col gap-1">
              <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
                {" "}
                Last Name <span className="text-pink-300">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                required
                value={lastName}
                onChange={changeHandler}
                className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-500"
              />
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="w-[73%] flex flex-col gap-1">
            <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
              {" "}
              Email Address <span className="text-pink-300">*</span>
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              value={email}
              required
              onChange={changeHandler}
              className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-500"
            />
          </label>
        </div>

        <div className="flex flex-row ">
          <div className=" relative">
            <label
              htmlFor="createPass"
              className="w-[95%] flex flex-col relative"
            >
              <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
                {" "}
                Create Password <span className="text-pink-300">*</span>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={password}
                required
                onChange={changeHandler}
                className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-500"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-9 right-2 cursor-pointer "
              >
                {showPassword ? (
                  <FaRegEye fontSize={20} fill="#AFB2BF" />
                ) : (
                  <FaRegEyeSlash fontSize={20} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
          <div className=" relative">
            <label
              htmlFor="confirmPass"
              className="w-[95%] flex flex-col relative"
            >
              <p className="text-[14px] leading-[22px] text-richblack-5 font-normal">
                {" "}
                Confirm Password <span className="text-pink-300">*</span>
              </p>
              <input
                type={confirmPass ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                required
                onChange={changeHandler}
                className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-500"
              />
              <span
                onClick={() => setConfirmPass((prev) => !prev)}
                className="absolute top-9 right-2  cursor-pointer"
              >
                {confirmPass ? (
                  <FaRegEye fontSize={20} fill="#AFB2BF" />
                ) : (
                  <FaRegEyeSlash fontSize={20} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-[73%] mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
