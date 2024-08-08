import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseCategories,
  createCourse,
  updateCourseDetails,
} from "../../../../../Service/operation/courseDetailsAPI";
import RequirementFields from "./RequirementFields";
import IconBtn from "../../../../Common/IconBtn";
import { toast } from "react-hot-toast";
import { COURSE_STATUS } from "../../../../../Utils/constants";
export const CourseInformation = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { course, editCourse, setStep, setCourse } = useSelector(
    (state) => state.course
  );
  const { token } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [courseCategory, setCourseCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      setCourseCategory(categories);
      setLoading(false);
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDesc);
      setValue("coursePrice", course.price);
      // setValue("courseTags", course.tag);
      setValue("courseBenifits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbNail);
    }
    getCategories();
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDesc ||
      currentValues.coursePrice !== course.price ||
      //   currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenifits !== course.whatYouWillLearn ||
      currentValues.courseCategory !== course.category ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValues.courseImage !== course.thumbNail
    )
      return true;
    else return false;
  };

  //   handle next button
  const onSubmit = async (data) => {
    // course edit
    if (editCourse) {
      if (isFormUpdated) {
        const currentValues = getValues;
        const formData = new FormData();
        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }
        if (currentValues.courseShortDesc !== course.courseDesc) {
          formData.append("courseDesc", data.courseShortDesc);
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }
        // if (currentValues.courseTags.toString() !== course.tag.toString()) {
        //   formData.append("tag", JSON.stringify(data.courseTitle));
        // }
        if (currentValues.courseBenifits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenifits);
        }
        if (currentValues.courseCategory !== course.category) {
          formData.append("category", data.courseCategory);
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }
        if (currentValues.courseImage !== course.thumbNail) {
          formData.append("thumbNail", data.courseImage);
        }
        setLoading(true);
        const response = await updateCourseDetails(formData, token);
        setLoading(false);
        if (response) {
          dispatch(setStep(2));
          dispatch(setCourse(response));
        }
      } else {
        toast.error("No changes made to the form");
      }
      return;
    }

    // create new course
    const formData = new FormData();
    formData.append("courseName", data.courseTitle);
    formData.append("courseDesc", data.courseShortDesc);
    formData.append("price", data.coursePrice);
    // formData.append("tag", JSON.stringify(data.courseTitle));
    formData.append("whatYouWillLearn", data.courseBenifits);
    formData.append("category", data.courseCategory);
    formData.append("instructions", JSON.stringify(data.courseRequirements));
    // formData.append("thumbNail", data.courseImage);
    formData.append("thumbNail", data.courseImage[0]);
    formData.append("status", COURSE_STATUS.DRAFT);

    setLoading(true);
    const result = await createCourse(formData, token);

    if (result) {
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }
    setLoading(false);
  };
  return (
    <div className="w-full text-black ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md border-[1px] border-richblack-700
      bg-richblack-800 p-6 space-y-8"
      >
        <div>
          <label htmlFor="courseTitle" className="text-richblack-5 ">
            Course Title <sup className="text-pink-300">*</sup>
          </label>
          <input
            type="text"
            id="courseTitle"
            placeholder="Enter Course Title"
            className="w-full p-2 bg-richblack-700 text-richblack-50  rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
            {...register("courseTitle", { required: true })}
          />
          {errors.courseTitle && (
            <span className="text-pink-300">Course Title is required</span>
          )}
        </div>
        <div>
          <label htmlFor="courseShortDesc" className="text-richblack-5">
            Course Short Desc <sup className="text-pink-300">*</sup>
          </label>
          <input
            type="text"
            id="courseShortDesc"
            placeholder="Short Course Decs"
            {...register("courseShortDesc", { required: true })}
            className="w-full min-h-24 p-2  bg-richblack-700 text-richblack-50  rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
          />
          {errors.courseShortDes && (
            <span className="text-pink-300">
              Course Short Description is Required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="coursePrice" className="text-richblack-5">
            Price <sup className="text-pink-300">*</sup>
          </label>
          <input
            type="text"
            id="coursePrice"
            placeholder="Enter Price"
            className="w-full  p-2  bg-richblack-700 text-richblack-50  rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.coursePrice && (
            <span className="text-pink-300">Enter the Price</span>
          )}
        </div>

        {/* to handlee aftwrwards */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="courseCategory" className="text-richblack-5">
            Choose Course Category <sup className="text-pink-300">*</sup>
          </label>
          <select
            id="courseCategory"
            defaultValue=""
            className="w-auto  p-2  bg-richblack-700 text-richblack-50 rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
            {...register("courseCategory", { required: true })}
          >
            <option value="" disabled>
              Choose a Category
            </option>
            {!loading &&
              courseCategory.map((category, index) => (
                <option
                  key={category?.id}
                  value={category?._id}
                  className="text-richblack-5"
                >
                  {category?.name}
                </option>
              ))}
          </select>
          {/* <select
            id="courseCategory"
            defaultValue=""
            className="w-auto p-2 bg-richblack-700 text-richblack-5 rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
            {...register("courseCategory", { required: true })}
          >
            <option value="" disabled className="text-richblack-5">
              Choose a Category
            </option>
            {!loading &&
              courseCategory.map((category) => (
                <option
                  key={category?.id}
                  value={category?._id}
                  className="text-richblack-5"
                >
                  {category?.name}
                </option>
              ))}
          </select> */}
        </div>
        {/* create component to upload thumbnail */}

        <div>
          <label htmlFor="courseImage" className="text-richblack-5">
            Thumb Nail <sup className="text-pink-300">*</sup>
          </label>
          <input
            type="file"
            id="courseImage"
            className="w-full h-[200px] bg-richblack-700 rounded-md border-[1px] border-dashed border-richblack-400 "
            {...register("courseImage", { required: true })}
          />
        </div>

        {/* benifits of the course */}
        <div>
          <label htmlFor="courseBenifits" className="text-richblack-5">
            Benifits <sup className="text-pink-300">*</sup>
          </label>
          <input
            type="text"
            id="courseBenifits"
            placeholder="Enter Benefits of the course"
            className="w-full m-h-[120px] p-2  bg-richblack-700 text-richblack-50  rounded-md placeholder:text-richblack-200 border-b-[1px] border-richblack-400 mt-2"
            {...register("courseBenifits", {
              required: true,
            })}
          />
          {errors.coursePrice && (
            <span className="text-pink-300">Enter the Benifits</span>
          )}
        </div>
        <RequirementFields
          name="courseRequirements"
          label="Requirements/Instructions"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            className="bg-richblack-600 flex items-center"
          >
            Continue Without Saving
          </button>
        )}
        <IconBtn text={!editCourse ? "Next" : "Save Changes"} />
      </form>
    </div>
  );
};
