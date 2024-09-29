import React from "react";
import {
    CalendarDaysIcon,
    HomeIcon,
    TicketIcon,
    Cog6ToothIcon,
    LifebuoyIcon,
    XCircleIcon,
} from "@heroicons/react/16/solid";
import MenuItem from "../components/menu-item";
import EventItem from "../components/event-item";
import ProfileSection from "../components/profile-section";
import ToggleButton from "../components/toggle-theme";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    activePage: string; // New prop for active page
}

const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    setIsOpen,
    activePage, // Get the active page
}) => {
    const menuItems = [
        { name: "Home", icon: <HomeIcon className="size-5 dark:text-white" /> },
        {
            name: "Events",
            icon: <CalendarDaysIcon className="size-5 dark:text-gray-400" />,
        },
        {
            name: "Orders",
            icon: <TicketIcon className="size-5 dark:text-gray-400" />,
        },
        {
            name: "Setting",
            icon: <Cog6ToothIcon className="size-5 dark:text-gray-400" />,
        },
        { name: "Login", icon: <Cog6ToothIcon className="size-5 dark:text-gray-400" /> }, // Login item
    ];

    const eventList = [
        { name: "Upcoming Events" },
        { name: "Bear Hug: Live in Concert" },
        { name: "Six Fingers - DJ set" },
        { name: "We All Look the Same" },
        { name: "Viking People" },
    ];

    return (
        <aside
            className={`fixed top-0 left-0 z-40 w-64 h-screen flex flex-col transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
            <div className="relative flex-grow overflow-y-auto bg-gray-50 dark:bg-zinc-950">
                <div className="flex items-center justify-between p-5 text-2xl text-gray-400 border-b dark:text-gray-500 border-slate-800">
                    <div className="flex items-center">
                        <LifebuoyIcon className="size-5 dark:text-white" />
                        <p className="px-5  dark:text-white">Neo UI</p>
                    </div>
                    <XCircleIcon
                        className="cursor-pointer size-5 d-block lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                <ul className="px-3 py-4 font-medium ">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            isActive={item.name === activePage} // Highlight active page
                        />
                    ))}
                </ul>

                <ul className="">
                    {eventList.map((event, index) => (
                        <EventItem key={index} name={event.name} isUpcoming={index === 0} />
                    ))}
                </ul>
            </div>

            {/* Place this at the bottom of the sidebar */}
            <div className="flex items-center dark:text-gray-400 p-2 mx-2 gap-3 text-sm">
                <ToggleButton /> Theme
            </div>

            <div className="relative">
                <ProfileSection />
            </div>
        </aside>
    );
};

export default Sidebar;
