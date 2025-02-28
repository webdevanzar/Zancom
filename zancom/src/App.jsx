import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import ResetPassword from "./pages/ResetPassword";
import { OtpInput } from "./components/OtpInput";
import { SideBar } from "./components/SideBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <ChangePassword /> */}
      {/* <ResetPassword /> */}
      {/* <OtpInput /> */}
      <SideBar />
      <Routes>
        <Route path="/profile" element={<h1>profile page</h1>} />
      </Routes>
    </>
  );
}

export default App;
