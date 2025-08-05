import { FiLogOut } from "react-icons/fi";
import useLogout from "./useLogout";
import Loading from "@/ui/loading";

const Logout = () => {
  const { isLoading, logout } = useLogout();
  return (
    <button onClick={logout}>
      {isLoading ? (
        <Loading color="#000" />
      ) : (
        <FiLogOut className="w-5 h-5 hover:text-error cursor-pointer text-secondary-900" />
      )}
    </button>
  );
};

export default Logout;
