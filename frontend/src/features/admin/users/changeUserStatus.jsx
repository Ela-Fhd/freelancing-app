import SelectInput from "@/ui/selectInput";
import { useForm } from "react-hook-form";
import Button from "@/ui/button";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

const ChangeUserStatus = ({ user, onClose }) => {
  const { _id: userId, status } = user;
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const handleChangeUserStatus = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(handleChangeUserStatus)}>
      <SelectInput
        name="status"
        label="تغییر وضیعت"
        register={register}
        options={options}
        defaultValue={status}
        required
      />
      <Button className="w-full" type="submit" loading={isUpdating}>
        تایید
      </Button>
    </form>
  );
};

export default ChangeUserStatus;
