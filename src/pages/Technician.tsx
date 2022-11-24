import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Technician = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/orders");
        setOrders(result.data);
    };
    return (
        <div className="w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Street
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Unit
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Zip
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Phone
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Job type
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Time
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Priority
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Notes
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: any, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {order.name}
                            </th>
                            <td className="py-4 px-6">{order.street}</td>
                            <td className="py-4 px-6">{order.unit}</td>
                            <td className="py-4 px-6">{order.zip}</td>
                            <td className="py-4 px-6">{order.phone}</td>
                            <td className="py-4 px-6">{order.job_type}</td>
                            <td className="py-4 px-6">{order.date}</td>
                            <td className="py-4 px-6">{order.time}</td>
                            <td className="py-4 px-6">
                                <p
                                    className={`font-bold
                                        ${
                                            order.priority === "High"
                                                ? "text-red-600"
                                                : "text-orange-300"
                                        }`}
                                >
                                    {order.priority}
                                </p>
                            </td>
                            <td className="py-4 px-6">{order.notes}</td>
                            <td className="py-4 px-6">
                                <Link
                                    to={`/vieworder/${order.id}`}
                                    className="align-left flex text-white bg-gray-400 font-medium rounded-lg text-sm px-6 py-2 text-center mr-4 mb-2"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Technician;
