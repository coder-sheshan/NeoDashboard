


type RevenueData = {
    title: string;
    amount: string;
    percentageChange: string;
    timePeriod: string;
};

interface CardComponentProps {
    revenueData: RevenueData[];
}


const CardComponent: React.FC<CardComponentProps> = ({ revenueData }) => {


    return (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {revenueData.map((revenue, index) => (
                <div
                    key={index}
                    className="py-4 border-t-[1px] border-indigo-600"
                >
                    <h5 className="mb-2 text-sm font-medium dark:text-zinc-300">
                        {revenue.title}
                    </h5>
                    <h1 className="mb-2 text-2xl font-semibold dark:text-zinc-300">
                        {revenue.amount}
                    </h1>
                    <div className="flex items-center text-zinc-500">
                        <span className="inline-flex items-center px-2 py-1 mr-2 text-xs font-semibold rounded-md text-lime-400 bg-neutral-800">
                            {revenue.percentageChange}
                        </span>
                        <p className="text-xs font-medium text-zinc-600">
                            {revenue.timePeriod}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
