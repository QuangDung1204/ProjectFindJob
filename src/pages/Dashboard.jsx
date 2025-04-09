import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const UserInfo = ({ user }) => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
        <p className="flex items-center text-gray-700 mb-2">
            <FaEnvelope className="mr-2 text-blue-600" />
            <strong>Email:</strong> {user.email}
        </p>
        <p className="flex items-center text-gray-700 mb-2">
            <FaPhone className="mr-2 text-blue-600" />
            <strong>Số điện thoại:</strong> {user.phone || 'Chưa cập nhật'}
        </p>
        <p className="flex items-center text-gray-700">
            <FaCalendarAlt className="mr-2 text-blue-600" />
            <strong>Ngày tham gia:</strong> {user.joinDate || 'Không xác định'}
        </p>
    </div>
);

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-blue-600">Chào mừng, {user.fullName}!</h1>
                <p className="text-gray-700 mb-6">Đây là trang Dashboard của bạn. Quản lý thông tin cá nhân và các hoạt động tại đây.</p>
                <UserInfo user={user} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-lg font-bold text-blue-600 mb-2">Công việc đã lưu</h3>
                        <p className="text-gray-700">Xem danh sách các công việc bạn đã lưu để ứng tuyển sau.</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-lg font-bold text-green-600 mb-2">Lịch sử ứng tuyển</h3>
                        <p className="text-gray-700">Theo dõi trạng thái các công việc bạn đã ứng tuyển.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-lg font-bold text-yellow-600 mb-2">Cài đặt tài khoản</h3>
                        <p className="text-gray-700">Quản lý thông tin tài khoản và mật khẩu của bạn.</p>
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={() => navigate('/profile')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform cursor-pointer"
                    >
                        Cập nhật thông tin
                    </button>
                    <button
                        onClick={logout}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-transform cursor-pointer"
                    >
                        Đăng xuất
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;