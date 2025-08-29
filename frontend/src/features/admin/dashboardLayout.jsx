import DashboardHeader from "@/ui/dashboardHeader";
import Loading from "@/ui/loading";
import useProposals from "@/features/proposals/useProposals";
import useProjects from "@/hooks/useProjects";
import useUsers from "@/hooks/useUsers";
import Stats from "./stats";

export default function DashboardLayout() {
  const { isLoading: proposalLoading, proposals } = useProposals();
  const { isLoading: projectsLoading, projects } = useProjects();
  const { isLoading: usersLoading, users } = useUsers();

  if (proposalLoading || projectsLoading || usersLoading) return <Loading />;
  return (
    <>
      <DashboardHeader />
      <Stats
        users={users.length}
        proposals={proposals.length}
        projects={projects.length}
      />
    </>
  );
}
