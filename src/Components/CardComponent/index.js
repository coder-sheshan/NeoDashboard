import React from "react";

const CardComponent = () => {
  const revenueDataArray = [
    {
      title: "Total revenue",
      amount: "$2.6M",
      percentageChange: "+4.5%",
      timePeriod: "From Last Week",
    },
    {
      title: "Net Profit",
      amount: "$1.2M",
      percentageChange: "+3.8%",
      timePeriod: "From Last Month",
    },
    {
      title: "Gross Margin",
      amount: "$3.4M",
      percentageChange: "-2.1%",
      timePeriod: "From Last Quarter",
    },
    {
        title: "Gross Margin",
        amount: "$3.4M",
        percentageChange: "-2.1%",
        timePeriod: "From Last Quarter",
      },
  ];

  return (
    <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {revenueDataArray.map((revenue, index) => (
        <div
          key={index}
          className="py-4  border-t-[1px] border-indigo-600"
        >
          <h5 className="mb-2 text-sm font-medium text-zinc-300">{revenue.title}</h5>
          <h1 className="mb-2 text-2xl font-semibold text-zinc-300">{revenue.amount}</h1>
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
