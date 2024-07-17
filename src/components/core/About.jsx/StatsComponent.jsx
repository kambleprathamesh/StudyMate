import React from "react";
const statsData = [
  {
    count: "5k",
    label: "Active Students",
  },
  {
    count: "10+",
    label: "Mentors",
  },
  {
    count: "200+",
    label: "Courses",
  },
  {
    count: "50+",
    label: "Awards",
  },
];
const StatsComponent = () => {
  return (
    <div className="w-full md:h-40 bg-richblack-800 flex justify-evenly items-center md:mb-12">
      {statsData.map((data, index) => {
        return (
          <div key={index} className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-inter font-bold text-richblack-5">{data.count}</h1>
            <h2 className="text-base text-richblack-400">{data.label}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default StatsComponent;
