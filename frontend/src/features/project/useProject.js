import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "@/services/projectService";

export default function useProject() {
  const { id } = useParams();

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  const { project } = data || {};

  return { project, isLoading };
}
