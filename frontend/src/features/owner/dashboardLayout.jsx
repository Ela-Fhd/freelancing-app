import DashboardHeader from "@/ui/dashboardHeader";
import Stats from "./stats";
import Loading from "@/ui/loading";
import useOwnerProjects from "@/features/projects/useOwnerProjects";

export default function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <>
      <DashboardHeader />
      <Stats projects={projects} />
    </>
  );
}
