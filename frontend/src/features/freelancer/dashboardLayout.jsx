import Stats from "./stats";
import DashboardHeader from "./dashboardHeader";
import Loading from "@/ui/loading";
import useProposals from "@/features/proposals/useProposals";

export default function DashboardLayout() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;

  return (
    <>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </>
  );
}
