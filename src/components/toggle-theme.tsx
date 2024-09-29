import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import useThemeStore from "../store/useThemestore";

const ToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useThemeStore();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-3  rounded bg-opacity-80 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white transition-colors duration-300 ease-in-out"
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ToggleButton;
