import frame from "../../assets/Images/frame.png";
import SignUp from "../core/Auth/SignUp";
import Login from "../core/Auth/Login";

function Template({ heading, desc1, desc2, img, formType }) {
  return (
    <div>
      <div className="w-11/12 max-w-maxContent mx-auto my-20 flex flex-row justify-between  bg-richblack-900 text-richblack-25 ">
        {/* Left Box */}
        <div className="w-11/12 max-w-[550px]  flex flex-col justify-start items-start ">
          <div className="w-[88%] font-inter  flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-richblack-5">
              {heading}
            </h1>
            <p className="text-[18px]  leading-[26px] font-normal text-richblack-200">
              <span className="">{desc1}</span>
              <span className="font-edu-sa text-blue-100 text-[18px] leading-[24px] font-bold ">
                {desc2}
              </span>
            </p>
          </div>

          {formType === "signUp" ? <SignUp /> : <Login />}
        </div>
        {/* Right Box */}
        <div className="w-11/12 relative max-w-[450px] h-[450px]  flex flex-col items-center ">
          <img
            src={frame}
            alt="frame"
            // width={558}
            // height={304}
            className="absolute top-5 h-full"
            loading="lazy"
          />
          <img
            src={img}
            alt="formImg"
            // width={558}
            // height={804}
            loading="lazy"
            className="absolute top-0 right-4 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Template;
