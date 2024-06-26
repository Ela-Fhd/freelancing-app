import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  // if is loading ==> show isLoading component
  // if projects array is empty and projects.length === 0 => show empty message to user / else show projects table

  console.log(projects ? projects : []);
  return <div>ProjectsTable</div>;
}

export default ProjectsTable;
