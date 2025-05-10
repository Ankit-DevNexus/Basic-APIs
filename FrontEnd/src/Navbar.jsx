import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" style={{ textDecoration: 'none' }} className="text-xl font-bold text-white no-underline">Navbar</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        <Link to="/" style={{ textDecoration: 'none' }} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/api/contact-us" style={{ textDecoration: 'none' }} className="text-white no-underline hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                            <Link to="/api/Sign-in" style={{ textDecoration: 'none' }} className="text-white no-underline hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
                            <Link to="/api/sign-up" style={{ textDecoration: 'none' }} className="text-white no-underline hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
