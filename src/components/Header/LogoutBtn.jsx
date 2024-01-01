import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      navigate("/logout");
      await authService.logout();
      dispatch(logout());
      toast.success("Logout successful"); // Show success message
    } catch (error) {
      toast.error(`Error: ${error.message}`); // Show error message
    }
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-rose-500 rounded-full text-white font-bold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
