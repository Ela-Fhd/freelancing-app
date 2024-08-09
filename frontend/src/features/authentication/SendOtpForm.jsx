import Input from "@/ui/input";
import Button from "@/ui/button";
import Loading from "@/ui/loading";

function SendOtpForm({ register, isSendOTP, onSendOtp }) {
  return (
    <>
      <form className="otp_form" onSubmit={onSendOtp}>
        <h2 className="font-bold text-white text-center md:text-black">
          ورود | ثبتنام
        </h2>
        <p className="text-white md:text-black">سلام،خوش آمدید!</p>
        <div className="w-full">
          <Input
            type="number"
            placeholder="09100000000"
            register={register}
            id="phone_number"
            label="لطفا شماره همراه خود را وارد کنید"
            name="phoneNumber"
          />
          <Button type="submit">
            {isSendOTP ? <Loading /> : "ارسال کد تایید"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default SendOtpForm;
