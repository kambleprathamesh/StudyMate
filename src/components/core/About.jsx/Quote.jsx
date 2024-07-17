import React from "react";
import HighlightedText from "../HomePage/HightlightedText";

const Quote = () => {
  return (
    <div>
      <p className="text-richblack-100 text-4xl font-inter font-semibold">
       " We are passionate about revolutionizing the way we learn. Our innovative
        platform <HighlightedText text={"combines technology"} />,{" "}
        <span
          className={`font-bold text-4xl bg-gradient-to-br from-[#FF512F] to-[#F09819] bg-clip-text text-transparent `}
        >
          expertise
        </span>
        , and community to create an{" "}
        <span
          className={`font-bold text-4xl bg-gradient-to-r from-[#E65C00] to-[#F9D423] bg-clip-text text-transparent `}
        >
          unparalleled educational experience
        </span>
        ".
      </p>
    </div>
  );
};

export default Quote;
