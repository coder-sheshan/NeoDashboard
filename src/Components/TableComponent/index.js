import React from "react";
import avator1 from "../../Assets/Images/1.jpg";
import avator2 from "../../Assets/Images/2.jpg";
import avator3 from "../../Assets/Images/3.jpg";
import avator4 from "../../Assets/Images/4.jpg";
import avator5 from "../../Assets/Images/5.jpg";

const TableComponent = () => {
  const orders = [
    {
      orderNumber: "3000",
      purchaseDate: "May 9, 2024",
      customer: "John Doe",
      event: "Bear Hug: Live in Concert",
      amount: "US$80.00",
      image: avator1,
    },
    {
      orderNumber: "3001",
      purchaseDate: "June 12, 2024",
      customer: "Jane Smith",
      event: "Rock the World: Stadium Tour",
      amount: "US$120.00",
      image: avator2,
    },
    {
      orderNumber: "3002",
      purchaseDate: "July 21, 2024",
      customer: "Michael Johnson",
      event: "Jazz Night: Smooth Vibes",
      amount: "US$60.00",
      image: avator3,
    },
    {
      orderNumber: "3003",
      purchaseDate: "August 5, 2024",
      customer: "Emily Clark",
      event: "Pop Fest 2024",
      amount: "US$100.00",
      image: avator4,
    },
    {
      orderNumber: "3004",
      purchaseDate: "August 15, 2024",
      customer: "Robert Brown",
      event: "Classical Evening: Symphony Live",
      amount: "US$50.00",
      image: avator5,
    },
    {
      orderNumber: "3005",
      purchaseDate: "September 2, 2024",
      customer: "Linda Davis",
      event: "Electronic Beats Festival",
      amount: "US$85.00",
      image: avator3,
    },
    {
      orderNumber: "3006",
      purchaseDate: "September 15, 2024",
      customer: "James Wilson",
      event: "Folk Music Carnival",
      amount: "US$70.00",
      image: avator1,
    },
    {
      orderNumber: "3007",
      purchaseDate: "October 1, 2024",
      customer: "Patricia Johnson",
      event: "Reggae Vibes: Island Edition",
      amount: "US$95.00",
      image: avator4,
    },
    {
      orderNumber: "3008",
      purchaseDate: "October 10, 2024",
      customer: "David Martinez",
      event: "Hip-Hop Nights: Battle of Beats",
      amount: "US$110.00",
      image: avator3,
    },
    {
      orderNumber: "3009",
      purchaseDate: "November 5, 2024",
      customer: "Sophia Garcia",
      event: "Indie Rock Fest",
      amount: "US$90.00",
      image: avator2,
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase border-b dark:text-zinc-400 dark:border-gray-800">
          <tr>
            <th scope="col" className="py-3 pe-3 px-sm-0 whitespace-nowrap">
              Order number
            </th>
            <th scope="col" className="py-3 pe-3 px-sm-0 whitespace-nowrap">
              Purchase date
            </th>
            <th scope="col" className="py-3 pe-3 px-sm-0 whitespace-nowrap">
              Customer
            </th>
            <th scope="col" className="py-3 pe-3 px-sm-0 whitespace-nowrap">
              Event
            </th>
            <th scope="col" className="py-3 pe-3 px-sm-0 whitespace-nowrap">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b dark:border-gray-800">
              <td className="py-4 pe-3 px-sm-0 dark:text-slate-300 whitespace-nowrap">
                {order.orderNumber}
              </td>
              <td className="py-4 pe-3 px-sm-0 whitespace-nowrap">{order.purchaseDate}</td>
              <td className="py-4 pe-3 px-sm-0 dark:text-slate-300 whitespace-nowrap">
                {order.customer}
              </td>
              <td className="py-4 pe-3 px-sm-0 dark:text-slate-300 whitespace-nowrap">
                <div className="flex items-center gap-4">
                  <img
                    src={order?.image}
                    className="inline-block w-6 h-6 rounded-full"
                    alt="event image"
                  />
                  {order.event}
                </div>
              </td>
              <td className="py-4 pe-3 px-sm-0 dark:text-slate-300 whitespace-nowrap">
                {order.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
