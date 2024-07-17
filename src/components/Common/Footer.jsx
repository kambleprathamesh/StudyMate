import React from "react";
import { FooterLink1, FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo.svg";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import tw from "../../assets/Logo/tw.png";
import gg from "../../assets/Logo/gg.png";

const Footer = () => {
  return (
    <div className="w-screen bg-richblack-800 ">
      <div className="w-11/12 max-w-maxContent mx-auto ">
        <div className="flex flex-col items-center  md:flex-row md:justify-between md:items-start gap-x-16 p-10">
          {/* footer1 links */}
          <div className="md:w-[45%] flex md:flex-row justify-between gap-8 ">
            {/* companys */}
            <div className="flex flex-col gap-3">
              <div>
                {/* logo */}
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div>
                <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                  {FooterLink1[0].title}
                </h1>
                <div className="flex flex-col gap-3">
                  {FooterLink1[0].links.map((ele, index) => {
                    return (
                      <Link
                        to={ele.title.toLowerCase()}
                        key={index}
                        className="hover:text-richblack-50"
                      >
                        <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                          {ele.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <FaFacebook className="w-6 h-6 text-richblack-300" />
                <AiFillGoogleCircle className="w-6 h-6 text-richblack-300" />
                <FaTwitter className="w-6 h-6 text-richblack-300" />
                <FaYoutube className="w-6 h-6 text-richblack-300" />
              </div>
            </div>
            {/* Resources &plans */}
            <div className="flex flex-col gap-2">
              {/* resources */}
              <div>
                <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                  {FooterLink1[1].title}
                </h1>
                <div className="flex flex-col gap-3">
                  {FooterLink1[1].links.map((ele, index) => {
                    return (
                      <Link
                        to={ele.title.toLowerCase()}
                        key={index}
                        className="hover:text-richblack-50"
                      >
                        <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                          {ele.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* plans */}
              <div>
                <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                  {FooterLink1[2].title}
                </h1>
                <div className="flex flex-col gap-3">
                  {FooterLink1[2].links.map((ele, index) => {
                    return (
                      <Link
                        to={ele.title.toLowerCase()}
                        key={index}
                        className="hover:text-richblack-50"
                      >
                        <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                          {ele.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* plans &community */}
            <div className=" flex flex-col gap-2">
              {/* resources */}
              <div>
                <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                  {FooterLink1[3].title}
                </h1>
                <div className="flex flex-col gap-3">
                  {FooterLink1[3].links.map((ele, index) => {
                    return (
                      <Link
                        to={ele.title.toLowerCase()}
                        key={index}
                        className="hover:text-richblack-50"
                      >
                        <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                          {ele.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* plans */}
              <div>
                <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                  {FooterLink1[4].title}
                </h1>
                <div className="flex flex-col gap-3">
                  {FooterLink1[4].links.map((ele, index) => {
                    return (
                      <Link
                        to={ele.title.toLowerCase()}
                        key={index}
                        className="hover:text-richblack-50"
                      >
                        <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                          {ele.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[0.5px] h-[80vh]  my-auto bg-richblack-400 ">
            {" "}
          </div>
          {/* footer2 Links */}
          <div className="md:w-[45%]  flex md:flex-row justify-between space-x-10">
            {/* subjects */}
            <div className="">
              <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                {FooterLink2[0].title}
              </h1>
              <div className="flex flex-col gap-2">
                {FooterLink2[0].links.map((ele, index) => {
                  return (
                    <Link
                      to={ele.link}
                      key={index}
                      className="hover:text-richblack-50"
                    >
                      <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                        {ele.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* languages */}
            <div>
              <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                {FooterLink2[1].title}
              </h1>
              <div className="flex flex-col gap-2">
                {FooterLink2[1].links.map((ele, index) => {
                  return (
                    <Link
                      to={ele.link}
                      key={index}
                      className="hover:text-richblack-50"
                    >
                      <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                        {ele.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* career paths */}
            <div>
              <h1 className="text-lg font-semibold font-inter text-richblack-50 mb-2">
                {FooterLink2[2].title}
              </h1>
              <div className="flex flex-col gap-2">
                {FooterLink2[2].links.map((ele, index) => {
                  return (
                    <Link to={ele.link} key={index} className="">
                      <p className="text-base font-inter font-normal text-richblack-400 hover:text-richblack-50 transition-all duration-200">
                        {ele.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80vw] h-[0.5px] bg-richblack-400"></div>
        <div className="w-[80vw] flex flex-col items-center md:flex-row md:justify-between md:items-center pt-7 pb-20">
          <div className="flex   flex-row justify-evenly items-center gap-2">
            <p className="text-base text-richblack-300 font-inter font-medium">
              Privacy Policy
            </p>
            <div className=" w-[1px] h-3 bg-richblack-300"></div>
            <p className="text-base text-richblack-300 font-inter font-medium ">
              Cookie Policy
            </p>
            <div className=" w-[1px] h-3 bg-richblack-300"></div>

            <p className="text-base text-richblack-300 font-inter font-medium">
              Terms
            </p>
          </div>
          <div>
            <p className="text-base text-richblack-300 font-inter font-mediun">
              Made by ❤️ © 2024 StudyNotion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
