import Table from "../../ui/table";
import truncateText from "../../utils/truncateText";
import toLocaleDateString from "../../utils/toLocaleDateString";
import { toPersianNumberWithComma } from "../../utils/toPersianDigits";

export default function ProjectsRow({ project, index }) {
  return (
    <>
      <Table.Row key={project._id}>
        <td>{index + 1}</td>
        <td>{truncateText(project.title, 10)}</td>
        <td>{project.category.title}</td>
        <td>{toPersianNumberWithComma(project.budget)}</td>
        <td>{toLocaleDateString(project.deadline)}</td>
        <td>
          <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            {project.tags.map((tag) => (
              <span className="agde badge--secondary" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </td>
        <td>{project.freelancer?.name || "-"}</td>
        <td>
          {project.status === "OPEN" ? (
            <span className="badge badge--success">باز</span>
          ) : (
            <span className="badge badge--danger">بسته</span>
          )}
        </td>
        <td>...</td>
      </Table.Row>
    </>
  );
}
