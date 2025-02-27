import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowhowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-[380px] md:w-[440px] m-auto mt-4 p-7 text-center border-2 border-[var(--background-color)]">
        <section className="flex flex-col items-center">
          <img src={"/logo-txt.png"} alt="" className="w-[210px]" />
          <p className="text-[18px] px-10 mt-[30px] leading-5">
            Sign up to see photos and videos from your friends.
          </p>
          <Button
            text="Sign up with Google"
            type="button"
            className="mt-[35px]"
          />
        </section>

        {/* dividel Line */}
        <div className="flex items-center justify-center my-5">
          <div className="w-[40%] h-0.5 bg-[var(--background-color)]"></div>
          <div className="w-[20%] h-0.5 text-center bg-white"></div>
          <div className="w-[40%] h-0.5 bg-[var(--background-color)]"></div>
        </div>

        <form action="">
          <Input name="contact" type="text" placeholder="Email or Phone" />
          <Input name="fullname" type="text" placeholder="Full Name" />
          <Input name="username" type="text" placeholder="Username" />
          <div className="relative">
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-5 text-[var(--secondary-color)] cursor-pointer"
              onClick={() => setShowhowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <p className="text-[14px] mt-4 px-10">
            People who use our service may have uploaded your contact
            information to instagram.
            <a href="" className="text-blue-800">
              Learn More
            </a>
          </p>
          <p className="text-[14px] mt-4 px-10">
            By signing up, you agree to out
            <a href="" className="text-blue-800">
              Terms, Privacy Policy
            </a>
            and
            <a href="" className="text-blue-800">
              Cookies Policy
            </a>
          </p>

          <Button text="Sign up" type="submit" className="mt-4" />
        </form>
      </div>

      <section className="w-[380px] md:w-[440px] mt-3 m-auto p-7 text-center border-2 border-[var(--background-color)]">
        <div>
          <p>
            Have an account?
            <a href="" className="text-blue-800 font-semibold ml-1">
              Log in
            </a>
          </p>
        </div>
      </section>

      <section className="w-[380px] md:w-[440px] mt-4 m-auto p-7 text-center">
        <p className="text-[17px]">Get the app.</p>
        <div className="flex justify-center items-center py-4 gap-3">
          <img src={"/playstore.png"} alt="" className="w-[150px] " />
          <img src={"/microsoft.png"} alt="" className="w-[120px] " />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
