import useUser from "./useUser";
import { useLocation } from "react-router";

export default function useAuhorize() {
  let isVerified = false;
  let isAuthenticate = false;
  let isAuthorized = false;
  const { pathname } = useLocation();
  const { user, isLoading } = useUser();

  if (user) isAuthenticate = true;
  if (user && user.status === 2) isVerified = true;

  const AuthorisedRoles = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(AuthorisedRoles).includes(desiredRole)) {
    if (user && user?.role === AuthorisedRoles[desiredRole])
      isAuthorized = true;
  }

  return { isLoading, user, isAuthenticate, isAuthorized, isVerified };
}
