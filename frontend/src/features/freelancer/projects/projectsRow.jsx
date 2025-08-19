import Table from "@/ui/table";
import truncateText from "@/utils/truncateText";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { toPersianNumberWithComma } from "@/utils/toPersianDigits";
import { MdAssignmentAdd } from "react-icons/md";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--error",
  },
};

export default function ProjectsRow({ project, index }) {
  const { title, description, budget, category, deadline, status } = project;
  return (
    <>
      <Table.Row key={project._id}>
        <td>{index + 1}</td>
        <td>{truncateText(title, 20)}</td>
        <td>{truncateText(description ?? "", 30)}</td>
        <td>{toPersianNumberWithComma(budget)}</td>
        <td>{category?.title || "انتخاب نشده!"}</td>
        <td>{toLocaleDateString(deadline)}</td>
        <td>
          <span className={`badge ${projectStatus[status].className}`}>
            {projectStatus[status].label}
          </span>
        </td>
        <td>
          <button>
            <MdAssignmentAdd className="w-5 h-5 text-primary-800" />
          </button>
        </td>
      </Table.Row>
    </>
  );
}
