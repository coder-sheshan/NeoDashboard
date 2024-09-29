import React from "react";
import Dropdown, { SelectOption } from "./dropdown";
import Title from "./title";
import CardComponent from "./card";
import TableComponent from "./table";
import { orders, revenueDataArray } from "../utils/constants";

const options: SelectOption[] = [
    { value: "last-week", label: "Last Week" },
    { value: "last-month", label: "Last Month" },
    { value: "last-3-months", label: "Last 3 Months" },
    { value: "last-6-months", label: "Last 6 Months" },
    { value: "year-to-date", label: "Year to Date" },
    { value: "last-year", label: "Last Year" },
];


interface Dashboardprops {
    userName: string;

}

const Dashboard: React.FC<Dashboardprops> = ({ userName }) => {
    return (
        <div className="min-h-screen p-8 rounded-lg lg:ml-64 dark:bg-zinc-900 overflow-scroll max-h-screen">
            <Title userName={userName} />
            <div className="py-5 card-container">
                <div className="flex items-center justify-between mb-5 Title">
                    <p className="mt-0 mb-1 text-sm font-medium dark:text-white">Overview</p>
                    <Dropdown options={options} />
                </div>
                <CardComponent revenueData={revenueDataArray} />
            </div>
            <div className="table-container  ">
                <p className="pb-4 mt-0 text-sm font-medium text-white">Recent Order</p>
                <TableComponent orders={orders} />
            </div>
        </div>
    );
};

export default Dashboard;
