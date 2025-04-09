import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-6 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    {/* Logo và thông tin công ty */}
                    <div className="flex-1 min-w-[250px]">
                        <h2 className="text-xl font-bold mb-2">Vaciam3dh.vn</h2>
                        <p className="text-sm mb-1">Công Ty Cổ Phần Việc Lâm 24h</p>
                        <p className="text-xs text-gray-600">© 2025 - Bản quyền thuộc về Standart Group</p>
                    </div>

                    {/* Các liên kết thông tin */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="font-bold mb-2">Thông tin</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                            <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">
                                Cẩm nang nghề nghiệp
                            </a>
                            <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">
                                Báo giá dịch vụ
                            </a>
                            <a href="#" className="hover:text-blue-600">Điều khoản sử dụng</a>
                            <a href="#" className="hover:text-blue-600">Quy định bảo mật</a>
                            <a href="#" className="hover:text-blue-600">Sơ đồ website</a>
                            <a href="#" className="hover:text-blue-600">Chính sách dữ liệu</a>
                        </div>
                    </div>

                    {/* Liên hệ */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="font-bold mb-2">Liên hệ</h3>
                        <div className="text-sm space-y-1">
                            <p>0865274818</p>
                            <p>2251120409@ut.edu.vn</p>
                        </div>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <div className="flex space-x-4 mb-3">
                            <a href="#" className="text-xl text-blue-600"><FaFacebook /></a>
                            <a href="#" className="text-xl text-blue-600"><FaLinkedin /></a>
                            <a href="#" className="text-xl text-red-600"><FaYoutube /></a>
                            <a href="#" className="text-xl text-pink-600"><FaInstagram /></a>
                        </div>
                        <div className="flex space-x-2">
                            <a href="#" className="block">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    className="h-8"
                                />
                            </a>
                            <a href="#" className="block">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="App Store"
                                    className="h-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;