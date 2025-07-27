import { useForm } from "react-hook-form";
import Input from "@/ui/input";
import Button from "@/ui/button";
import SelectInput from "@/ui/selectInput";
import { useState } from "react";
import Tag from "@/ui/tag";
import MultiDatePicker from "@/ui/datePicker";
import useCategories from "@/hooks/useCategories";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectInfo = {} }) {
  const { _id: projectUuid } = projectInfo;
  const isEditSession = !!projectUuid;
  const { title, description, category, budget, tags, deadline } = projectInfo;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      category: category?._id,
      budget,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: editValues,
  });

  const [tag, setTag] = useState(tags || []);
  const [date, setDate] = useState(deadline ? new Date(deadline) : new Date());
  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();

  const onSubmitForm = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags: tag,
    };

    if (isEditSession) {
      editProject(
        { uuid: projectUuid, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="text-right">
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
        type="number"
        placeholder="بودجه پروژه"
        validationSchema={{
          required: "تعیین بودجه ضروری است",
          minLength: {
            value: "4",
            message: "طول عدد وارد شده نامعتبر است",
          },
        }}
        filterPrice
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

      <Button type="submit" loading={isCreating || isEditing}>
        {isEditSession ? "ویرایش" : "ایجاد پروژه"}
      </Button>
    </form>
  );
}

export default CreateProjectForm;
