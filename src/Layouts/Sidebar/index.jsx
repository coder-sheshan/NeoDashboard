import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  HomeIcon,
  LifebuoyIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TicketIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import avator3 from "../../Assets/Images/3.jpg";
import ProfileMenu from "../../Components/ProfileMenu";

const Sidebar = ({ isOpen, setIsOpen, setIsProfileMenu, isProfileMenu }) => {
  const menuItems = [
    { name: "Home", icon: <HomeIcon className="size-5 dark:text-white " /> },
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
  ];

  const eventList = [
    { name: "Upcomimg Events" },
    { name: "Bear Hug: Live in Concert" },
    { name: "Six Fingures - DJ set" },
    { name: "We All Look the same" },
    { name: "Viking People" },
  ];

  const profiles = [
    {
      name: "Support",
      icon: <QuestionMarkCircleIcon className="size-4 dark:text-gray-500 " />,
    },
    {
      name: "Changelog",
      icon: <SparklesIcon className="size-4 dark:text-gray-500" />,
    },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="relative h-full overflow-y-auto bg-gray-50 dark:bg-zinc-950">
          <div className="flex items-center justify-between p-5 text-2xl text-gray-400 border-b dark:text-gray-500 border-slate-800">
            <div className="flex items-center">
              <LifebuoyIcon className="size-5 dark:text-white" />
              <p className="px-5 m-0 text-base dark:text-white">Neo UI</p>
            </div>
            <div>
              {isOpen ? (
                <XCircleIcon
                  className="cursor-pointer size-5 d-block lg:hidden"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <ChevronDownIcon className="cursor-pointer size-5" />
              )}
            </div>
          </div>
          <ul className="px-3 py-4 font-medium ">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center p-2 rounded-lg group mb-2  text-base
            ${
              index === 0
                ? "text-white"
                : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
            }`}
              >
                {item.icon}
                <span className="ms-3">{item.name}</span>
              </li>
            ))}
          </ul>

          <ul className="px-3 font-medium ">
            {eventList.map((item, index) => (
              <li
                key={index}
                className={`flex items-center p-2 rounded-lg group text-base
            ${
              index === 0
                ? "text-gray-400 text-xs"
                : "text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-900 "
            }`}
              >
                <span className="ms-2">{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="absolute left-0 w-full ">
            <ul className="px-4 pb-3 font-medium">
              {profiles.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 text-base rounded-lg group text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-900 "
                >
                  {item.icon}
                  <span className="ms-2">{item.name}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="relative items-center hidden gap-3 p-4 border-t lg:flex profile-section dark:text-gray-500 border-slate-800"
              id="dropdownDefaultButton"
              onClick={() => setIsProfileMenu(!isProfileMenu)}
              
            >
              <img
                src={avator3}
                className="inline-block rounded-md w-11 h-11"
                alt="event image"
              />
              <div>
                <h3 className="m-0 font-medium text-slate-300">Erica</h3>
                <p className="m-0 text-xs text-gray-400 rounded-lg group">
                  erica@gmail.com
                </p>
              </div>
              <ChevronUpIcon className="flex-1 cursor-pointer size-5" />
            </button>
            {isProfileMenu && <ProfileMenu width="full" top="16" />}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
