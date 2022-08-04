import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ImGift } from "react-icons/im";
import { BsBellFill, BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [search, setPopup] = useState(false);
    const [logout, setLogOut] = useState(false);
    return (
        <>
            <nav className="w-full bg-black shadow">
                <div className="grid grid-cols-8 gap-10 mx-auto md:items-center">
                    <div className="text-center py-3 md:py-5 md:block">
                        <Link to={`/products`}>
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </Link>

                        {/* Toggle shrink */}

                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setPopup(!search)}
                            >
                                {
                                    <AiOutlineSearch />
                                    //   navbar ? (
                                    //   <svg
                                    //     xmlns="http://www.w3.org/2000/svg"
                                    //     className="w-6 h-6"
                                    //     viewBox="0 0 20 20"
                                    //     fill="currentColor"
                                    //   >
                                    //     <path
                                    //       fillRule="evenodd"
                                    //       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    //       clipRule="evenodd"
                                    //     />
                                    //   </svg>
                                    // ) : (
                                    //   <svg
                                    //     xmlns="http://www.w3.org/2000/svg"
                                    //     className="w-6 h-6"
                                    //     fill="none"
                                    //     viewBox="0 0 24 24"
                                    //     stroke="currentColor"
                                    //     strokeWidth={2}
                                    //   >
                                    //     <path
                                    //       strokeLinecap="round"
                                    //       strokeLinejoin="round"
                                    //       d="M4 6h16M4 12h16M4 18h16"
                                    //     />
                                    //   </svg>
                                    //   )
                                }
                            </button>
                            {/* <button
                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                onClick={() => setPopup(!search)}
              ></button> */}
                        </div>
                    </div>
                    <div
                        className={`flex flex-row col-start-2 col-end-7 pb-3 mt-8 bg-black md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >

                        {/* <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">About US</a>
                            </li>
                            <li className="text-white hover:text-blue-600">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                        </ul> */}
                    </div>
                    <div
                        className={`grid grid-flow-col text-end`}
                    >
                        <div>
                            <BsCart2 color="white" size={"2rem"} className="text-center" />
                        </div>
                        {/* <div>
                            <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
                                <a href="javascript:void(0)">Login</a>
                            </button>
                        </div>
                        <div>
                            <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
                                <a href="javascript:void(0)">Register</a>
                            </button>
                        </div> */}
                    </div>
                </div>
                <div
                    className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
                >
                    <form className={`max-w-sm px-4 ${search ? "block" : "hidden"}`}>
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                            />
                        </div>
                    </form>
                </div>

                <div className={`${logout ? "block" : "hidden"} white bg-white`}>
                    LOGOUT
                </div>
                {/* <ListMovies /> */}
            </nav>
        </>
    );
};

export default Navbar;
