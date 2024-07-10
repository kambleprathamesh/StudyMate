import { Link } from "react-router-dom";

function Button({ children, linkTo, active }) {
  return (
    <Link to={linkTo}>
      <div
        className={`text-center text-[13px] px-6 py-3 rounded-md  font-bold
   ${
     active
       ? "text-black bg-[#FFD60A] border-b-[2px] border-r-[2px] border-[#FFD60A]"
       : "bg-richblack-800 border-b-[1.5px] border-r-[1.5px] border-pure_greys-300"
   } hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </Link>
  );
}

export default Button;
