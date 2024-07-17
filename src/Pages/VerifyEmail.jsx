import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { IoIosTimer } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../Service/operation/authAPI";
import { signUp } from "../Service/operation/authAPI";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const VerifyEmail = () => {
  const { signupData, loading } = useSelector((state) => state.auth);
  const { firstName, lastName, email, password, confirmPassword, accountType } =
    signupData;
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (!signupData) {
      navigate("/signUp");
    }
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    const data = { ...signupData, otp };
    e.preventDefault();
    dispatch(signUp(data, navigate));
  };
  return (
    <div className="w-full h-[80vh] flex place-content-center place-items-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-6 text-richblack-5">
          <div className="space-y-2">
            <h1 className="text-3xl font-inter font-semibold text-richblack-5">
              Verify email
            </h1>
            <p className="text-lg font-normal text-richblack-100">
              A verification code has been sent to you. Enter the code below{" "}
            </p>
          </div>
          <div>
            <form onSubmit={submitHandler} className="flex flex-col gap-6 text-richblack-5">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="w-[44px] h-12 text-xl lg:w-52 border-0 bg-richblack-800 rounded-[0.5rem] text-white aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                    //  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "0 6px",
                }}
              />

              <button
                type="submit"
                className="w-full h-12  bg-[#FFD60A] text-richblack-900 font-inter text-center font-semibold rounded-md"
              >
                Verify Email
              </button>
            </form>
            <div className="flex justify-between items-center">
              <Link to="/login">
                <div className="flex  items-center gap-1  ml-4 text-base font-medium font-inter">
                  <span>
                    <FaArrowLeftLong />
                  </span>
                  <p>Back to Login</p>
                </div>
              </Link>
              <div
                className="flex  items-center gap-1  ml-4 text-base font-medium font-inter text-blue-100"
                onClick={() => dispatch(sendOtp(signupData.email))}
              >
                <span>
                  <IoIosTimer />
                </span>
                <p>Resend It</p>
              </div>
            </div>
          </div>
          {/* <Link to="/login">
            <div className="flex  items-center gap-1  ml-4 text-base font-medium font-inter">
              <span>
                <FaArrowLeftLong />
              </span>
              <p>Back to Login</p>
            </div>
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
