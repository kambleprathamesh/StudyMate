// require("dotenv").config()
import { setLoading, setToken } from "../../Slice/authSlice";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
import { AuthEndpoints } from "../api";
import { setUser } from "../../Slice/profileSlice";
const {
  SENDOTP_API,
  LOGIN_API,
  SIGNUP_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = AuthEndpoints;

// sendotp
export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);
      console.log("SUcces response:", response.data.success);
      if (!response.data.success) {
        throw new Error("DATA RESPONSE: ", response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("OTP Not Sent");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// signup
export function signUp(signupData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log("Code yaha tak aaraha hain Signupp");
      const response = await apiConnector("POST", SIGNUP_API, signupData);

      console.log("Sign Up response.......", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signUp");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
// login
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API RESPONSE............", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log("response.data.success ", response.data.success);
      console.log(
        "response.data.user.firstname ",
        response.data.checkUser.firstName
      );
      console.log("response.data.token ", response.data.token);
      toast.success("Login Successful");
      dispatch(setToken(response.data.token));

      const userimg = response.data?.checkUser?.image
        ? response.data.checkUser.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.checkUser.firstName}_${response.data.checkUser.lastName}`;
      dispatch(setUser({ ...response.data.checkUser, image: userimg }));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.checkUser));
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  console.log("Function is reaching heree");
  return async (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    // dispatch(resetCart(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Succesfully");
    navigate("/");
  };
}
// reset password token
export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });

      console.log("RESET PASSWORD TOKEN RESPONSE....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  };
}
// reset password
export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("Code is reaching till here??");
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      console.log("Reset PAssword rsponse: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password reset Succesfully");
    } catch (error) {
      console.log(
        "Error while reseting passowrd FE request hitting problem ",
        error
      );
      toast.error("unable to reset Password");
    }
    dispatch(setLoading(false));
  };
}
