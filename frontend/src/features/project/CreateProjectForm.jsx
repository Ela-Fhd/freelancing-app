import { useForm } from "react-hook-form";
import Input from "@/ui/input";
import Button from "@/ui/button";

function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        name="title"
        type="text"
        label="عنوان"
        placeholder="عنوان پروژه"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: "10",
            message: "طول عنوان نمی تواند کمتر از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />

      <Input
        name="description"
        type="text"
        label="توضیحات"
        placeholder="توضیحات پروژه"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: "20",
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />

      <Button type="submit">ایجاد پروژه</Button>
    </form>
  );
}

export default CreateProjectForm;
