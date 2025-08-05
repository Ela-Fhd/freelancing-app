import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 p-4 border-l border-gray-200">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavlink to="/owner/dashboard">
            <HiHome className="text-xl" />
            <span>خانه</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/owner/projects">
            <HiCollection className="text-xl" />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

const CustomNavlink = ({ children, to }) => {
  const navlinkCls =
    "flex items-center gap-x-2 hover:text-primary-900 hover:bg-primary-100/70 rounded-lg px-2 py-1.5 transition duration-300";
  const navlinkActive = "bg-primary-100/80 text-primary-900";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkCls} ${navlinkActive}`
          : `${navlinkCls} text-secondary-700`
      }
    >
      {children}
    </NavLink>
  );
};
