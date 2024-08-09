import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProjectApi } from "@/services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removeOwnerProject, isPending: isDeleting } = useMutation({
    mutationFn: removeOwnerProjectApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { removeOwnerProject, isDeleting };
}
