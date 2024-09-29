import React from 'react';

interface ProfileMenuProps {

  width: number | string;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ width }) => {
  return (

    <div
      id="dropdown"
      className={` w-${width} bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-zinc-800`}
    >
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 min-w-[200px]" aria-labelledby="dropdownDefaultButton">
        <li>
          <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            My Account
          </span>
        </li>
        <li>
          <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Privacy Policy
          </span>
        </li>
        <li>
          <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Share Feedback
          </span>
        </li>
        <li>
          <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Sign out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
