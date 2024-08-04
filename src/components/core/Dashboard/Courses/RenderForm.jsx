import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { CourseInformation } from "./CourseForms/CourseInformation";
import { CourseBuilder } from "./CourseForms/CourseBuilder";
import { CoursePublish } from "./CourseForms/CoursePublish";
export const RenderForm = () => {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div className="w-full  flex flex-col gap-y-4">
      <div className="w-[90%] mx-auto flex justify-between items-center ">
        {steps.map((item) => (
          <div className="flex justify-evenly gap-x-10  ">
            {/* section 1 */}
            <div
              key={item.id}
              className="flex flex-col justify-between items-center gap-y-2 "
            >
              <div
                className={`${
                  step === item.id 
                    ? "bg-yellow-900 text-yellow-25 border-yellow-25 "
                    : "bg-richblack-800 text-richblack-100 border-richblack-700 "
                } border-[1px] rounded-full w-10 h-10 text-center leading-10 `}
              >
                {step > item.id ? <FaCheck /> : item.id}
              </div>
              <div className=" ">{item.title}</div>
            </div>
            {/* dashed section */}
            {/* <div className="border-2 border-pink-100 relative left-[-3rem]">
              {item.id !== steps.length ? (
                <div className="text-yellow-5">-------------</div>
              ) : (
                <div className="text-richblack-700">-------------</div>
              )}
            </div> */}
          </div>
        ))}
        {/* render differnt forms accordingly */}
      </div>
      {step === 1 && <CourseInformation />}
      {step === 2 && <CourseBuilder />}
      {step === 3 && <CoursePublish />}
    </div>
  );
};