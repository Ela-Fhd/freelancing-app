import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/loading";
import Empty from "../../ui/empty";
import Table from "../../ui/table";
import ProjectsRow from "./ProjectsRow";

function ProjectsTable() {
  // const { isLoading, projects } = useOwnerProjects();

  // if is loading ==> show isLoading component
  // if projects array is empty and projects.length === 0 => show empty message to user / else show projects table

  // if (isLoading) return <Loading />;
  // if (projects.length) return <Empty resourceName="پروژه" />;

  const projects = [
    { _id: "123", title: "برنامه نویسی وب", description: "هیچی" },
  ];

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>پروژه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضیعت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <ProjectsRow project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
