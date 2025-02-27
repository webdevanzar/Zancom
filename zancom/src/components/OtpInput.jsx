import { useRef, useState } from "react";
import { Button } from "../components/Button";

export const OtpInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(""); // Clear error when user types

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const copiedText = event.clipboardData.getData("text");
    const otpData = copiedText.slice(0, length);

    if (!/^\d{1,6}$/.test(otpData)) return; //check it is digit and length
    const newOtpArray = otpData.split("");
    const updatedOtp = [
      ...newOtpArray,
      ...new Array(length - newOtpArray.length).fill(""),
    ];
    setOtp(updatedOtp);

    if (inputRefs.current[newOtpArray.length - 1]) {
      inputRefs.current[newOtpArray.length - 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < length) {
      setError("Please enter the complete otp");
      return;
    }
    setError("");
    console.log("successfully submitted");
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div>
        <section className="flex flex-col items-center pb-5">
          <img src={"/logo-txt.png"} alt="" className="w-[210px]" />
        </section>

        <form
          action=""
          className="w-[380px] md:w-[440px] h-[410px] m-auto mt-5 p-7 text-center border-2 border-[var(--background-color)]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[24px] font-semibold py-7">Enter OTP</h1>
          <p className="text-left leading-3.5">
            OTP has been sent to your registered email/phone
            debugmedia@gmail.com
          </p>

          <div className="h-30">
            <div className="flex justify-between pt-10">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => {
                    handleChange(index, e);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDown(index, e);
                  }}
                  onPaste={handlePaste}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-lg border-2 border-[var(--background-color)] rounded"
                />
              ))}
            </div>
            {error && (
              <p className={"text-red-500 text-[13px] text-left"}>{error}</p>
            )}
          </div>

          <div className="pt-10">
            <Button
              text=" Verify OTP"
              disabled={otp.join("").length < length}
            />
            <p className="text-[14px] mt-2 text-left ">
              <a href="">Resend OTP</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
