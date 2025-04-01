import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    const [isRegister, setIsRegister] = useState(false); // Trạng thái chuyển đổi giữa Đăng nhập và Đăng ký
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Chỉ dùng cho Đăng ký
    const [fullName, setFullName] = useState(''); // Họ và tên
    const [agreeTerms, setAgreeTerms] = useState(false); // Đồng ý với điều khoản
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth(); // Lấy hàm login từ AuthContext
    // const navigate = useNavigate(); // Hook để chuyển hướng

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Vui lòng nhập email và mật khẩu!');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            console.log('Dữ liệu gửi đi:', { email, password });

            // Giả lập API
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Chờ 1 giây
            if (email === 'test@gmail.com' && password === '123456') {
                const mockUser = { id: 1, email, fullName: 'Nguyen Van A' };
                const mockToken = 'fake-jwt-token';
                console.log('Đăng nhập thành công:', mockUser);

                login(mockUser);
                localStorage.setItem('token', mockToken); // Lưu token vào localStorage
                onClose();
            } else {
                throw new Error('Email hoặc mật khẩu không đúng!');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword || !fullName) {
            setError('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Mật khẩu xác nhận không khớp!');
            return;
        }

        if (!agreeTerms) {
            setError('Bạn cần đồng ý với Điều khoản dịch vụ và Chính sách bảo mật!');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            console.log('Dữ liệu gửi đi:', { email, password, fullName });

            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (email === 'newuser@example.com') {
                const mockUser = { id: 2, email, fullName };
                const mockToken = 'fake-jwt-token';
                console.log('Đăng ký thành công:', mockUser);

                login(mockUser);
                localStorage.setItem('token', mockToken);
                onClose();
            } else {
                throw new Error('Email đã tồn tại!');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm z-40"></div>

            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                    <h2 className="text-2xl font-bold mb-4">
                        {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                    </h2>
                    <div className="flex justify-center space-x-4 mb-4">
                        <button
                            onClick={() => setIsRegister(false)}
                            className={`px-4 py-2 rounded-lg ${!isRegister ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Đăng nhập
                        </button>
                        <button
                            onClick={() => setIsRegister(true)}
                            className={`px-4 py-2 rounded-lg ${isRegister ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        {isRegister && (
                            <input
                                type="text"
                                placeholder="Họ và tên"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Địa chỉ Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                        {isRegister && (
                            <input
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        )}
                        {isRegister && (
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="mr-2"
                                />
                                <label className="text-sm text-gray-600">
                                    Tôi đã đọc và đồng ý với{' '}
                                    <a href="#" className="text-blue-600 hover:underline">Điều khoản dịch vụ</a> và{' '}
                                    <a href="#" className="text-blue-600 hover:underline">Chính sách bảo mật</a> của Việc Làm 24h.
                                </label>
                            </div>
                        )}
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <button
                            onClick={isRegister ? handleRegister : handleLogin}
                            className={`w-full py-2 rounded-lg ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                                } text-white`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Đang xử lý...' : isRegister ? 'Đăng ký' : 'Đăng nhập'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;