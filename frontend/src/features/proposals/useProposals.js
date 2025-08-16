import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "@/services/proposalService";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["freelancer-proposals"],
    queryFn: getProposalsApi,
    retry: false,
    refetchOnWindowFocus: true,
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}
