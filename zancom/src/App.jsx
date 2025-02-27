import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import ResetPassword from "./pages/ResetPassword";
import { OtpInput } from "./components/OtpInput";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <ChangePassword /> */}
      {/* <ResetPassword /> */}
      <OtpInput />
    </>
  );
}

export default App;
