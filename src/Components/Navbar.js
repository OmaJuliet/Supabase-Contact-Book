import React from 'react';


const Navbar = () => {
    return (
        <>
            <header className="">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="/" className="flex font-semibold items-center text-gray-900 mb-4 md:mb-0">
                        <span className="text-2xl">Contact Book</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href="/" className="mr-5">Home</a>
                        <a href="/create" className="mr-5">Create</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar