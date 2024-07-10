import HighlightedText from "./HightlightedText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compare from "../../../assets/Images/Compare_with_others.png";
import plan from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button";
function LearnLanguageSection() {
  return (
    <div className="mt-[150px] mb-32">
      <div className="flex flex-col  justify-center items-center gap-6">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for{" "}
          <HighlightedText text={"Learning any Language"} />
        </div>
        <div className="w-[70%] text-lg  text-center text-richblack-800 font-medium mx-auto  ">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center justify-center mt-2">
          <img
            src={knowYourProgress}
            alt="knowyourprogress"
            className="object-contain  -mr-32"
          />
          <img src={compare} alt="compare" className="object-contain  " />
          <img src={plan} alt="plan" className="object-contain -ml-32" />
        </div>
        <div className="w-fit ">
          <CTAButton active={true} linkTo={"/signUp"}>Learn More</CTAButton>
        </div>
      </div>
    </div>
  );
}

export default LearnLanguageSection;
