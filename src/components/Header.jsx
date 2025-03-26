import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiUser, FiSearch } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-2xl font-bold text-blue-600 mr-10">Việc Làm 24H</h1>
                        </Link>
                        <nav className="hidden md:flex space-x-6">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Trang chủ</Link>
                            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Việc làm</Link>
                            <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium">Công ty</Link>
                            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/post-job" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-200">
                            Đăng tuyển
                        </Link>
                        <button className="relative p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100">
                            <FiBell className="text-xl" />
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <Link to="/account" className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <FiUser className="text-blue-600" />
                            </div>
                            <span className="hidden md:inline text-gray-700 font-medium">Tài khoản</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;