import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "@/services/projectService";

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
