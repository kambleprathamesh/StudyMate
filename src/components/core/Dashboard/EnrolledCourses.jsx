import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEnrolledCourses } from "../../../Service/operation/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";
export const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const getUserEnrolledCourses = async () => {
    try {
      const response = getEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to fetch enroled Courses", error);
    }
  };
  useEffect(() => {
    getUserEnrolledCourses();
  }, []);
  return (
    <div className="text-white">
      <div>EnrolledCourses</div>
      <div>
        {!enrolledCourses ? (
          <div>Loading...</div>
        ) : !enrolledCourses.length ? (
          <div>No Courses Enrolled</div>
        ) : (
          <div>
            <div>
              <p>Course Name</p>
              <p>Durations</p>
              <p>Progress</p>
            </div>
            <div>
              {enrolledCourses.map((course, index) => (
                <div>
                  <div>
                    <img src={course.thumbNail} alt="courseThumbnail" />
                    <div>
                      <p>{course.courseName}</p>
                      <p>{course.courseDesc}</p>
                    </div>
                  </div>
                  <div>{course?.totalDuration}</div>
                  <div>
                    <p>Progress:{course?.progressPercentage || 0}%</p>
                    <ProgressBar
                      completed={`${course?.progressPercentage}% || 0%`}
                      height="8px"
                      isLabelVisible={false}
                    />
                    ;
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
