import { NavLink } from "react-router-dom";

const CustomNavlink = ({ children, to }) => {
  const navlinkCls =
    "flex items-center gap-x-2 hover:text-primary-900 hover:bg-primary-100/70 rounded-lg px-2 py-1.5 transition duration-300";
  const navlinkActive = "bg-primary-100/80 text-primary-900";

  return (
    <li>
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
    </li>
  );
};

export default CustomNavlink;
