import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../Context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const themeIconStyle = "w-5 h-5 text-secondary-700 hover:text-secondary-500";

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className={themeIconStyle} />
      ) : (
        <HiOutlineMoon className={themeIconStyle} />
      )}
    </button>
  );
}

export default DarkModeToggle;
