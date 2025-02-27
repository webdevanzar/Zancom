import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-[380px] md:w-[440px] m-auto mt-4 p-7 text-center border-2 border-[var(--background-color)]">
        <section className="flex flex-col items-center">
          <img src={"/logo-txt.png"} alt="" className="w-[210px]" />
        </section>

        <form action="" className="mt-10">
          <Input
            name="contact"
            type="text"
            placeholder="Phone number, Username, or Email"
          />
          <div className="relative">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-5 text-[var(--secondary-color)] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <Button text="Log in" type="submit" className="mt-4" />

          {/* dividel Line */}
          <div className="flex items-center justify-center my-5">
            <div className="w-[40%] h-0.5 bg-[var(--background-color)]"></div>
            <div className="w-[20%] text-center bg-white text-[20px]">OR</div>
            <div className="w-[40%] h-0.5 bg-[var(--background-color)]"></div>
          </div>

          <p className="text-[20px]">Log in with Google</p>
          <p className="text-[15px] mt-7">Forgot password ?</p>
        </form>
      </div>

      <section className="w-[380px] md:w-[440px] mt-3 m-auto p-7 text-center border-2 border-[var(--background-color)]">
        <div>
          <p>
            Don’t have an account ?
            <a href="" className="text-blue-800 font-semibold ml-1">
              Sign up
            </a>
          </p>
        </div>
      </section>

      <section className="w-[380px] md:w-[440px] mt-4 m-auto p-7 text-center">
        <p className="text-[17px]">Get the app.</p>
        <div className="flex justify-center items-center gap-3 py-4">
          <img src={"/playstore.png"} alt="" className="w-[150px] " />
          <img src={"/microsoft.png"} alt="" className="w-[120px] " />
        </div>
      </section>
    </div>
  );
};

export default Login;
