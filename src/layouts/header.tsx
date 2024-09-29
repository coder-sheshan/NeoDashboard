import { Bars2Icon } from "@heroicons/react/16/solid";
import avator3 from "../assets/3.jpg";
import ProfileMenu from "../components/profile-menu";
import ToggleButton from "../components/toggle-theme";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";



const Header = ({ setIsOpen, isOpen }: {
    isOpen: boolean, setIsOpen: (isOpen: boolean) => void
}) => {

    return (
        <div className="flex items-center justify-between py-2 bg-slate-200 dark:bg-slate-800 lg:hidden">
            <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => { setIsOpen(!isOpen) }}
            >
                <Bars2Icon className="size-5" />
            </button>
            <div className="relative flex items-center gap-3 p-1 text-left  ">

                <ToggleButton />

                <Popover>
                    <PopoverButton
                        id="dropdownMenuIconHorizontalButton"
                        onClick={() => { }}
                        type="button"
                    >
                        <img src={avator3} alt="profile-images" className="inline-block  h-10 rounded-full" />
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        className="absolute z-50 divide-y divide-white/5 rounded-xl bg-white/5 text-sm transition duration-200 ease-in-out"
                        style={{ top: 50, right: 20 }}
                    >
                        <ProfileMenu width={600} />
                    </PopoverPanel>
                </Popover>
            </div>
        </div>
    );
};

export default Header;
