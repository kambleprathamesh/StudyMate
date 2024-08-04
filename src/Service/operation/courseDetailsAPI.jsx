// import { CoursesEndpoint } from "../api";
// import { apiConnector } from "../apiConnector";
// import { toast } from "react-hot-toast";
// const {
//   COURSE_DETAILS_API,
//   COURSE_CATEGORIES_API,
//   GET_ALL_COURSE_API,

//   // course
//   CREATE_COURSE_API,
//   UPDATE_COURSE_API,
//   DELETE_COURSE_API,

//   // section
//   CREATE_SECTION_API,
//   UPDATE_SECTION_API,
//   DELETE_SECTION_API,

//   // SUBSECTION
//   CREATE_SUB_SECTION_API,
//   UPDATE_SUB_SECTION_API,
//   DELETE_SUB_SECTION_API,

//   // INTRUCTOR_COURSE
//   GET_ALL_INSTRUCTOR_COURSES_API,

//   //FULL COURSE DETAILS AUTHENTICATED
//   GET_FULL_COURSE_DETAILS_AUTHENTICATED,

//   //RATING
//   CREATE_RATING_API,

//   //LECTURE COMPLETION
//   LECTURE_COMPLETION_API,
// } = CoursesEndpoint;

// //  GET_ALL_COURSE_API
// export const getAllCourses = async () => {
//   const toastId = toast.loading("Loading...");
//   let result = [];
//   try {
//     const response = await apiConnector("GET", GET_ALL_COURSE_API);
//     if (!response.data.success) {
//       throw new Error(response.data.message);
//     }

//     result = response?.data?.data;
//   } catch (error) {
//     console.log(" GET_ALL_COURSE_API ERROR........", error);
//     toast.error("Error in Loading Courses");
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // GET COURSES DETAILS
// export const fetchCourseDetails = async (courseId) => {
//   const toastId = toast.loading("Loading...");
//   let result = null;
//   try {
//     const response = await apiConnector("POST", COURSE_DETAILS_API);
//     if (!response.data.success) {
//       throw new Error(response.data.message);
//     }

//     result = response.data;
//     toast.success("Found Details Succesfully");
//   } catch (error) {
//     console.log(" COURSE_DETAILS_API ERROR........", error);
//     result = error.response.data;
//     toast.error("Error in getting Course Details");
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // get course categories
// export const fetchCourseCategories = async () => {
//   const toastId = toast.loading("Loading...");
//   const result = [];
//   try {
//     const response = await apiConnector("GET", COURSE_CATEGORIES_API);
//     if (!response.data.success) {
//       throw new Error(response.data.message);
//     }
//     result = response?.data?.data;
//   } catch (error) {
//     console.log(" COURSE_CATEGORIES_API ERROR........", error);

//     toast.error("Error in getting Course Categories");
//   }
//   return result;
// };

// // create course
// export const createCourse = async (data, token) => {
//   let result = null;
//   const toastId = toast.loading("Loading...");
//   try {
//     const response = await apiConnector("POST", CREATE_COURSE_API, data, {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     });

//     console.log("CREATE_COURSE_API............", response);

//     if (!response.data.success) {
//       throw new Error(response.data.message);
//     }
//     result = response.data.data;
//     toast.success("Course Details Added Successfully");
//   } catch (error) {
//     console.log(" CREATE_COURSE_API ERROR........", error);

//     toast.error("Error in Adding Course Details");
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // update/edit course
// export const updateCourse = async (data, token) => {
//   const toastId = toast.loading("Updating Course..");
//   let result = null;
//   try {
//     const response = await apiConnector("PUT", UPDATE_COURSE_API, data, {
//       "content-Type": "multipart/form-data",
//       Authorization: `Bearer${token}`,
//     });
//     if (!response?.data?.success) {
//       throw new Error(response?.data?.message);
//     }

//     console.log("UPDATE_COURSE_API RESPONSE...", response);
//     result = response?.data?.data;
//     toast.success("Course Details Updated Successfully");
//   } catch (error) {
//     console.log("UPDATE_COURSE_API ERROR...", error);
//     toast.error("Course Details Not Updated ");
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // delete course
// export const deleteCourse = async (data, token) => {
//   const toastId = toast.loading("Deleting Course");
//   try {
//     const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
//       Authorization: `Bearer${token}`,
//     });
//     if (!response?.data?.success) {
//       throw new Error("Could Not Delete Course");
//     }
//     toast.success("Course Deleted");
//   } catch (error) {
//     console.log("DELETE_COURSE_API.....", error);
//     toast.success(error.message);
//   }
//   toast.dismiss(toastId);
// };

// // create section
// export const createSection = async (data, token) => {
//   const toastId = toast.loading("Adding Section...");
//   let result = null;
//   try {
//     const response = await apiConnector("POST", CREATE_SECTION_API, data, {
//       Authorization: `Bearer ${token}`,
//     });

//     console.log("CREATE_SECTION_API RESPONSE....", response);
//     if (!response?.data.success) {
//       throw new Error("Error while Creating Section");
//     }
//     result = response?.data?.updateCourse;
//     toast.success("Section Added");
//   } catch (error) {
//     console.log("CREATE_SECTION_API ERROR ...", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // update section
// export const updateSection = async (data, token) => {
//   let result = null;
//   const toastId = toast.loading("Updating Section");
//   try {
//     const response = await apiConnector("PUT", UPDATE_SECTION_API, data, {
//       Authorization: `Bearer${token}`,
//     });

//     console.log("UPDATE_SECTION_API RESPONSE...", response);
//     if (!response?.data.success) {
//       throw new Error("Could not Update Section");
//     }

//     result = response?.data?.updatedSection;
//     toast.success("Section Updated");
//   } catch (error) {
//     console.log("UPDATE_SECTION_API ERROR ....", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// //delet section
// export const deleteSection = async (data, token) => {
//   let result = null;
//   const toastId = toast.loading("Deleting Section");
//   try {
//     const response = await apiConnector("DELETE", DELETE_SECTION_API, data, {
//       Authorization: `Bearer${token}`,
//     });

//     console.log("DELETE_SECTION_API RESPONSE...", response);
//     if (!response?.data.success) {
//       throw new Error("Could not Delete Section");
//     }

//     result = response?.data?.data;
//     toast.success("Section deleted");
//   } catch (error) {
//     console.log("DELETE_SECTION_API ERROR ....", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // create sub section
// export const createSubSection = async (data, token) => {
//   const toastID = toast.loading("Adding sub Section");
//   let result = null;
//   try {
//     const response = await apiConnector("POST", CREATE_SUB_SECTION_API, data, {
//       Authorization: `Bearer${token}`,
//     });
//     console.log("CREATE_SUB_SECTION_API RESPONSE...", response);
//     if (!response?.data?.success) {
//       throw new Error("Error while Createing Sub Section");
//     }
//     result = response?.data?.newSubSection;
//     toast.success("Created Ssub Section");
//   } catch (error) {
//     console.log("CREATE_SUB_SECTION_API ERROR....", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastID);
//   return result;
// };

// // update sub section
// export const updateSubSection = async (data, token) => {
//   const toastId = toast.loading("updating Sub Section..");
//   let result = null;
//   try {
//     const response = await apiConnector("POST", UPDATE_SUB_SECTION_API, data, {
//       Auuthorization: `Bearer${token}`,
//     });

//     console.log("UPDATE_SUB_SECTION_API  RESPONSE....", response);
//     if (!response?.data?.success) {
//       throw new Error("Error while updating Sub Section");
//     }
//     result = response?.data?.updatedSubsectionDetails;
//     toast.success("Sub Section updated");
//   } catch (error) {
//     console.log("UPDATE_SUB_SECTION_API ERROR...", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastId);
//   return result;
// };

// // delete section
// export const deleteSubSection = async (data, token) => {
//   const toastId = toast.loading("Deleting Sub Section..");
//   let result = null;
//   try {
//     const response = await apiConnector(
//       "DELETE",
//       DELETE_SUB_SECTION_API,
//       data,
//       {
//         Auuthorization: `Bearer${token}`,
//       }
//     );

//     console.log("DELETE_SUB_SECTION_API  RESPONSE....", response);
//     if (!response?.data?.success) {
//       throw new Error("Error while Deleting Sub Section");
//     }
//     result = response?.data?.updatedSubsectionDetails;
//     toast.success("Sub Section Deleted");
//   } catch (error) {
//     console.log("DELETE_SUB_SECTION_API ERROR...", error);
//     toast.error(error.message);
//   }
//   toast.dismiss(toastId);
//   return result;
// };

import { CoursesEndpoint } from "../api";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,

  // course
  CREATE_COURSE_API,
  UPDATE_COURSE_API,
  DELETE_COURSE_API,

  // section
  CREATE_SECTION_API,
  UPDATE_SECTION_API,
  DELETE_SECTION_API,

  // SUBSECTION
  CREATE_SUB_SECTION_API,
  UPDATE_SUB_SECTION_API,
  DELETE_SUB_SECTION_API,

  // INSTRUCTOR_COURSE
  GET_ALL_INSTRUCTOR_COURSES_API,

  // FULL COURSE DETAILS AUTHENTICATED
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,

  // RATING
  CREATE_RATING_API,

  // LECTURE COMPLETION
  LECTURE_COMPLETION_API,
} = CoursesEndpoint;

// GET_ALL_COURSE_API
export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_COURSE_API ERROR........", error);
    toast.error("Error in Loading Courses");
  }
  toast.dismiss(toastId);
  return result;
};

// GET COURSE DETAILS
export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
    toast.success("Found Details Successfully");
  } catch (error) {
    console.log("COURSE_DETAILS_API ERROR........", error);
    result = error.response.data;
    toast.error("Error in getting Course Details");
  }
  toast.dismiss(toastId);
  return result;
};

// GET COURSE CATEGORIES
export const fetchCourseCategories = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log("Course Categories response", response);

    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_CATEGORIES_API ERROR........", error);
    toast.error("Error in getting Course Categories");
  }
  toast.dismiss(toastId);
  return result;
};

// CREATE COURSE
export const createCourse = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  console.log(token);
  console.log("Create api reaching here");
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorisation: `Bearer ${token}`,
      //   Authorisation
    });

    console.log("CREATE_COURSE_API............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.data;
    toast.success("Course Details Added Successfully");
  } catch (error) {
    console.log("CREATE_COURSE_API ERROR........", error);
    toast.error("Error in Adding Course Details");
  }
  toast.dismiss(toastId);
  return result;
};

// UPDATE/EDIT COURSE
export const updateCourseDetails = async (data, token) => {
  const toastId = toast.loading("Updating Course...");
  let result = null;
  try {
    const response = await apiConnector("PUT", UPDATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorisation: `Bearer ${token}`,
    });
    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    console.log("UPDATE_COURSE_API RESPONSE...", response);
    result = response?.data?.data;
    toast.success("Course Details Updated Successfully");
  } catch (error) {
    console.log("UPDATE_COURSE_API ERROR...", error);
    toast.error("Course Details Not Updated");
  }
  toast.dismiss(toastId);
  return result;
};

// DELETE COURSE
export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Deleting Course...");
  try {
    const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
      Authorisation: `Bearer ${token}`,
    });
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course");
    }
    toast.success("Course Deleted");
  } catch (error) {
    console.log("DELETE_COURSE_API ERROR.....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
};

// CREATE SECTION
export const createSection = async (data, token) => {
  const toastId = toast.loading("Adding Section...");
  let result = null;
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });

    console.log("CREATE_SECTION_API RESPONSE....", response);
    if (!response?.data.success) {
      throw new Error("Error while Creating Section");
    }
    result = response?.data?.updateCourse;
    toast.success("Section Added");
  } catch (error) {
    console.log("CREATE_SECTION_API ERROR ...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// UPDATE SECTION
export const updateSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Updating Section...");
  try {
    const response = await apiConnector("PUT", UPDATE_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });

    console.log("UPDATE_SECTION_API RESPONSE...", response);
    if (!response?.data.success) {
      throw new Error("Could not Update Section");
    }

    result = response?.data?.updatedSection;
    toast.success("Section Updated");
  } catch (error) {
    console.log("UPDATE_SECTION_API ERROR ....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// DELETE SECTION
export const deleteSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Deleting Section...");
  try {
    const response = await apiConnector("DELETE", DELETE_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });

    console.log("DELETE_SECTION_API RESPONSE...", response);
    if (!response?.data.success) {
      throw new Error("Could not Delete Section");
    }

    result = response?.data?.data;
    toast.success("Section deleted");
  } catch (error) {
    console.log("DELETE_SECTION_API ERROR ....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// CREATE SUB SECTION
export const createSubSection = async (data, token) => {
  const toastId = toast.loading("Adding Sub Section...");
  let result = null;
  try {
    const response = await apiConnector("POST", CREATE_SUB_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });
    console.log("CREATE_SUB_SECTION_API RESPONSE...", response);
    if (!response?.data?.success) {
      throw new Error("Error while Creating Sub Section");
    }
    result = response?.data?.newSubSection;
    toast.success("Created Sub Section");
  } catch (error) {
    console.log("CREATE_SUB_SECTION_API ERROR....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// UPDATE SUB SECTION
export const updateSubSection = async (data, token) => {
  const toastId = toast.loading("Updating Sub Section...");
  let result = null;
  try {
    const response = await apiConnector("POST", UPDATE_SUB_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });

    console.log("UPDATE_SUB_SECTION_API RESPONSE...", response);
    if (!response?.data?.success) {
      throw new Error("Error while updating Sub Section");
    }
    result = response?.data?.updatedSubsectionDetails;
    toast.success("Sub Section updated");
  } catch (error) {
    console.log("UPDATE_SUB_SECTION_API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// DELETE SUB SECTION
export const deleteSubSection = async (data, token) => {
  const toastId = toast.loading("Deleting Sub Section...");
  let result = null;
  try {
    const response = await apiConnector(
      "DELETE",
      DELETE_SUB_SECTION_API,
      data,
      {
        Authorisation: `Bearer ${token}`,
      }
    );

    console.log("DELETE_SUB_SECTION_API RESPONSE...", response);
    if (!response?.data?.success) {
      throw new Error("Error while Deleting Sub Section");
    }
    result = response?.data?.updatedSubsectionDetails;
    toast.success("Sub Section Deleted");
  } catch (error) {
    console.log("DELETE_SUB_SECTION_API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
