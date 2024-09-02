import { useForm } from "react-hook-form";
import Input from "@/ui/input";
import Button from "@/ui/button";
import SelectInput from "@/ui/selectInput";
import { useState } from "react";
import Tag from "@/ui/tag";
import MultiDatePicker from "../../ui/datePicker";

function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tag, setTag] = useState([]);
  const [date, setDate] = useState(new Date());

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

      <SelectInput
        label="دسته بندی"
        required
        name="category"
        options={[]}
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

      <Button type="submit">ایجاد پروژه</Button>
    </form>
  );
}

export default CreateProjectForm;
