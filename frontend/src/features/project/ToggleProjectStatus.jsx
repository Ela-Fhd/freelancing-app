import Toggle from "@/ui/toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "@/ui/loading";

export default function ToggleProjectStatus({ project }) {
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const handleChangeStatus = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ uuid: project?._id, data: { status } });
  };

  return (
    <div>
      {isUpdating ? (
        <Loading width={50} height={30} />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          handleChange={handleChangeStatus}
          enabled={project.status === "OPEN" ? true : false}
        />
      )}
    </div>
  );
}
