import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "@/services/authService";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isUpdating, changeUserStatus };
}
