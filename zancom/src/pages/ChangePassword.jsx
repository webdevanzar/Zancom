import { Eye, EyeOff } from "lucide-react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div>
        <section className="flex flex-col items-center pb-5">
          <img src={"/logo-txt.png"} alt="" className="w-[210px]" />
        </section>

        <form
          action=""
          className="w-[380px] md:w-[440px] h-[450px] m-auto mt-5 p-7 text-center border-2 border-[var(--background-color)]"
        >
          <h1 className="text-[24px] font-semibold py-7">Change Password</h1>
          <Input
            name="currentpassword"
            type="text"
            placeholder="Current Password"
          />
          <Input name="newpassword" type="text" placeholder="New password" />
          <div className="relative">
            <Input
              name="confirmpassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <button
              type="button"
              className="absolute right-3 top-5 text-[var(--secondary-color)] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <Button text="Submit" type="submit" className="mt-4" />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
