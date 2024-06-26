import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/authService";

function useUser() {
  return useQuery({
    queryKey: ["get-user"],
    retry: false,
    queryFn: getUser,
    refetchOnWindowFocus: true,
  });
}

export default useUser;
