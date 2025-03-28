import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import SearchFilters from '../components/SearchFilters';
import JobCards from '../components/JobCards';
import CareerGuides from '../components/CareerGuides';
import JobMarket from '../components/JobMarket'; // Import thành phần JobMarket
import { jobs, guides } from '../data/data';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const jobsPerPage = 9;
    const displayedJobs = jobs.slice(
        currentPage * jobsPerPage,
        currentPage * jobsPerPage + jobsPerPage
    );
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    // Tự động chuyển trang sau 5 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 10000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const industries = [
        { name: 'Bán sỉ - Bán lẻ - Quản lý cửa hàng', jobs: '3,107 việc', icon: '🛒' },
        { name: 'Bán hàng - Kinh doanh', jobs: '7,376 việc', icon: '🏷️' },
        { name: 'Marketing', jobs: '1,888 việc', icon: '📢' },
        { name: 'Khoa học - Kỹ thuật', jobs: '1,769 việc', icon: '🔧' },
        { name: 'Kiểm toán', jobs: '1,150 việc', icon: '🔍' },
        { name: 'Hành chính - Thư ký', jobs: '2,263 việc', icon: '📄' },
        { name: 'Kế toán', jobs: '2,375 việc', icon: '📊' },
        { name: 'Thực tập sinh', jobs: '550 việc', icon: '🎓' },
        { name: 'Công nghệ thông tin', jobs: '4,500 việc', icon: '💻' },
    ];

    return (
        <div className="bg-gray-50">
            <Carousel />

            <div className="relative -mt-16 z-10">
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 mx-auto max-w-[1300px]">
                    <SearchFilters />
                    <div className="mt-4">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Nghề nghiệp nổi bật</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {industries.map((industry, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 cursor-pointer"
                                >
                                    <span className="text-3xl">{industry.icon}</span>
                                    <span className="text-blue-600 font-semibold mt-2">{industry.jobs}</span>
                                    <span className="text-gray-700 text-sm mt-1">{industry.name}</span>
                                </li>
                            ))}
                            <li
                                className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                <span className="text-3xl">📋</span>
                                <span className="text-blue-600 font-semibold mt-2">Tất cả các ngành</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Job Cards Section */}
            <div className="bg-gray-50 py-8">
                <JobCards
                    jobs={displayedJobs}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            {/* Career Guides Section */}
            <CareerGuides guides={guides} />
            {/* Thêm thành phần JobMarket */}
            <div className="mt-8">
                <JobMarket />
            </div>
        </div>
    );
};

export default Home;