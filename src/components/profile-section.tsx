import avator3 from "../assets/3.jpg";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import ProfileMenu from "./profile-menu";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const ProfileSection = () => {
    return (
        <Popover>
            <PopoverButton
                type="button"
                className="relative items-center hidden gap-3 p-4 border-t lg:flex profile-section dark:text-gray-500 border-slate-800"
                id="dropdownDefaultButton"
            >
                <img
                    src={avator3}
                    className="inline-block rounded-md w-11 h-11"
                    alt="profile avatar"
                />
                <div>
                    <h3 className="m-0 font-medium text-slate-300">Erica</h3>
                    <p className="m-0 text-xs text-gray-400 rounded-lg group">
                        erica@gmail.com
                    </p>
                </div>
                <ChevronUpIcon className="flex-1 cursor-pointer size-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute z-50 divide-y divide-white/5 rounded-xl bg-white/5 text-sm transition duration-200 ease-in-out"
                style={{ bottom: 70, left: 90 }}
            >
                <ProfileMenu width={600} />
            </PopoverPanel>
        </Popover>
    );
};


export default ProfileSection;
