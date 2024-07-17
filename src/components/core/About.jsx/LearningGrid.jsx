import React from "react";
// import HighlightedText from "../HomePage/HightlightedText";
import Button from "../HomePage/Button";
const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];
const LearningGrid = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-4 mx-auto w-11/12 max-w-maxContent mt-20 mb-20">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${
              index === 0 && "lg:col-span-2 h-[250px] bg-transparent"
            }
        ${
          card.order % 2 === 1
            ? "bg-richblack-700 h-[250px] flex flex-col items-center justify-start "
            : "bg-richblack-800 h-[250px] flex flex-col items-center justify-start"
        }
        ${card.order === 3 && "lg:col-start-2 h-[250px]"}
        `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[80%] flex flex-col gap-3 ">
                <div className="text-4xl font-inter font-bold text-richblack-5">
                  {card.heading}
                  <span
                    className={`font-bold text-4xl bg-gradient-to-br from-[#5433FF] via-[#20BDFF] to-[#A5FECB] bg-clip-text text-transparent `}
                  >
                    {" "}
                    {card.highlightText}
                  </span>
                </div>
                <p className="font-medium text-base text-richblack-300">
                  {card.description}
                </p>
                <div className="w-fit">
                  <Button active={true} linkTo={card.BtnLink}>
                    {card.BtnText}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8  mt-6">
                <h1 className="w-56 text-lg font-inter font-semibold text-richblack-5">
                  {card.heading}
                </h1>
                <p className="w-56 text-base font-inter font-normal text-richblack-100">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
