import { setLoading, setUser } from "../../Slice/profileSlice";
import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { logout } from "./authAPI";
import { profileEndpoints } from "../api";
import { getEnrolledCourses } from "../../../server/controllers/profile";

const { GET_USER_DETAILS_API, GET_ENROLLED_COURSES_API } = profileEndpoints;

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loading..");
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer${token}`,
      });

      console.log("GET USER DETAILS API RESPONSE....", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      const userImg =
        response.data.data.image ??
        `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName}_${response.data.data.lastName}`;
      dispatch(setUser({ ...response.data.data, image: userImg }));
    } catch (error) {
      dispatch(logout(navigate));
      console.log("ERROR WHILE FETCHING USER ADDITIONAL DETAILS....", error);
      toast.error("Could Not Get User Details");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function getEnrolledCourses(token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    let result = [];
    try {
      console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
      const response = await apiConnector(
        "GET",
        GET_ENROLLED_COURSES_API,
        null,
        {
          Authorization: `bearer${token}`,
        }
      );
      console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
      if (!response.data.succes) {
        throw new Error(response.data.message);
      }
      result = response.data.data;
    } catch (error) {
      console.log("ERROR WHILE FETCHING USER ENROLLED COURSES....", error);
      toast.error("Could Not Get User Enrolled Courses");
    }
    toast.dismiss(toastId);
    return result;
  };
}
