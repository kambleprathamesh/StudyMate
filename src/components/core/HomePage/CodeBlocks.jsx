// import HighlightedText from "./HightlightedText";
import CTAbutton from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
function CodeBlocks({
  position,
  heading,
  subHeading,
  ctaBtn1,
  ctaBtn2,
  CodeBlock,
  backGroundcolor,
  codeColor,
}) {
  return (
    <div
      className={`flex ${position} my-16 justify-between items-start gap-10  bg-transparent  `}
    >
      {/* section 1 */}
      <div className="w-[50%] flex flex-col gap-4 ">
        {heading}
        <div className="text-richblack-300 font-bold">{subHeading}</div>
        <div className="flex gap-7 mt-7">
          <CTAbutton active={ctaBtn1.active} linkTo={ctaBtn1.linkTo}>
            <div className="flex gap-2 items-center">
              {ctaBtn1.text} <FaArrowRight />
            </div>
          </CTAbutton>
          <CTAbutton active={ctaBtn2.active} linkTo={ctaBtn2.linkTo}>
            {ctaBtn2.text}
          </CTAbutton>
        </div>
      </div>

      {/* section2 */}
      <div className=" w-[100%] lg:w-[500px] h-fit flex text-10  border-[1px] border-richblack-700 p-2 ">
        {/* bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF] */}
        {/* bg-gradient */}
        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-semibold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 `}
        >
          <TypeAnimation
            sequence={[CodeBlock, 2000, ""]}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              direction: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CodeBlocks;
