import Toggle from "@/ui/toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "@/ui/loading";

export default function ToggleProjectStatus({ project }) {
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();
  const { status } = project;
  const enabled = status === "OPEN" ? true : false;
  const label = status === "OPEN" ? "باز" : "بسته";

  const handleChangeStatus = () => {
    const new_status = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ uuid: project?._id, data: { status: new_status } });
  };

  return (
    <div className="w-[5rem] flex justify-center">
      {isUpdating ? (
        <Loading width={50} height={30} />
      ) : (
        <Toggle
          label={label}
          handleChange={handleChangeStatus}
          enabled={enabled}
        />
      )}
    </div>
  );
}
