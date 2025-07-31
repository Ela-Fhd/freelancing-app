import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/authService";

function useUser() {
  const { isLoading, data } = useQuery({
    queryKey: ["get-user"],
    retry: false,
    queryFn: getUser,
    refetchOnWindowFocus: true,
  });

  const { user } = data || {};
  return { isLoading, user };
}

export default useUser;
