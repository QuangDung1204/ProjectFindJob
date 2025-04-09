import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobs } from '../data/data';

const JobDetail = () => {
    const { id } = useParams(); // Lấy ID công việc từ URL
    const navigate = useNavigate();

    // Tìm công việc dựa trên ID
    const job = jobs.find((job) => job.id === parseInt(id));

    if (!job) {
        return (
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Công việc không tồn tại</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Quay lại
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            {/* Thông tin công việc */}
            <div
                className="w-[1285px] h-[280px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-4 gap-4 items-center"
                style={{ border: '1px solid #e5e7eb' }}
            >
                {/* Logo và thông tin công ty */}
                <div className="flex items-center col-span-1">
                    <img
                        src={job.logo}
                        alt={job.company}
                        className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <h1 className="text-xl font-bold text-gray-800">{job.title}</h1>
                    </div>
                </div>

                {/* Mức lương */}
                <div className="flex items-center col-span-1 text-gray-600">
                    <span className="font-bold text-blue-600 mr-2">💰</span>
                    <span>
                        <strong>Mức lương:</strong> {job.salary}
                    </span>
                </div>

                {/* Hạn nộp hồ sơ */}
                <div className="flex items-center col-span-1 text-gray-600">
                    <span className="font-bold text-blue-600 mr-2">📅</span>
                    <span>
                        <strong>Hạn nộp hồ sơ:</strong> {job.deadline}
                    </span>
                </div>

                {/* Khu vực tuyển */}
                <div className="flex items-center col-span-1 text-gray-600">
                    <span className="font-bold text-blue-600 mr-2">📍</span>
                    <span>
                        <strong>Khu vực tuyển:</strong> {job.location}
                    </span>
                </div>

                {/* Ngày cập nhật */}
                <div className="flex items-center col-span-1 text-gray-600">
                    <span className="font-bold text-blue-600 mr-2">📆</span>
                    <span>
                        <strong>Ngày cập nhật:</strong> {job.updatedAt}
                    </span>
                </div>

                {/* Cơ hội hấp dẫn */}
                <div className="col-span-4 bg-green-100 text-green-700 p-4 rounded-lg text-center">
                    <strong>Cơ hội hấp dẫn!</strong> Công việc đang rất được quan tâm! Ứng tuyển ngay để không lỡ cơ hội!
                </div>

                {/* Nút hành động */}
                <div className="col-span-4 flex justify-center space-x-4">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 hover:scale-105 transition-transform cursor-pointer">
                        Nộp hồ sơ
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 hover:scale-105 transition-transform cursor-pointer">
                        <span className="text-purple-600">❤️</span> Lưu công việc
                    </button>
                </div>
            </div>

            {/* Chi tiết tuyển dụng */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Chi tiết tuyển dụng</h2>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Thông tin chung */}
                        <div>
                            <h3 className="text-xl font-bold mb-2">Thông tin chung</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Ngày đăng:</strong> {job.postedDate}</li>
                                <li><strong>Số lượng tuyển:</strong> {job.quantity}</li>
                                <li><strong>Yêu cầu kinh nghiệm:</strong> {job.experience}</li>
                                <li><strong>Ngành nghề:</strong> {job.industry}</li>
                                <li><strong>Cấp bậc:</strong> {job.level}</li>
                                <li><strong>Hình thức làm việc:</strong> {job.workType}</li>
                            </ul>
                        </div>

                        {/* Địa điểm làm việc */}
                        <div>
                            <h3 className="text-xl font-bold mb-2">Địa điểm làm việc</h3>
                            <p className="text-gray-700">{job.workLocation}</p>
                        </div>
                    </div>

                    {/* Mô tả công việc */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Mô tả công việc</h3>
                        <p className="text-gray-700">{job.description}</p>
                    </div>

                    {/* Yêu cầu công việc */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Yêu cầu công việc</h3>
                        <p className="text-gray-700">{job.requirements}</p>
                    </div>

                    {/* Quyền lợi */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Quyền lợi</h3>
                        <p className="text-gray-700">{job.benefits}</p>
                    </div>

                    {/* Kỹ năng cần thiết */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Kỹ năng cần thiết</h3>
                        <p className="text-gray-700">{job.skills}</p>
                    </div>
                </div>
            </div>

            {/* Thông tin công ty */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Thông tin công ty</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{job.company}</h3>
                    <p className="text-gray-700"><strong>Địa chỉ:</strong> {job.companyAddress}</p>
                    <p className="text-gray-700"><strong>Quy mô:</strong> {job.companySize}</p>
                    <p className="text-gray-700"><strong>Lĩnh vực hoạt động:</strong> {job.companyField}</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;