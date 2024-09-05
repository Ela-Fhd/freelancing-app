import { useForm } from "react-hook-form";
import Input from "@/ui/input";
import Button from "@/ui/button";
import SelectInput from "@/ui/selectInput";
import { useState } from "react";
import Tag from "@/ui/tag";
import MultiDatePicker from "@/ui/datePicker";
import useCategories from "@/hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "@/ui/loading";

function CreateProjectForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [tag, setTag] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();

  const { createProject, isCreating } = useCreateProject();

  const onSubmitForm = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags: tag,
    };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        name="title"
        type="text"
        label="عنوان"
        id="title"
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
        id="description"
        label="توضیحات"
        placeholder="توضیحات پروژه"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: "10",
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />

      <Input
        label="بودجه"
        id="budget"
        register={register}
        name="budget"
        required
        type="text"
        placeholder="بودجه پروژه"
        validationSchema={{
          required: "تعیین بودجه ضروری است",
          minLength: {
            value: "4",
            message: "طول عدد وارد شده نامعتبر است",
          },
        }}
      />

      <SelectInput
        label="دسته بندی"
        required
        name="category"
        options={categories}
        register={register}
      />

      <Tag label="تگ ها" tag={tag} setTag={setTag} name="tags" required />

      <MultiDatePicker
        label="ددلاین"
        name="deadline"
        date={date}
        setDate={setDate}
        required
      />

      <Button type="submit">{isCreating ? <Loading /> : "ایجاد پروژه"}</Button>
    </form>
  );
}

export default CreateProjectForm;
