import SelectInput from "@/ui/selectInput";
import { useForm } from "react-hook-form";
import Button from "@/ui/button";
import useChangeProposalStatus from "./useChangeProposalStatus";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

const ChangeProposalStatus = ({ proposal, onClose }) => {
  const { _id: proposalId, status } = proposal;
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const handleChangeProposalStatus = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(handleChangeProposalStatus)}>
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

export default ChangeProposalStatus;
