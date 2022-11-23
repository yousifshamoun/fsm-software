import React from "react";
import { Link } from "react-router-dom";
const CustomerForm = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <form className="w-full max-w-4xl">
                <p className="text-left font-bold text-xl my-2">
                    Customer Information
                </p>
                <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="street-address"
                            type="text"
                            placeholder="Street"
                        />
                    </div>

                    <div className="w-full md:w-1/12 px-1 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id=""
                            type="text"
                            placeholder="Unit"
                        />
                    </div>
                    <div className="w-full md:w-1/6 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="Zip"
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                        />
                    </div>
                </div>
                {/* Job Details Start */}
                <p className="text-left font-bold text-xl my-2">Job Details</p>
                <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Job Type
                        </p>
                        <div className="relative">
                            <select
                                className="first-letter:block appearance-none w-full bg-white border border-gray-400 py-2 px-4 pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500 "
                                id="grid-state"
                            >
                                <option value="" disabled selected>
                                    Select a Job Type
                                </option>
                                <option>Estimation</option>
                                <option>Repair</option>
                                <option>Installation</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Business Unit
                        </p>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 py-2 px-4 pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option value="" disabled selected>
                                    Select a Job Type
                                </option>
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Date
                        </p>
                        <input
                            className="appearance-none  w-full bg-white border border-gray-400 rounded py-2 px-2 leading-snug focus:outline-none  focus:border-gray-500"
                            id="date"
                            type="date"
                            placeholder=""
                        />
                    </div>
                    <div className="w-full md:w-1/6 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Time
                        </p>
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="time"
                            step={60}
                            type="time"
                            placeholder="Set a time"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Marketing Campaign
                        </p>
                        <div className="relative">
                            <select
                                className="first-letter:block appearance-none w-full bg-white border border-gray-400 py-2 px-4 pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option value="" disabled selected>
                                    Select a Marketing Campaign
                                </option>
                                <option>Google Adsense</option>
                                <option>Facebook Ads</option>
                                <option>Newspaper Insert</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Priority
                        </p>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 py-2 px-4 pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option value="" disabled selected>
                                    Select a Job Type
                                </option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Technician
                        </p>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 py-2 px-4 pr-8 rounded leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option value="" disabled selected>
                                    Select a Technician
                                </option>
                                <option>Samuel</option>
                                <option>Bradley</option>
                                <option>Ted</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="w-full px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Tags
                        </p>
                        <input
                            className="w-full appearance-none block bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="tags"
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="w-full px-2 mb-6 md:mb-0">
                        <p className="text-left text-gray-400 font-semibold mb-2">
                            Notes
                        </p>
                        <textarea
                            className="resize-vertical
                            mb-6
                            w-full appearance-none block bg-white border border-gray-400 rounded py-2 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500"
                            id="notes"
                            cols={40}
                            placeholder="Summary of the job details."
                        />
                    </div>
                </div>
                <div className="flex flex-row">
                    <button
                        type="button"
                        className="align-left flex text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2 text-center mr-4 mb-2"
                    >
                        Save Job
                    </button>
                    <Link
                        to={"/"}
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-6 py-2 text-center mr-2 mb-2"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
};
export default CustomerForm;
