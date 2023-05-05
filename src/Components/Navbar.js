import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    
    return (
        <>
            {/* <header className="">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="/" className="flex font-semibold items-center text-gray-900 mb-4 md:mb-0">
                        <span className="text-2xl">Contact Book</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href="/" className="mr-5">Home</a>
                        <a href="/create" className="mr-5">Create</a>
                    </nav>
                </div>
            </header> */}



            <nav className="w-full shadow">
                <div className="container mx-auto justify-between px-4 mb-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4 lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <a href="/" className="text-2xl font-semibold">Contact App</a>

                            <div className="md:hidden">
                                <button
                                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <FaTimes />
                                    ) : (
                                        <FaBars />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex lg:space-x-6 md:space-x-2 md:space-y-0">
                                <li><a href="/" className="text-black text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                    Home
                                </a></li>
                                <li><a href="/create" className="text-black text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                    Create
                                </a></li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:hidden md:inline-block mt-6 mb-2">
                                <a href="/login" className="btn">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <a href="/login" className="btn"> 
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar