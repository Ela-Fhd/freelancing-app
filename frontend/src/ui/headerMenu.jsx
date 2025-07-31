import Logout from "@/features/authentication/logout";
import DarkModeToggle from "./darkModeToggle";

const HeaderMenu = () => {
  return (
    <ul className="flex items-center gap-x-4">
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
