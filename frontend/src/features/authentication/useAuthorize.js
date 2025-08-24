import useUser from "./useUser";
import { useLocation } from "react-router";

export default function useAuhorize() {
  const { pathname } = useLocation();
  const { user, isLoading } = useUser();
  let isAuthenticate = false;
  if (user) isAuthenticate = true;

  const AuthorisedRoles = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  let isAuthorized = false;
  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(AuthorisedRoles).includes(desiredRole)) {
    if (user && user?.role === AuthorisedRoles[desiredRole])
      isAuthorized = true;
  }

  return { isLoading, user, isAuthenticate, isAuthorized };
}
