import Loading from "@/ui/loading";
import Empty from "@/ui/empty";
import Table from "@/ui/Table";
import useProjects from "@/hooks/useProjects";
import ProjectsRow from "./projectsRow";

const ProjectTable = () => {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;
  if (!projects?.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>توضیحات</th>
          <th>بودجه</th>
          <th>دسته بندی</th>
          <th>ددلاین</th>
          <th>وضیعت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectsRow project={project} index={index} key={project._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectTable;
