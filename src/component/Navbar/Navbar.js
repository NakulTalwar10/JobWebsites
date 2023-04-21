import React, { useState } from 'react'

// import CSS
import './Navbar.css'

import logo from '../../img/logo.png'

import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    return (
        <div className="bg-gray-900 text-gray-100">
            <nav className="container mx-auto flex items-center justify-between flex-wrap p-5">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-10 mr-2" />
                    <span className="font-semibold text-xl tracking-tight">JobFinder</span>
                </div>
                <div className="block md:hidden">
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                    >
                        {toggle ? (
                            <AiOutlineClose className="text-xl" />
                        ) : (
                            <AiOutlineMenu className="text-xl" />
                        )}
                    </button>
                </div>
                <div
                    className={`${toggle ? 'block' : 'hidden'
                        } w-full md:block md:w-auto md:ml-auto md:mr-0`}
                >
                    <ul className="text-md md:flex-grow md:flex md:items-center md:w-auto">
                        <li className="block mt-4 md:inline-block md:mt-0 md:ml-6">
                            <button className="text-gray-200 hover:text-white hover:underline">
                                About Us
                            </button>
                        </li>
                        <li className="block mt-4 md:inline-block md:mt-0 md:ml-6">
                            <button className="text-gray-200 hover:text-white hover:underline">
                                Job Seeker
                            </button>
                        </li>
                        <li className="block mt-4 md:inline-block md:mt-0 md:ml-6">
                            <button className="text-gray-200 hover:text-white hover:underline">
                                Employer
                            </button>
                        </li>
                        <li className="block mt-4 md:inline-block md:mt-0 md:ml-6">
                            <Link to={'/Signup'}>
                                <button className="text-gray-900 bg-gray-100 rounded-full px-6 py-2 hover:bg-[#b43636] hover:text-[white]">
                                    Sign Up
                                </button>
                            </Link>
                        </li>
                        <li className="block mt-4 md:inline-block md:mt-0 md:ml-6">
                            <Link to={'/Login'}>
                                <button className="text-gray-900 bg-gray-100 rounded-full px-6 py-2 hover:bg-[#36b441] hover:text-[white]">
                                    Log In
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar