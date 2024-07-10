import React from "react";
import HighlightedText from "../components/core/HomePage/HightlightedText";
import about1 from "../assets/Images/aboutus1.webp";
import about2 from "../assets/Images/aboutus2.webp";
import about3 from "../assets/Images/aboutus3.webp";
// import about1 from "../assets/Images/aboutus1.webp"
import Quote from "../components/core/About.jsx/Quote";
const About = () => {
  return (
    <div>
      {/* section1 */}
      <section>
        <div>
          <header className="text-richblack-5">
            Driving Innovation in Online Education for a
            <HighlightedText text={"Brighter Future"} />
            <p>
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>

          <div className="flex justify-between">
            <img src={about1} alt="a" />
            <img src={about2} alt="b" />
            <img src={about3} alt="c" />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <div>
        <Quote/>
      </div>
    </div>
  );
};

export default About;
