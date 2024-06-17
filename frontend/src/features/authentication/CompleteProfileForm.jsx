import React, { useState } from "react";
import Input from "@/ui/input";
import Button from "@/ui/button";
import RadioInput from "@/ui/radio";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "@/services/authService";
import toast from "react-hot-toast";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);
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
            value="freelancer"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "freelancer"}
          />
          <RadioInput
            id="owner"
            label="کارفرما"
            name="role"
            value="owner"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "owner"}
          />
        </div>
        <Button>ثبت اطلاعات</Button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
