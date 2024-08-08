import React from "react";
import { useForm } from "react-hook-form";

export const CourseBuilder = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <div className="text-white">
      <h1>Course Builder</h1>
      <div>
        <label htmlFor="">
          Section Name<sup className="text-pink-300">*</sup>
        </label>
        <input
          type="text"
          id="sectionName"
          placeholder="Add a Section Name"
          {...register("sectionName", { required: true })}
        />
        {errors.sectionName && (
          <span className="text-pink-300">Section Name Is Required</span>
        )}
      </div>
    </div>
  );
};
