import useUser from "./useUser";
import { Link } from "react-router-dom";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Link to="dashboard" className="flex items-center gap-x-2 cursor-pointer">
      <img
        src="/images/avatar.jpg"
        alt="avatar"
        className="w-7 h-7 rounded-full object-covar object-center"
      />
      <span className="text-secondary-900">{user?.name}</span>
    </Link>
  );
};

export default UserAvatar;
