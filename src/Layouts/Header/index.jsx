import { Bars2Icon } from "@heroicons/react/16/solid";
import React from "react";
import ProfileMenu from "../../Components/ProfileMenu";
import avator3 from "../../Assets/Images/3.jpg";


const Header = ({ setIsOpen, isOpen, setIsProfileMenu, isProfileMenu }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // document.body.classList.remove("dark");
  };
  return (
    <div className="flex items-center justify-between dark:bg-slate-800 lg:hidden">
      <button
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <Bars2Icon className="size-5" />
      </button>
      <div className="relative inline-block p-1 text-left">
        <button
          id="dropdownMenuIconHorizontalButton"
          onClick={() => setIsProfileMenu(!isProfileMenu)}
          type="button"
        >
        <img src={avator3} alt="profile-images"     className="inline-block w-10 h-10 rounded-full" />
        </button>
        {isProfileMenu && <ProfileMenu width="44" top="0"/>}
      </div>
    </div>
  );
};

export default Header;
