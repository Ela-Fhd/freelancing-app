import { LuSunMedium } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { useDarkMode } from "@/context/darkMode";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <LuSunMedium className="w-7 h-7 cursor-pointer text-secondary-900" />
      ) : (
        <LuMoonStar className="w-7 h-7 cursor-pointer" />
      )}
    </button>
  );
};

export default DarkModeToggle;
