import { HomePageExplore } from "../../../data/homepage-explore";
import { useState } from "react";
import HighlightedText from "./HightlightedText";
import CourseCard from "./CourseCard";
const tabs = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

function ExploreMore() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [course, setCourse] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMycards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    console.log(result);
    setCourse(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div>
      <div className="relative  flex flex-col gap-4 justify-center items-center">
        <div className="text-4xl font-semibold text-center">
          Unlock <HighlightedText text={"Power of code"} />
        </div>
        <p className="text-lg text-center font-semibold text-richblack-300">
          Learn to Build Anything You Can Imagine
        </p>

        <div className=" mt-6 flex flex-row gap-3 rounded-full bg-richblack-700 p-1  ">
          {tabs.map((element, index) => {
            return (
              <div
                className={`text-[16px] flex flex-row  items-center ${
                  currentTab === element
                    ? "bg-richblack-900 text-richblack-5 "
                    : "text-richblack-200"
                } rounded-full transition-all duration-200 hover:bg-richblack-900 hover:text-richblack-5 cursor-pointer px-5 py-2`}
                key={index}
                onClick={() => setMycards(element)}
              >
                {element}
              </div>
            );
          })}
        </div>

        {/* <div className="lg:h-[80px]"></div> */}

        {/* course cards */}
        <div className="relative top-20 flex flex-row justify-evenly items-center gap-4 ">
          {course.map((element, index) => {
            return (
              // <div className="lg:w-[50%] flex items-center justify-center border-4">
              <CourseCard
                heading={element.heading}
                description={element.description}
                level={element.level}
                lessionNumber={element.lessionNumber}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                key={index}
              />
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;
