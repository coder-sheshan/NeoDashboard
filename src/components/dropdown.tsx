import React from "react";

export interface SelectOption {
    value: string;
    label: string;
}

export interface DropdownProps {
    options: SelectOption[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    return (
        <form>
            <select
                id="small"
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default Dropdown;
