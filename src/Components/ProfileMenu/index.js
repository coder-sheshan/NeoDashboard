import React from 'react'

function ProfileMenu({top, width}) {
  return (
    <div>
        <div
          id="dropdown"
          className={`absolute right-0 -top-${top}  w-${width} bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-zinc-800 `}
        //   className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"

        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <span  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Account</span>
            </li>
            <li>
              <span  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Privacy Policy</span>
            </li>
            <li>
              <span  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Share Feedback</span>
            </li>
            <li>
              <span  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default ProfileMenu;
