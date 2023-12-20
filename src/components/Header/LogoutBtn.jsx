import React, { Children } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const logoutHandler = () => {
    navigate("/logout");
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-rose-500  rounded-full text-white font-bold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
