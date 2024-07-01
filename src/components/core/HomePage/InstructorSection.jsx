import instructor from "../../../assets/Images/instructor.jpeg";
import HighlightedText from "./HightlightedText";
import { FaArrowRight } from "react-icons/fa6";
import CTAButton from "./Button";
function InstructorSection() {
  return (
    <div className="mt-20">
      <div className="flex flex-row gap-20 items-center">
        {/* left dibba */}
        <div className="w-[45%]">
          <img src={instructor} alt="instructor" />
        </div>
        {/* right dibba */}
        <div className="w-[40%] flex flex-col items-start gap-10">
          <div className="w-[60%] text-4xl font-bold ">
            Become an <HighlightedText text={"Instructor"} />
          </div>
          <p className="font-mediun text-[16px] w-[90%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
         
            <CTAButton active={true} linkTo={"/signUp"}>
              <div className="flex w-fit items-center gap-2">
                Start Teaching Today <FaArrowRight />
              </div>
            </CTAButton>
          
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
