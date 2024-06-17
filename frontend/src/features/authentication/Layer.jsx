import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "@/services/authService";
import toast from "react-hot-toast";

function Layer() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    isPending,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(`کد تایید شما : ${data.code}`, {
        duration: 90000,
        id: "toast_otp_id",
      });
      toast.success(data.message);
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
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            otp={otp}
            isSendOTP={isPending}
            onSendOtp={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={phoneNumber}
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

  return (
    <>
      <div className="w-full bg-white md:w-2/3 md:bg-primary-900 md:float-left px-5 md:py-10 min-h-screen relative md:rounded-r-xl flex items-start justify-around ">
        {renderStep()}
        <div>
          <div className="flex items-start  relative top-0 text-primary-900 md:text-white mx-auto ">
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
