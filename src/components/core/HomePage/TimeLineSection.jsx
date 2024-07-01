import LOGO1 from "../../../assets/TimeLineLogo/Logo1.svg";
import LOGO2 from "../../../assets/TimeLineLogo/Logo2.svg";
import LOGO3 from "../../../assets/TimeLineLogo/Logo3.svg";
import LOGO4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineVideo from "../../../assets/Images/timelineVideo.mp4";
const timeline = [
  {
    logo: LOGO1,
    heading: "LeaderShip",
    desc: "Fully Commited to company Success",
  },
  {
    logo: LOGO2,
    heading: "Responsibility",
    desc: "Student will always be our Priority",
  },
  {
    logo: LOGO3,
    heading: "Flexibility",
    desc: "The ability to Switch is an important Skill",
  },
  {
    logo: LOGO4,
    heading: "Solve the Problem",
    desc: "Code your way to a Solution",
  },
];

function TimeLineSection() {
  return (
    <div>
      <div className="flex flex-row gap-14 items-center justify-between mb-10">
        {/* left section */}
        <div className="w-[30%] flex flex-col gap-8">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-row gap-3 " key={index}>
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-white">
                  <img src={element.logo} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-[18px] ">
                    {element.heading}
                  </p>
                  <p className="text-base">{element.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* right section */}
        <div className="w-[70%]  relative shadow-2xl shadow-blue-100  rounded-md">
          <video muted autoPlay loop className="rounded-md">
            <source src={timelineVideo} type="video/mp4" />
          </video>
          <div className="w-[50%] absolute translate-x-1/2 -translate-y-1/2 bg-caribbeangreen-700 flex flex-row  justify-center py-8 gap-6 text-white uppercase px-8 ">
            <div className="border-r border-caribbeangreen-200 flex flex-row  justify-center items-center gap-4  ">
              <h1 className="text-3xl font-bold ">10</h1>
              <p className="text-sm text-caribbeangreen-200">
                years of Experience
              </p>
            </div>
            {/* middle div */}
            {/* <div className="w-1 h-[70%] bg-caribbeangreen-200">dcc</div> */}
            <div className=" flex flex-row  justify-center items-center gap-4  ">
              <h1 className="text-3xl font-bold ">250</h1>
              <p className="text-sm text-caribbeangreen-200">
                Types of Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLineSection;
