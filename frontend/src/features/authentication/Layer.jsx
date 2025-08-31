import { useEffect, useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "@/services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import DarkModeToggle from "@/ui/darkModeToggle";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function Layer() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const { register, handleSubmit, getValues } = useForm();
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    isPending,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message, code } = await mutateAsync(data);
      toast.success(`کد تایید شما : ${code}`, {
        duration: 90000,
        id: "toast_otp_id",
      });
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            register={register}
            otp={otp}
            isSendOTP={isPending}
            onSendOtp={handleSubmit(sendOtpHandler)}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={getValues("phoneNumber")}
            otp={otp}
            setOtp={setOtp}
            setStep={setStep}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (user) navigate(-1);
  }, [user, navigate]);

  return (
    <>
      <div className="fixed mt-2 mr-[100%] z-10 translate-x-[100%]">
        <DarkModeToggle />
      </div>
      <div className="w-full bg-secondary-0 md:w-2/3 md:bg-primary-900 md:float-left px-5 md:py-10 min-h-screen relative md:rounded-r-xl flex items-start justify-around ">
        {renderStep()}
        <div>
          <div className="flex items-start relative top-0 text-primary-900 md:text-white mx-auto gap-x-12 mt-2 md:mt-0">
            <div>
              <div className="badge">
                <span className="badge--text">1</span>
              </div>
              <p className="-mr-3 text-xs mt-2 md:text-base text-right">
                احراز هویت
              </p>
            </div>
            <div>
              <div className="badge">
                <span className="badge--text">2</span>
              </div>
              <p className="-mr-3 text-xs mt-2 md:text-base">تکمیل اطلاعات</p>
            </div>
            <div>
              <div className="badge after:hidden">
                <span className="badge--text">3</span>
              </div>
              <p className="-mr-3 text-xs mt-2 md:text-base">ثبت آگهی</p>
            </div>
          </div>
          <div className="mt-12 md:text-white hidden md:block text-center">
            <h3 className="font-bold text-2xl my-2">خوش آمدید</h3>
            <small>برای ثبت آگهی خود ابتدا ثبتنام کنید</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layer;
