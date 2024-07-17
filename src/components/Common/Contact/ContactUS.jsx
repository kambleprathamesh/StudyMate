import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../Service/apiConnector";
import { contactusEndpoint } from "../../../Service/api";
import CountryCode from "../../../data/countrycode.json";
const ContactUS = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccesfull },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccesfull) {
      reset({
        email: "",
        firstName: "",
        lastname: "",
        phoneNo: "",
        countryCode: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccesfull]);

  const submitHandler = async (data) => {
    console.log("data:", data);
    try {
      setLoading(true);
      //   const response = await apiConnector(
      //     "POST",
      //     contactusEndpoint.CONTACT_US_API
      //   );
      const response = { status: "OK" };
      console.log("Contact Us Response :", response);
      setLoading(false);
    } catch (error) {}
    setLoading(false);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mb-[100px] flex flex-col gap-4"
      >
        {/* names */}
        <div className="flex  space-x-3">
          {/* firstName */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-[18px] leading-[22px] text-richblack-5 font-normal"
            >
              First Name <span className="text-pink-300">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-300"
              {...register("firstName", { require: true })}
            />
            {errors.firstName && <span>Please Enter Your First Name</span>}
          </div>
          {/* last name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-[18px] leading-[22px] text-richblack-5 font-normal"
            >
              Last Name <span className="text-pink-300">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-300"
              {...register("lastName")}
            />
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="emai"
            className="text-[18px] leading-[22px] text-richblack-5 font-normal"
          >
            Enter Email Address <span className="text-pink-300">*</span>
          </label>
          <input
            type="emai"
            name="email"
            id="email"
            placeholder="Enter You email Address"
            className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-300"
            {...register("email", { require: true })}
          />
          {errors.email && <span>Enter Email Address</span>}
        </div>
        {/* phone number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="label-style">
            Phone Number <span className="text-pink-300">*</span>
          </label>
          <div className="flex gap-5">
            <div className="flex   w-[85px]  flex-col gap-2">
              <select
                className="form-style h-12 p-3 bg-richblack-800   rounded-md text-richblack-5 border-b-[1px] border-richblack-200"
                {...register("countrycode", { required: true })}
              >
                {CountryCode.map((ele, i) => (
                  <option key={i} value={ele.code} className="p-2">
                    {ele.code} - {ele.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="tel"
                name="phoneNo"
                id="phonenumber"
                placeholder="12345 67890"
                className="w-full pl-3 h-12 rounded-md bg-richblack-800 placeholder:pl-2 border-b-[1px] border-richblack-300"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter your Phone Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Phone Number" },
                  minLength: { value: 10, message: "Invalid Phone Number" },
                })}
              />
            </div>
          </div>
          {errors.phoneNo && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              {errors.phoneNo.message}
            </span>
          )}
        </div>

        {/* message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[18px] leading-[22px] text-richblack-5 font-normal"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your Message here..."
            className="md:h-28 p-4 rounded-md bg-richblack-800 placeholder:pl-2 placeholder:text-lg border-b-[1px] border-richblack-300"
          >
            {errors.message && <span>Please Enter Your Message</span>}
          </textarea>
        </div>
        {/* button */}
        <div className="flex flex-col gap-2 mt-10 ">
          <button
            type="submit"
            className="h-12 font-semibold bg-[#FFD60A] text-richblack-900 rounded-md  border-b-[1px] border-richblack-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUS;
