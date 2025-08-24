import useAuhorize from "@/features/authentication/useAuthorize";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Loading from "@/ui/Loading";

export default function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticate, isAuthorized } = useAuhorize();
  const navigate = useNavigate();

  console.log(isAuthorized);

  useEffect(() => {
    if (!isAuthenticate && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isLoading, isAuthenticate, isAuthorized]);

  if (isLoading)
    return (
      <div className="w-100 h-screen flex items-center justify-center bg-secondary-100">
        <Loading color="#4B0082" />
      </div>
    );

  if (isAuthenticate && isAuthorized) return children;
}
