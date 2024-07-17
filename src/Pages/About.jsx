import React from "react";
import HighlightedText from "../components/core/HomePage/HightlightedText";
import about1 from "../assets/Images/aboutPage1.jpeg";
import about2 from "../assets/Images/aboutPage2.jpeg";
import about3 from "../assets/Images/aboutPage3.jpeg";
// import about1 from "../assets/Images/aboutus1.webp"
// import Quote from "../components/core/About.jsx/Quote"
import Quote from "../components/core/About.jsx/Quote";
import founding from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/About.jsx/StatsComponent";
import LearningGrid from "../components/core/About.jsx/LearningGrid";
import ContactForm from "../components/core/About.jsx/ContactForm";
import Footer from "../components/Common/Footer";
const About = () => {
  return (
    <div className="">
      {/* section1 */}
      <section className="bg-richblack-800">
        <div className="relative w-11/12 max-w-maxContent mx-auto  ">
          <header className=" w-[80%] mx-auto text-richblack-5 flex flex-col  justify-between items-center text-4xl font-inter text-center pb-36 pt-10 font-bold">
            Driving Innovation in Online Education for a
            <HighlightedText text={"Brighter Future"} />
            <p className="text-lg w-[83%] text-richblack-200 font-medium mt-5">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="w-full  flex flex-col lg:flex-row  absolute  top-[55%]  justify-evenly ">
            <img
              src={about1}
              alt="a"
              width={500}
              height={500}
              className="w-80 h-80 object-cover"
            />
            <img
              src={about2}
              alt="b"
              width={500}
              height={500}
              className="w-80 h-80 object-cover"
            />
            <img
              src={about3}
              alt="c"
              width={500}
              height={500}
              className="w-80 h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="bg-richblack-900">
        <div className="w-10/12 max-w-maxContent mx-auto pb-28 ">
          <div className="h-[25vh]"></div>
          <div>
            <Quote />
          </div>
        </div>
        <div className="w-full h-[1.5px] bg-richblack-700"></div>
      </section>

      {/* section-3 */}
      <section>
        <div className="w-10/12 max-w-maxContent mx-auto pb-24  mt-20">
          {/* 1st div */}
          <div className="flex flex-col-reverse gap-3 md:flex-row  md:justify-around md:items-start">
            {/* left box */}
            <div className="md:w-1/3  flex flex-col place-content-between place-items-stretch gap-3">
              <h1 className="text-4xl font-inter font-semibold bg-gradient-to-r from-[#833AB4] via-[#FD1D1D]  to-[#FCB045] bg-clip-text text-transparent">
                Our Founding Story
              </h1>
              <p className="text-base font-medium font-inter text-richblack-200">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium font-inter text-richblack-200">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* right box */}
            <div className="md:w-[400px] md:mt-16 object-contain">
              <img
                src={founding}
                alt="foundingImg"
                className="w-full h-full "
              />
            </div>
          </div>
          {/* 2nd div vision mission */}
          <div className="flex  mt-20">
            {/* left box */}
            <div className="flex flex-col-reverse gap-3 md:flex-row  md:justify-around md:items-start">
              <div className="w-1/3 space-y-6">
                <h1 className="text-4xl font-inter font-semibold bg-gradient-to-r from-[#E65C00]   to-[#F9D423] bg-clip-text text-transparent">
                  Our Vsion
                </h1>
                <p className="text-base font-medium font-inter text-richblack-200">
                  With this vision in mind, we set out on a journey to create an
                  e-learning platform that would revolutionize the way people
                  learn. Our team of dedicated experts worked tirelessly to
                  develop a robust and intuitive platform that combines
                  cutting-edge technology with engaging content, fostering a
                  dynamic and interactive learning experience.
                </p>
              </div>
              {/* right box */}
              <div className="w-1/3 space-y-6">
                <h1 className="text-4xl font-inter font-semibold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA]  to-[#A6FFCB] bg-clip-text text-transparent">
                  Our Mission
                </h1>
                <p className="text-base font-medium font-inter text-richblack-200">
                  our mission goes beyond just delivering courses online. We
                  wanted to create a vibrant community of learners, where
                  individuals can connect, collaborate, and learn from one
                  another. We believe that knowledge thrives in an environment
                  of sharing and dialogue, and we foster this spirit of
                  collaboration through forums, live sessions, and networking
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section>
        <StatsComponent />
      </section>

      {/* section 5 */}
      <section className="flex flex-col justify-between items-center gap-6">
        <LearningGrid />
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default About;
