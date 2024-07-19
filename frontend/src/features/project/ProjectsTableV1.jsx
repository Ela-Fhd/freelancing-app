import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/loading";
import Empty from "../../ui/empty";
import truncateText from "../../utils/truncateText";
import toLocaleDateString from "../../utils/toLocaleDateString";
import { toPersianNumberWithComma } from "../../utils/toPersianDigits";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  // if is loading ==> show isLoading component
  // if projects array is empty and projects.length === 0 => show empty message to user / else show projects table

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>پروژه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضیعت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            <tr key={project._id}>
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
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
