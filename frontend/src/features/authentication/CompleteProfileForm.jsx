import React, { useState } from "react";
import Input from "@/ui/input";
import Button from "@/ui/button";
import RadioInput from "@/ui/radio";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "@/services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "✅" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner/dashboard");
      if (user.role === "FREELANCER") return navigate("/freelancer/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full bg-white md:w-2/3 md:bg-primary-900 md:float-left px-5 md:py-10 min-h-screen relative md:rounded-r-xl flex items-start justify-around ">
      <form className="otp_form min-h-max" onSubmit={handleSubmit}>
        <h2 className="font-bold text-white text-center md:text-black">
          تکمیل اطلاعات فردی
        </h2>
        <Input
          name="name"
          type="text"
          id="name"
          placeholder="نام و نام خانوادگی"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          name="email"
          type="text"
          id="email"
          placeholder="ایمیل"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="flex items-center justify-center gap-x-8">
          <RadioInput
            id="freelancer"
            label="فریلنسر"
            name="role"
            value="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "FREELANCER"}
          />
          <RadioInput
            id="owner"
            label="کارفرما"
            name="role"
            value="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
          />
        </div>
        <Button>ثبت اطلاعات</Button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
