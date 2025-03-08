import axiosInstance from "../axios";
import { toast } from "react-toastify";

export const handleGuestUser = async () => {
  await axiosInstance
    .post(`api/auth/login`, {
      email: "user@guest.com",
      password: "guestuser",
    })
    .then((res) => {
      localStorage.clear();
      localStorage.setItem("access_token", res.data.token);
      localStorage.setItem("_id", res.data._id);
      axiosInstance.defaults.headers["Authorization"] = "Bearer " + localStorage.getItem("access_token");
      toast.success("Login Successful");
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
      toast.error("Server is yet to start");
    });
};
