import Input from "@/ui/input";
import Button from "@/ui/button";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "@/services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "@/ui/loading";
import RadioInputGroup from "@/ui/radioInputGroup";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
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
      <form className="otp_form min-h-max" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-white text-center md:text-black">
          تکمیل اطلاعات فردی
        </h2>
        <Input
          name="name"
          type="text"
          id="name"
          label="نام و نام خانوادگی"
          placeholder="نام و نام خانوادگی"
          register={register}
          required
          validationSchema={{
            required: "نام و نام خانوادگی ضروری است",
            minLength: {
              value: "5",
              message: "طول نامعتبر است",
            },
          }}
          errors={errors}
        />
        <Input
          name="email"
          type="text"
          id="email"
          label="ایمیل"
          placeholder="ایمیل"
          register={register}
          required
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              message: "ایمیل نامعتبر است",
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          }}
          errors={errors}
        />
        <RadioInputGroup
          register={register}
          watch={watch}
          errors={errors}
          configs={{
            name: "role",
            validationSchema: {
              required: "انتخاب نقش ضروری است",
            },
            options: [
              { value: "FREELANVER", label: "فریلنسر" },
              { value: "OWNER", label: "کارفرما" },
            ],
          }}
        />

        {isPending ? <Loading /> : <Button type="submit">ثبت اطلاعات</Button>}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
