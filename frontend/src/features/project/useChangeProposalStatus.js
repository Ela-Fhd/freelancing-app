import { changeProposalStatusApi } from "@/services/proposalService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
  const { id: projectId } = useParams();
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["project", projectId],
      });
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
