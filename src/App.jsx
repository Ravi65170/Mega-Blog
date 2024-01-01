import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-slate-900">
      <div className="w-full block">
        <Header />
        <main>
          <ToastContainer />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
