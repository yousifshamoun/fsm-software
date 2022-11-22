import React from "react";

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
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="street-address"
                            type="text"
                            placeholder="Street"
                        />
                    </div>

                    <div className="w-full md:w-1/12 px-1 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id=""
                            type="text"
                            placeholder="Unit"
                        />
                    </div>
                    <div className="w-full md:w-1/6 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="Zip"
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                        />
                    </div>
                </div>
                <p className="text-left font-bold text-xl my-4">Job Details</p>
                <div className="flex flex-wrap mb-2">Hel</div>
            </form>
        </div>
    );
};
{
    /* <div className="w-full md:w-1/5 px-2 mb-6 md:mb-0">
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div> */
}
export default CustomerForm;
