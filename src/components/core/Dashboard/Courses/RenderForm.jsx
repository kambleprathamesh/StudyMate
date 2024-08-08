// import React from "react";
// import { FaCheck } from "react-icons/fa6";
// import { useSelector } from "react-redux";
// import { CourseInformation } from "./CourseInformation/CourseInformation";
// import { CourseBuilder } from "./Coursebuilder/CourseBuilder";
// import { CoursePublish } from "./CourseInformation/CoursePublish";
// export const RenderForm = () => {
//   const { step } = useSelector((state) => state.course);
//   const steps = [
//     {
//       id: 1,
//       title: "Course Information",
//     },
//     {
//       id: 2,
//       title: "Course Builder",
//     },
//     {
//       id: 3,
//       title: "Publish",
//     },
//   ];
//   return (
//     <div className="w-full  flex flex-col gap-y-4">
//       <div className="w-[90%] mx-auto flex justify-between items-center ">
//         {steps.map((item) => (
//           <div className="flex justify-evenly gap-x-10  ">
//             {/* section 1 */}
//             <div
//               key={item.id}
//               className="flex flex-col justify-between items-center gap-y-2 "
//             >
//               <div
//                 className={`${
//                   step === item.id 
//                     ? "bg-yellow-900 text-yellow-25 border-yellow-25 "
//                     : "bg-richblack-800 text-richblack-100 border-richblack-700 "
//                 } border-[1px] rounded-full w-10 h-10 text-center leading-10 `}
//               >
//                 {step > item.id ? <FaCheck /> : item.id}
//               </div>
//               <div className=" ">{item.title}</div>
//             </div>
//             {/* dashed section */}
            
//           </div>
//         ))}
//         {/* render differnt forms accordingly */}
//       </div>
//       {step === 1 && <CourseInformation />}
//       {step === 2 && <CourseBuilder />}
//       {/* {step === 3 && <CoursePublish />} */}
//     </div>
//   );
// };




import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import {CourseInformation} from "./CourseInformation/CourseInformation";
import {CourseBuilder} from "./Coursebuilder/CourseBuilder";
import {CoursePublish} from "./CourseInformation/CoursePublish";

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
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {steps.map((item) => (
          <div key={item.id} className="flex flex-col justify-between items-center gap-y-2">
            <div
              className={`${
                step === item.id
                  ? "bg-yellow-900 text-yellow-25 border-yellow-25"
                  : "bg-richblack-800 text-richblack-100 border-richblack-700"
              } border-[1px] rounded-full w-10 h-10 text-center leading-10`}
            >
              {step > item.id ? <FaCheck /> : item.id}
            </div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>

      {/* Render specific component based on current step */}
      {step === 1 && <CourseInformation />}
      {step === 2 && <CourseBuilder />}
      {step === 3 && <CoursePublish />}
    </div>
  );
};
