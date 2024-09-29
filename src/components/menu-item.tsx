import React from "react";

interface MenuItemProps {
    name: string;
    icon: JSX.Element;
    isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, icon, isActive = false }) => {
    return (
        <li
            className={`flex items-center p-2 rounded-lg group mb=1  md:mb-2 text-base ${isActive
                ? "text-black dark:text-white"
                : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
                }`}
        >
            {icon}
            <span className="ms-3">{name}</span>
        </li>
    );
};

export default MenuItem;
