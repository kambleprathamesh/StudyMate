import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import HighlightedText from "../components/core/HomePage/HightlightedText";
import CTAButton from "../components/core/HomePage/Button";
import HomeVideo from "../assets/Images/banner.mp4";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearnLanguageSection from "../components/core/HomePage/LearnLanguage";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ReviewSection from "../components/core/HomePage/ReviewSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="w-11/12 max-w-maxContent   relative mx-auto flex flex-col items-center justify-center text-white ">
        <Link to={"/signUp"}>
          <div className=" relative  mt-16 p-1 mx-auto rounded-full bg-richblack-800 text-richblack-200 font-bold transition-all duration-200 hover:scale-95 w-fit  group">
            <div className="flex flex-row items-center  justify-between rounded-full gap-2 px-10 py-[5px] group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-8">
          Empower Your Future With
          <HighlightedText text={"Coding Skills"} />
        </div>

        <div className="w-[80%] text-center text-lg font-bold text-richblack-200 mt-6">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* buttons */}
        <div className="flex flex-row gap-8 mt-8">
          <CTAButton active={true} linkTo={"/signUp"}>
            Learn more
          </CTAButton>
          <CTAButton active={false} linkTo={"/signUp"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* video */}
        <div className="w-[65%]  mx-3 my-14 shadow shadow-blue-200">
          <video muted loop autoPlay>
            <source src={HomeVideo} type="video/mp4" />
          </video>
        </div>

        {/* Code Blocks 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightedText text={"coding potential"} /> With
                Our Online Courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctaBtn1={{
              text: "Try it Yourself",
              linkTo: "/signUp",
              active: true,
            }}
            ctaBtn2={{
              text: "Learn More",
              linkTo: "/login",
              active: false,
            }}
            CodeBlock={`<!DOCTYPE html>\n <html>\n head><title>Example</\n title><linkrel="stylesheet"href="styles.css">\n /head>\n <body>\n <h1><ahref="/">Header</a>\n </h1>\n nav><ahref="one/">One</a><ahref="two/">Two</\n a><ahref="three/">Three</a>\n </nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* code blocks 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="flex gap-2 text-4xl font-semibold">
                Start
                <HighlightedText text={"coding in Seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctaBtn1={{
              text: "Continue Lesson",
              linkTo: "/signUp",
              active: true,
            }}
            ctaBtn2={{
              text: "Learn More",
              linkTo: "/login",
              active: false,
            }}
            CodeBlock={`<!DOCTYPE html>\n <html>\n head><title>Example</\n title><linkrel="stylesheet"href="styles.css">\n /head>\n <body>\n <h1><ahref="/">Header</a>\n </h1>\n nav><ahref="one/">One</a><ahref="two/">Two</\n a><ahref="three/">Three</a>\n </nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* explore Section */}
        <ExploreMore />
      </div>
      {/* section 2 */}
      <div className="bg-pure_greys-5 text-richblack-700">
        <div className="bgHome h-[20rem] ">
          <div className="w-11/12 max-w-maxContent flex flex-col  justify-between items-center gap-4 mx-auto ">
            <div className="h-[8rem]"></div>
            <div className="flex flex-row gap-8 text-white">
              <CTAButton active={true} linkTo={"/signUp"}>
                <div className="flex items-center justify-between gap-2">
                  Explore full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkTo={"/signUp"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-7 ">
          <div className="flex flex-row gap-5 justify-between mt-32 mb-10 ">
            <div className="text-4xl font-semibold w-[40%]">
              Get the Skills you need for a{" "}
              <HighlightedText text={"Job that is in Demand."} />
            </div>
            <div className="w-[40%] flex flex-col gap-y-12 items-start ">
              <p className="text-richblack-700 text-mlg font-semibold">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CTAButton active={true} linkTo={"/signUp"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimeLineSection />
          <LearnLanguageSection />
        </div>
      </div>
      {/* section 3 */}

      <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-8  text-white">
        <InstructorSection />
        <h2 className="text-4xl font-semibold text-center">
          Review From Other learners
        </h2>
        <ReviewSection />
      </div>
      {/* section 4-->footer */}
    </div>
  );
}

export default Home;
