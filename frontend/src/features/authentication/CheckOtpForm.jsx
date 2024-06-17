import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Button from "@/ui/button";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "@/services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import Loading from "@/ui/loading";

const RESEND_TIME = 90;

function CheckOtpForm({
  phoneNumber,
  otp,
  setOtp,
  setStep,
  onResendOtp,
  otpResponse,
}) {
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      toast.remove("toast_otp_id");
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "✅" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner-dashbord");
      if (user.role === "FREELANCER") return navigate("/freelancer-dashbord");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onBack = (e) => {
    e.preventDefault();
    toast.remove("toast_otp_id");
    setStep((s) => s - 1);
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <>
      <div className="otp_form">
        <button className="block mr-auto text-2xl" onClick={onBack}>
          <HiArrowLeft className="h- w-6 text-secondary-500" />
        </button>
        <h2 className="font-bold text-white text-center md:text-black">
          ورود | ثبتنام
        </h2>
        <p className="text-white md:text-black">سلام،خوش آمدید!</p>
        {otpResponse && (
          <div>
            <small className="my-2 inline-block">{`${otpResponse?.message}.`}</small>
            <button className="flex gap-x-2" onClick={onBack}>
              <span className="text-blue-500">ویرایش شماره تلفن</span>
              <FaEdit className="cursor-pointer text-xl text-blue-500" />
            </button>
          </div>
        )}
        <form onSubmit={checkOtpHandler}>
          <div className="w-full">
            <label htmlFor="" className="mb-5 block text-white md:text-black">
              لطفا کد تایید را وارد کنید
            </label>
            <OTPInput
              value={otp}
              onChange={setOtp}
              inputType="number"
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus="true"
              containerStyle="flex flex-row-reverse gap-x-2 justify-center"
              inputStyle={{
                width: "40px",
                padding: "10px",
                border: "1px solid rgb(var(--color-primary-600))",
                borderRadius: "8px",
              }}
            />
            {time > 0 ? (
              <p className="text-gray-600 text-sm mt-4 pr-5">
                {time} ثانیه تا ارسال مجدد کد تایید
              </p>
            ) : (
              <button
                className="text-gray-600 text-sm mt-4 pr-5"
                onClick={(e) => {
                  onResendOtp(e);
                  setTime(RESEND_TIME);
                }}
              >
                ارسال مجدد کد تایید
              </button>
            )}
            <Button type="submit"> {isPending ? <Loading /> : "تایید"}</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CheckOtpForm;
