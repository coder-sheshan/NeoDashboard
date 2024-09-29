interface EventItemProps {
    name: string;
    isUpcoming?: boolean;
}

const EventItem: React.FC<EventItemProps> = ({ name, isUpcoming = false }) => {
    return (
        <li
            className={`flex items-center text-sm p-2 rounded-lg group  ${isUpcoming
                ? "text-gray-400 text-xs mb-2 "
                : "text-slate-400 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                }`}
        >
            <span className="ms-2">{name}</span>
        </li>
    );
};

export default EventItem;