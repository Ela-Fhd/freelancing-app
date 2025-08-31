import useAuhorize from "@/features/authentication/useAuthorize";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Loading from "@/ui/Loading";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticate, isAuthorized, isVerified } = useAuhorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticate && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما در انتظار بررسی است");
      navigate("/not-access");
    }
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
