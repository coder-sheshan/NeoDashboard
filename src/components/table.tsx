

export type Order = {
  orderNumber: string;
  purchaseDate: string;
  customer: string;
  event: string;
  amount: string;
  image: string; // since the image is a string path
};


interface TableComponentProps {
  orders: Order[];
}
const TableComponent: React.FC<TableComponentProps> = ({ orders }) => {
  return (
    <div className="relative overflow-x-auto h-full ">
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
              <td className="py-4 pe-3 px-sm-0 whitespace-nowrap">
                {order.purchaseDate}
              </td>
              <td className="py-4 pe-3 px-sm-0 dark:text-slate-300 whitespace-nowrap">
                {order.customer}
              </td>
              <td className="py-4 pe-3 px-sm-0 dark:text-slate-300 whitespace-nowrap">
                <div className="flex items-center gap-4">
                  <img
                    src={order.image}
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