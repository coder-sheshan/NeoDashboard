import React from "react";
import CardComponent from "../../Components/CardComponent";
import TableComponent from "../../Components/TableComponent";

const LandingPage = () => {
  return (
    <div className="min-h-screen p-8 rounded-lg lg:ml-64 dark:bg-zinc-900">
      <div className="text-lg font-semibold text-white">
        <h2 className="mb-6">Good Afternoon, Erica</h2>
      </div>
      <div className="py-5 card-container">
        <div className="flex items-center justify-between mb-5 Title">
          <p className="mt-0 mb-1 text-sm font-medium text-white">Overview</p>
          <form>
            <select
              id="small"
              className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="last-3-months">Last 3 Months</option>
              <option value="last-6-months">Last 6 Months</option>
              <option value="year-to-date">Year to Date</option>
              <option value="last-year">Last Year</option>
            </select>
          </form>
        </div>
        <CardComponent />
      </div>
      <div className="table-container">
        <p className="pb-4 mt-0 text-sm font-medium text-white">Recent Order</p>
        <TableComponent />
      </div>
    </div>
  );
};

export default LandingPage;
