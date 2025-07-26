import React from "react";
import useUser from "@/features/authentication/useUser";

function Header() {
  const { data } = useUser();

  const { user } = data || {};

  // console.log(user?.role);

  return <div className="bg-secondary-0 py-4 px-8 ">{user?.name}</div>;
}

export default Header;
