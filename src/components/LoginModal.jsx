import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FacebookLogin } from 'react-facebook-login-lite';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [gender, setGender] = useState('FEMALE');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
        }
    }, []);

    const handleGoogleLoginSuccess = async (response) => {
        alert('Login thành công');
        const credential = response.credential;

        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/register/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idToken: credential,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                const newAccessToken = data.accessToken;
                const newRefreshToken = data.refreshToken;
                setAccessToken(newAccessToken);
                setRefreshToken(newRefreshToken);
                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                onClose();
            } else {
                console.error("Lỗi gửi token lên server:", data.message);
            }
        } catch (err) {
            console.error("Lỗi gửi token lên server:", err);
        }
    };

    const handleGoogleLoginError = (error) => {
        console.error('Lỗi đăng nhập Google:', error);
    };

    const handleRefreshToken = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/refresh-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                const newAccessToken = data.accessToken;
                setAccessToken(newAccessToken);
                localStorage.setItem('accessToken', newAccessToken);
            } else {
                console.error("Lỗi refresh token:", data.message);
            }
        } catch (err) {
            console.error("Lỗi gửi yêu cầu refresh token:", err);
        }
    };

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

        const age = new Date().getFullYear() - birthYear;

        const userData = {
            name: fullName,
            email: email,
            password: password,
            age: age,
            gender: gender,
            address: address,
        };

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            if (response.ok) {
                const newAccessToken = result.accessToken;
                const newRefreshToken = result.refreshToken;
                setAccessToken(newAccessToken);
                setRefreshToken(newRefreshToken);
                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                alert('Đăng ký thành công!');
                onClose();
            } else {
                alert(`Lỗi: ${result.message}`);
            }
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
            alert('Đã xảy ra lỗi. Vui lòng thử lại.');
        }
    };

    const handleUserLogin = async (e) => {
        e.preventDefault();
        setLoginError('');

        if (!loginEmail || !loginPassword) {
            setLoginError('Vui lòng nhập đầy đủ email và mật khẩu');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                }),
            });

            const result = await response.json();

            if (response.ok && result.message === "CALL API SUCCESS") {
                // Lưu thông tin người dùng vào localStorage
                const userData = result.data.user;
                const accessToken = result.access_token;

                // Giả định là refresh_token cũng được trả về trong API - điều chỉnh tên thuộc tính nếu cần
                const refreshToken = result.refresh_token;

                // Cập nhật state
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);

                // Lưu token vào localStorage
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                // Lưu thông tin người dùng
                localStorage.setItem('userId', userData.id);
                localStorage.setItem('userEmail', userData.email);
                localStorage.setItem('userName', userData.name);

                // Nếu có thông tin role, lưu thêm
                if (userData.role) {
                    localStorage.setItem('userRole', userData.role.name);
                    localStorage.setItem('userPermissions', JSON.stringify(userData.role.permissions || []));
                }

                alert('Đăng nhập thành công!');
                onClose();
            } else {
                // Xử lý các trường hợp lỗi
                if (result.statusCode === 400 && result.message === "Bad credentials") {
                    setLoginError('Tài khoản hoặc mật khẩu không chính xác');
                } else if (result.error) {
                    setLoginError(`Lỗi: ${result.message || 'Đã xảy ra lỗi'}`);
                } else {
                    setLoginError('Đăng nhập thất bại. Vui lòng thử lại sau.');
                }
            }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
            setLoginError('Đã xảy ra lỗi kết nối. Vui lòng thử lại sau.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUserLogin = async (e) => {
        e.preventDefault();
        setLoginError('');

        if (!loginEmail || !loginPassword) {
            setLoginError('Vui lòng nhập đầy đủ email và mật khẩu');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                }),
            });

            const result = await response.json();

            if (response.ok && result.message === "CALL API SUCCESS") {
                // Lưu thông tin người dùng vào localStorage
                const userData = result.data.user;
                const accessToken = result.access_token;

                // Giả định là refresh_token cũng được trả về trong API - điều chỉnh tên thuộc tính nếu cần
                const refreshToken = result.refresh_token;

                // Cập nhật state
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);

                // Lưu token vào localStorage
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                // Lưu thông tin người dùng
                localStorage.setItem('userId', userData.id);
                localStorage.setItem('userEmail', userData.email);
                localStorage.setItem('userName', userData.name);

                // Nếu có thông tin role, lưu thêm
                if (userData.role) {
                    localStorage.setItem('userRole', userData.role.name);
                    localStorage.setItem('userPermissions', JSON.stringify(userData.role.permissions || []));
                }

                alert('Đăng nhập thành công!');
                onClose();
            } else {
                // Xử lý các trường hợp lỗi
                if (result.statusCode === 400 && result.message === "Bad credentials") {
                    setLoginError('Tài khoản hoặc mật khẩu không chính xác');
                } else if (result.error) {
                    setLoginError(`Lỗi: ${result.message || 'Đã xảy ra lỗi'}`);
                } else {
                    setLoginError('Đăng nhập thất bại. Vui lòng thử lại sau.');
                }
            }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
            setLoginError('Đã xảy ra lỗi kết nối. Vui lòng thử lại sau.');
        } finally {
            setIsLoading(false);
        }
    };

    // Hàm xử lý refresh token khi token hết hạn
    const handleRefreshToken = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/refresh-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                }),
            });

            const result = await response.json();

            if (response.ok && result.message === "CALL API SUCCESS") {
                // Lấy access token mới từ kết quả
                const newAccessToken = result.access_token;

                // Cập nhật state và localStorage
                setAccessToken(newAccessToken);
                localStorage.setItem('accessToken', newAccessToken);

                // Nếu có refresh token mới, cập nhật luôn
                if (result.refresh_token) {
                    const newRefreshToken = result.refresh_token;
                    setRefreshToken(newRefreshToken);
                    localStorage.setItem('refreshToken', newRefreshToken);
                }

                return true;
            } else {
                console.error("Lỗi refresh token:", result.message);

                // Nếu refresh token hết hạn hoặc không hợp lệ, đăng xuất người dùng
                if (result.statusCode === 401) {
                    handleLogout();
                }

                return false; // Thất bại
            }
        } catch (err) {
            console.error("Lỗi gửi yêu cầu refresh token:", err);
            return false; // Thất bại
        }
    };

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userPermissions');

        // Reset state
        setAccessToken('');
        setRefreshToken('');
        window.location.href = '/login';
    };

    // Hàm tạo interceptor cho axios (nếu sử dụng axios)
    const setupAxiosInterceptors = () => {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('accessToken');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    // Thử refresh token
                    const success = await handleRefreshToken();
                    if (success) {
                        // Cập nhật token mới vào header
                        originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                        // Thử lại request với token mới
                        return axios(originalRequest);
                    } else {
                        // Đăng xuất nếu không refresh được
                        handleLogout();
                    }
                }
                return Promise.reject(error);
            }
        );
    };

    // Hàm kiểm tra độ tuổi
    const isValidAge = (birthYear) => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age >= 16; // Kiểm tra người dùng đủ 16 tuổi
    };

    const handleVerifyCode = () => {
        if (verificationCode === generatedCode) {
            alert('Xác thực thành công!');
            // Thêm logic xử lý sau khi xác thực thành công
        } else {
            alert('Mã xác thực không đúng. Vui lòng thử lại.');
        }
    };

    const handleBack = () => {
        setStep(step - 1); // Quay lại bước trước
    };

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setLoginError('');
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
                        {step === 1 && !showLoginForm && (
                            <>
                                <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
                                <GoogleOAuthProvider clientId="375619880981-hla5js4didg8108u2j814e89sonan5jq.apps.googleusercontent.com">
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
                                        {isLoading ? 'Đang tải...' : 'Tiếp tục đăng ký'}
                                    </button>

                                    <div className="mt-4 text-center">
                                        <p className="text-sm text-gray-600">
                                            Đã có tài khoản?{' '}
                                            <button
                                                onClick={toggleLoginForm}
                                                className="text-purple-600 hover:underline font-medium"
                                            >
                                                Đăng nhập ngay
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {showLoginForm && (
                            <>
                                <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
                                <form onSubmit={handleUserLogin} className="flex flex-col space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Email của bạn"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        required
                                    />

                                    {loginError && (
                                        <div className="text-red-500 text-sm">{loginError}</div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                                    </button>

                                    <div className="text-center">
                                        <a href="#" className="text-sm text-purple-600 hover:underline">
                                            Quên mật khẩu?
                                        </a>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="text-sm text-gray-600">
                                            Chưa có tài khoản?{' '}
                                            <button
                                                type="button"
                                                onClick={toggleLoginForm}
                                                className="text-purple-600 hover:underline font-medium"
                                            >
                                                Đăng ký ngay
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký tài khoản</h2>
                                <div className="flex flex-col space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <input
                                        type="tel"
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
                                        placeholder="Năm sinh (VD: 1990)"
                                        value={birthYear}
                                        onChange={(e) => setBirthYear(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Giới tính</label>
                                        <div className="flex space-x-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="FEMALE"
                                                    checked={gender === 'FEMALE'}
                                                    onChange={() => setGender('FEMALE')}
                                                    className="mr-2"
                                                />
                                                Nữ
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="MALE"
                                                    checked={gender === 'MALE'}
                                                    onChange={() => setGender('MALE')}
                                                    className="mr-2"
                                                />
                                                Nam
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="OTHER"
                                                    checked={gender === 'OTHER'}
                                                    onChange={() => setGender('OTHER')}
                                                    className="mr-2"
                                                />
                                                Khác
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3 mt-6">
                                        <button
                                            onClick={handleBack}
                                            className="flex-1 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400"
                                        >
                                            Quay lại
                                        </button>
                                        <button
                                            onClick={handleCompleteRegistration}
                                            className="flex-1 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                        >
                                            Hoàn thành đăng ký
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="hidden md:block md:w-1/2 bg-purple-100 p-6 rounded-r-lg">
                        <div className="h-full flex flex-col justify-center items-center">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-32 h-32 mb-6"
                            />
                            <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
                                Việc Làm 24h - Nền tảng tìm việc hàng đầu
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Tiếp cận hàng ngàn công việc hấp dẫn
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Kết nối trực tiếp với nhà tuyển dụng
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Tìm kiếm việc làm phù hợp với kỹ năng
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Nhận thông báo việc làm mới mỗi ngày
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;