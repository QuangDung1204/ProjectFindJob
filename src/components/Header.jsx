import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
    const { user, logout } = useAuth();
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

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
                            <Link to="/apply" className="text-gray-700 hover:text-blue-600 font-medium">Ứng tuyển</Link>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <span className="text-gray-700 font-medium">Xin chào, {user.fullName}</span>
                                <button
                                    onClick={logout}
                                    className="text-gray-700 hover:text-red-600 font-medium cursor-pointer"
                                >
                                    Đăng xuất
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => setLoginModalOpen(true)}
                                className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Đăng nhập
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setLoginModalOpen(false)}
            />
        </header>
    );
};

export default Header;