import { useForm } from "react-hook-form";
import Input from "@/ui/input";
import Button from "@/ui/Button";
import useCreateProposal from "./useCreateProposal";

export default function CreateProposal({ onClose, projectUuid }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      projectId: projectUuid,
    };

    createProposal(payload, {
      onSuccess: onClose(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-right">
      <Input
        name="description"
        type="text"
        label="توضیحات"
        id="description"
        placeholder="توضیحات درخواست"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: "5",
            message: "طول عنوان نمی تواند کمتر از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />

      <Input
        name="price"
        type="number"
        label="قیمت"
        id="price"
        placeholder="قیمت"
        register={register}
        required
        validationSchema={{
          required: "قیمت ضروری است",
        }}
        errors={errors}
        filterPrice
      />

      <Input
        name="duration"
        type="number"
        label="زمان انجام"
        id="duration"
        placeholder="زمان انجام (روز)"
        register={register}
        required
        validationSchema={{
          required: "زمان انجام ضروری است",
        }}
        errors={errors}
      />

      {!isCreating && (
        <Button type="submit" className="my-8">
          ثبت
        </Button>
      )}
    </form>
  );
}
