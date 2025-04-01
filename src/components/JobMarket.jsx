import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2'; // Import thêm Bar từ react-chartjs-2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const JobMarket = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [jobs, setJobs] = useState([]);
    const [visibleJobsIndex, setVisibleJobsIndex] = useState(0);

    // Lấy ngày hiện tại
    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    // Giả lập API để cập nhật danh sách việc làm mới nhất
    useEffect(() => {
        const fetchJobs = () => {
            const newJobs = [
                {
                    title: 'Kỹ Sư Phần Mềm',
                    company: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ ABC',
                    location: 'Đà Nẵng',
                    logo: 'https://via.placeholder.com/50',
                },
                {
                    title: 'Nhân Viên Kinh Doanh Tại TP. Hồ Chí Minh, Hà Nội',
                    company: 'CÔNG TY TNHH ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP',
                    location: 'Hà Nội, Hồ Chí Minh',
                    logo: 'https://via.placeholder.com/50',
                },
                {
                    title: 'Trưởng Nhóm Tuyển Sinh Trung Tâm Tiếng Hàn Đi Làm',
                    company: 'CÔNG TY TNHH ĐÀO TẠO HI KOREAN',
                    location: 'Hà Nội',
                    logo: 'https://via.placeholder.com/50',
                },
                {
                    title: 'Nhân Viên Telesales Tài Chính/ Nhân Viên Tư Vấn',
                    company: 'CÔNG TY CỔ PHẦN CALL CALL',
                    location: 'Hồ Chí Minh',
                    logo: 'https://via.placeholder.com/50',
                },
            ];
            setJobs(newJobs);
        };

        fetchJobs();
    }, []);

    // Tự động thay đổi danh sách hiển thị
    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleJobsIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [jobs]);

    // Lấy 3 công việc hiển thị dựa trên chỉ số hiện tại
    const visibleJobs = [
        jobs[visibleJobsIndex % jobs.length],
        jobs[(visibleJobsIndex + 1) % jobs.length],
        jobs[(visibleJobsIndex + 2) % jobs.length],
    ];

    const stats = [
        { label: 'Việc làm mới 24h gần nhất', value: '4.332' },
        { label: 'Việc làm đang tuyển', value: '58.191' },
        { label: 'Công ty đang tuyển', value: '18.823' },
    ];

    // Dữ liệu cho biểu đồ tăng trưởng
    const growthData = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
        datasets: [
            {
                label: 'Cơ hội việc làm',
                data: [1200, 1500, 1800, 2000, 2200, 2500],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            },
        ],
    };

    const growthOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tăng trưởng cơ hội việc làm',
            },
        },
    };

    // Dữ liệu cho biểu đồ nhu cầu tuyển dụng
    const demandData = {
        labels: ['Kinh doanh', 'Công nghệ thông tin', 'Marketing', 'Nhân sự', 'Kế toán'],
        datasets: [
            {
                label: 'Số lượng tuyển dụng',
                data: [5000, 4500, 3000, 2000, 1500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const demandOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Nhu cầu tuyển dụng theo ngành nghề',
            },
        },
    };

    return (
        <div className="bg-green-900 text-white p-6 rounded-lg">
            {/* Tiêu đề */}
            <h1 className="text-2xl font-bold mb-4">
                Thị trường việc làm hôm nay: <span className="text-green-300">{currentDate}</span>
            </h1>

            {/* Thống kê số liệu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-green-800 p-4 rounded-lg text-center shadow-md"
                    >
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Danh sách việc làm mới nhất */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-lg font-bold mb-4">Việc làm mới nhất</h2>
                    <ul>
                        {visibleJobs.map((job, index) => (
                            job && (
                                <li
                                    key={index}
                                    className="flex items-center bg-green-800 p-4 rounded-lg mb-2 shadow-md"
                                >
                                    <img
                                        src={job.logo}
                                        alt={job.company}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-bold text-sm">{job.title}</h3>
                                        <p className="text-xs">{job.company}</p>
                                        <p className="text-xs text-green-300">{job.location}</p>
                                    </div>
                                </li>
                            )
                        ))}
                    </ul>
                </div>

                {/* Biểu đồ tăng trưởng cơ hội việc làm */}
                <div className="bg-green-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Tăng trưởng cơ hội việc làm</h2>
                    <Line data={growthData} options={growthOptions} />
                </div>
            </div>

            {/* Biểu đồ nhu cầu tuyển dụng */}
            <div className="bg-green-800 p-4 rounded-lg mt-6 shadow-md">
                <h2 className="text-lg font-bold mb-4">Nhu cầu tuyển dụng theo</h2>
                <Bar data={demandData} options={demandOptions} />
            </div>
        </div>
    );
};

export default JobMarket;