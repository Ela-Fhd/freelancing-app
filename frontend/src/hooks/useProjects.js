import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "@/services/projectService";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

export default function useProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(queryObject),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
