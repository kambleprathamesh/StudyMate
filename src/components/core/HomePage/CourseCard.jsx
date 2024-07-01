import { MdGroup } from "react-icons/md";
import { ImTree } from "react-icons/im";

const courseHeadings = [
  "Learn HTML",
  "Learn CSS",
  "Responsive Web design",
  "HTML",
  "CSS",
  "Responsive Design",
  "Java",
  "Python",
  "SCSS",
  "Flask",
  "Django",
  "FastAPI",
  "Next.js",
  "Nuxt.js",
  "Sanity",
];

function CourseCard({ heading, description, level, lessionNumber }) {
  return (
    // <div>
    <div
      className={`w-[24%]  p-4 flex flex-col gap-6  bg-richblack-800 text-richblack-300 cursor-pointer ${
        courseHeadings === heading
          ? "bg-white text-richblack-900"
          : "text-richblack-300"
      }`}
    >
      <h1 className="text-white text-xl font-semibold">{heading}</h1>
      <p className="w-full lg:h-36">{description}</p>
      {/* <div className="w-full border-[1px] border-dashed"></div> */}
      <div className="flex flex-row justify-between border-t border-dashed pt-2">
        <div className="flex flex-row gap-1 items-center">
          <MdGroup />
          <p>{level}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <ImTree />
          <p>{lessionNumber} Lesson</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CourseCard;
