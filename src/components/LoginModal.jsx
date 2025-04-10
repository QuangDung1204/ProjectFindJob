import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FacebookLogin } from 'react-facebook-login-lite';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [step, setStep] = useState(1); // Bước 1: Đăng nhập, Bước 2: Hoàn tất đăng ký
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [birthYear, setBirthYear] = useState(''); // Thay đổi từ ngày sinh sang năm sinh
    const [gender, setGender] = useState('FEMALE'); // Mặc định là FEMALE
    const [address, setAddress] = useState(''); // Địa chỉ
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = async (response) => {
        console.log('Google Login Success:', response);

        try {
            const apiResponse = await fetch('/api/v1/auth/register/google', { // Sử dụng proxy
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (apiResponse.ok) {
                const data = await apiResponse.json();
                console.log('Google Login API Success:', data);
                alert('Đăng nhập Google thành công!');

                // Chuyển hướng đến Dashboard và truyền dữ liệu người dùng
                navigate('/dashboard', { state: { userData: data } });
            } else {
                console.error('Google Login API Failed:', apiResponse.statusText);
                alert('Đăng nhập Google thất bại!');
            }
        } catch (error) {
            console.error('Lỗi khi gọi API Google Login:', error);
            alert('Đã xảy ra lỗi khi kết nối với server.');
        }
    };

    const handleGoogleLoginError = () => {
        console.error('Google Login Failed');
        alert('Đăng nhập Google thất bại!');
    };

    if (!isOpen) return null;

    const handleEmailLogin = () => {
        if (!agreeTerms) {
            alert('Bạn cần đồng ý với các điều khoản để tiếp tục.');
            return;
        }
        if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert('Vui lòng nhập địa chỉ Gmail hợp lệ.');
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
        }, 1000);
    };

    const handleCompleteRegistration = async () => {
        if (!fullName || !phoneNumber || !password || !birthYear || !email || !address) {
            alert('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        if (!isValidAge(birthYear)) {
            alert('Bạn phải đủ 16 tuổi để tiếp tục.');
            return;
        }

        // Tính tuổi từ năm sinh
        const age = new Date().getFullYear() - birthYear;

        // Dữ liệu gửi đến backend
        const userData = {
            name: fullName,
            email: email,
            password: password,
            age: age,
            gender: gender,
            address: address,
        };

        try {
            const response = await fetch('/api/v1/auth/register', { // Sử dụng proxy
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Đăng ký thành công!');

                // Chuyển hướng đến Dashboard và truyền dữ liệu người dùng
                navigate('/dashboard', { state: { userData: result } });
            } else {
                alert(`Lỗi: ${result.message}`);
            }
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
            alert('Đã xảy ra lỗi. Vui lòng thử lại.');
        }
    };

    // Hàm kiểm tra độ tuổi
    const isValidAge = (birthYear) => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age >= 16; // Kiểm tra người dùng đủ 16 tuổi
    };

    const handleBack = () => {
        setStep(step - 1); // Quay lại bước trước
    };

    return (
        <>
            <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm z-40"></div>

            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative flex">
                    <div className="w-full md:w-1/2 p-6">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        {step === 1 && (
                            <>
                                <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
                                <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                                    <div className="flex flex-col space-y-4">
                                        <GoogleLogin
                                            onSuccess={handleGoogleLoginSuccess}
                                            onError={handleGoogleLoginError}
                                            useOneTap
                                        />
                                        <FacebookLogin
                                            appId="YOUR_FACEBOOK_APP_ID"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            onSuccess={(response) => console.log('Facebook Login Success:', response)}
                                            onFailure={(error) => console.error('Facebook Login Failed:', error)}
                                            buttonText="Đăng nhập bằng Facebook"
                                        />
                                    </div>
                                </GoogleOAuthProvider>

                                <div className="mt-6">
                                    <p className="text-center text-gray-500 mb-4">Hoặc tiếp tục với Gmail</p>
                                    <input
                                        type="email"
                                        placeholder="Nhập địa chỉ Gmail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <div className="flex items-start mt-4">
                                        <input
                                            type="checkbox"
                                            checked={agreeTerms}
                                            onChange={(e) => setAgreeTerms(e.target.checked)}
                                            className="mt-1 mr-2"
                                        />
                                        <p className="text-sm text-gray-600">
                                            Bằng việc nhấn nút tiếp tục, tôi đồng ý chia sẻ thông tin cá nhân của mình
                                            với nhà tuyển dụng theo các{' '}
                                            <a href="#" className="text-blue-600 hover:underline">
                                                Điều khoản sử dụng
                                            </a>
                                            ,{' '}
                                            <a href="#" className="text-blue-600 hover:underline">
                                                Chính sách bảo mật
                                            </a>{' '}
                                            và{' '}
                                            <a href="#" className="text-blue-600 hover:underline">
                                                Chính sách dữ liệu cá nhân
                                            </a>{' '}
                                            của Việc Làm 24h.
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleEmailLogin}
                                        className="w-full mt-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                    >
                                        {isLoading ? 'Đang tải...' : 'Tiếp tục'}
                                    </button>
                                </div>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <button
                                    onClick={handleBack}
                                    className="absolute top-2 left-2 text-gray-500 hover:text-gray-700"
                                >
                                    ← Quay lại
                                </button>
                                <h2 className="text-2xl font-bold mb-2 text-center">
                                    Hoàn tất việc đăng ký với email
                                </h2>
                                <p className="text-center text-purple-600 font-bold mb-6">
                                    {email}
                                </p>
                                <p className="text-center text-gray-500 mb-6">
                                    để trải nghiệm các tính năng của Vieclam24h.vn
                                </p>
                                <div className="flex flex-col space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Năm sinh (VD: 2005)"
                                        value={birthYear}
                                        onChange={(e) => setBirthYear(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <select
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="FEMALE">Nữ</option>
                                        <option value="MALE">Nam</option>
                                        <option value="OTHER">Khác</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <button
                                        onClick={handleCompleteRegistration}
                                        className="w-full mt-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                    >
                                        Tiếp tục
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;