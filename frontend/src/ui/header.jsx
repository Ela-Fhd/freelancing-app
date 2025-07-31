import React from "react";
import useUser from "@/features/authentication/useUser";
import HeaderMenu from "./headerMenu";
import UserAvatar from "@/features/authentication/UserAvatar";

function Header() {
  const { isLoading, user } = useUser();

  return (
    <div className="bg-secondary-0 border-b border-secondary-200 py-4 px-8 ">
      <div
        className={`container flex items-center justify-between xl:max-w-screen-lg ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
