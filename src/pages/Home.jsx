import React, { useState, useEffect } from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { FaFire, FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';


const Home = () => {
    const images = [
        'https://static.careerlink.vn/web/images/og-image-default.jpg',
        'https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2025%2F03%2F13%2Fbanner-website-PC_174185248666.jpg&w=1920&q=75',
        'https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2025%2F03%2F26%2FAnPhatLand-PC%2520(2)%2520(1)_174296173512.jpg&w=1920&q=75',
        'https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2025%2F03%2F26%2F2880x432-325_Wincommerce%2520(2)%2520(1)%2520(1)%2520(1)_174295867951.jpg&w=1920&q=75',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Tự động chuyển ảnh sau 3 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const categories = [
        'Tất cả',
        'Bán hàng - Kinh doanh',
        'Hành chính - Thư ký',
        'Chăm sóc khách hàng',
        'Bán sĩ - Bán lẻ - Quản lý cửa hàng',
        'Kế toán',
        'Nhân sự',
        'Khoa học - Kỹ thuật',
        'Thu mua - Kho Vận - Chuỗi cung ứng',
    ];

    const jobs = [
        {
            title: 'Chuyên Viên Phòng Kế Toán Tài Chính',
            company: 'Công Ty TNHH Ô Tô Và Thiết Bị Chuyên Dụng Sabaco',
            salary: '20 - 30 triệu',
            location: 'TP.HCM',
            daysLeft: 'Còn 29 ngày',
        },
        {
            title: 'Nhân Viên Hành Chính Nhân Sự - Kiểm Soát',
            company: 'Hộ Kinh Doanh Nguyên Liệu Pha Chế Quang Nguyễn',
            salary: '8 - 12 triệu',
            location: 'TP.HCM',
            daysLeft: 'Còn 23 ngày',
        },
        {
            title: 'Giám Sát Viên',
            company: 'Công Ty Cổ Phần Giám Định Hải Long',
            salary: '8 - 15 triệu',
            location: 'TP.HCM, Bà Rịa - Vũng Tàu, Đồng Nai',
            daysLeft: 'Còn 22 ngày',
            hot: true,
        },
        {
            title: 'Nhân Viên Bán Hàng',
            company: 'Cửa Hàng Nội Thất Thờ Cúng Bửu Liên',
            salary: '10 - 20 triệu',
            location: 'TP.HCM',
            daysLeft: 'Còn 7 ngày',
        },
        {
            title: 'Nhân Viên Lưu Trữ Hồ Sơ',
            company: 'Công Ty TNHH Sản Xuất Dịch Vụ Khắc Dấu',
            salary: '5 - 7 triệu',
            location: 'Cần Thơ',
            daysLeft: 'Còn 23 ngày',
        },
        {
            title: 'Cán Bộ Hồ Sơ Thanh Quyết Toán',
            company: 'Công Ty CP Hóa Chất Xây Dựng Bách Khoa',
            salary: '15 - 17 triệu',
            location: 'Đồng Nai',
            daysLeft: 'Còn 26 ngày',
        },
        {
            title: 'Nhân Viên Kỹ Thuật',
            company: 'Công Ty TNHH Kỹ Thuật ABC',
            salary: '12 - 15 triệu',
            location: 'Hà Nội',
            daysLeft: 'Còn 10 ngày',
        },
        {
            title: 'Nhân Viên IT',
            company: 'Công Ty TNHH Công Nghệ XYZ',
            salary: '15 - 20 triệu',
            location: 'TP.HCM',
            daysLeft: 'Còn 5 ngày',
        },
        {
            title: 'Nhân Viên Marketing',
            company: 'Công Ty CP Truyền Thông ABC',
            salary: '10 - 12 triệu',
            location: 'Đà Nẵng',
            daysLeft: 'Còn 15 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
        {
            title: 'Nhân Viên Kế Toán',
            company: 'Công Ty TNHH Tài Chính DEF',
            salary: '8 - 10 triệu',
            location: 'Hải Phòng',
            daysLeft: 'Còn 20 ngày',
        },
    ];
    const guides = [
        {
            title: 'Trợ giảng là gì? Công việc cụ thể của vị trí này?',
            description:
                'Trợ giảng là gì, công việc này yêu cầu những kỹ năng nào và mức lương hiện tại là bao nhiêu?',
            buttonText: 'GIẢI ĐÁP',
            image: 'https://via.placeholder.com/300x200', // Thay bằng URL ảnh thực tế
        },
        {
            title: 'Chatbot là gì? Tìm hiểu về chatbot và ứng dụng trong kinh doanh',
            description:
                'Chatbot là gì? Tìm hiểu về chatbot, cách hoạt động và ứng dụng thực tế trong kinh doanh. Khám phá công cụ tạo chatbot phổ biến.',
            buttonText: 'Tìm hiểu',
            image: 'https://via.placeholder.com/300x200', // Thay bằng URL ảnh thực tế
        },
        {
            title: 'Top 7 việc làm remote phổ biến, đem lại thu nhập tốt hiện nay',
            description:
                'Làm remote là gì và có những lợi ích nào khi làm việc dưới hình thức remote? Xem ngay bài viết của Việc Làm 24h để được phổ biến chi tiết nhất!',
            buttonText: 'Top 7',
            image: 'https://via.placeholder.com/300x200', // Thay bằng URL ảnh thực tế
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const jobsPerPage = 9; // 3 hàng x 3 cột

    // Tự động chuyển trang sau 10 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(jobs.length / jobsPerPage));
        }, 5000); // 10 giây
        return () => clearInterval(interval);
    }, [jobs.length]);
    const displayedJobs = jobs.slice(
        currentPage * jobsPerPage,
        currentPage * jobsPerPage + jobsPerPage
    );
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    return (
        <div className="bg-gray-50">
            {/* Carousel Section */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 h-[300px] overflow-hidden"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    &#8592;
                </button>
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    &#8594;
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Floating Search and Filters Section */}
            <div className="relative -mt-16 z-10">
                <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 mx-auto max-w-[1300px] h-[300px]">
                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <input
                            type="text"
                            placeholder="Nhập vị trí muốn ứng tuyển"
                            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Lọc theo nghề nghiệp</option>
                            <option>Kế toán</option>
                            <option>Nhân sự</option>
                            <option>Marketing</option>
                        </select>
                        <select
                            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Lọc theo tỉnh thành</option>
                            <option>Hà Nội</option>
                            <option>TP. Hồ Chí Minh</option>
                            <option>Đà Nẵng</option>
                        </select>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                            <span className="mr-2">Tìm việc</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Trending Industries */}
                    <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {[
                                { name: 'công nghệ thông tin', icon: <AiOutlineRise /> },
                                { name: 'marketing', icon: <AiOutlineRise /> },
                                { name: 'kế toán', icon: <AiOutlineRise /> },
                                { name: 'nhân sự', icon: <AiOutlineRise /> },
                            ].map((industry, index) => (
                                <div
                                    key={index}
                                    className="flex items-center rounded-lg "
                                >
                                    <span className="text-blue-600 text-sm">{industry.icon}</span>
                                    <span className="text-sm text-blue-600">{industry.name}</span>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* All Industries */}
                    <div className="mt-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Kế toán',
                                'Nhân sự',
                                'Marketing',
                                'Công nghệ thông tin',
                                'Bán hàng',
                                'Chăm sóc khách hàng',
                                'Kỹ thuật',
                                'Thực tập sinh',
                            ].map((industry, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-200 transition"
                                >
                                    <span className="text-sm text-gray-700">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-8">
                {/* Section Title */}
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                        <FaFire className="text-red-500 mr-2" />
                        Việc làm tuyển gấp
                    </h1>
                </div>

                {/* Job Cards */}
                <div className="container mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {displayedJobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-bold text-gray-800 truncate">
                                {job.title}
                            </h2>
                            <p className="text-sm text-gray-600 truncate">
                                {job.company}
                            </p>
                            <div className="flex items-center text-sm text-gray-600 mt-2">
                                <FaDollarSign className="mr-1 text-gray-500" />
                                {job.salary}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                <FaMapMarkerAlt className="mr-1 text-gray-500" />
                                {job.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                <FaClock className="mr-1 text-gray-500" />
                                {job.daysLeft}
                            </div>
                            {job.hot && (
                                <span className="text-xs text-red-500 font-bold mt-2 inline-block">
                                    HOT
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 mx-1 rounded-full ${index === currentPage ? 'bg-blue-600' : 'bg-gray-400'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="bg-gray-50 py-8">
                {/* Section Title */}
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800">Cẩm nang nghề nghiệp</h1>
                </div>

                {/* Career Guides */}
                <div className="container mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {guides.map((guide, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-48 object-cover"
                                />
                                <button className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                                    {guide.buttonText}
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800">{guide.title}</h2>
                                <p className="text-sm text-gray-600 mt-2">{guide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="container mx-auto px-4 mt-6 text-center">
                    <button className="bg-purple-100 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-200 transition">
                        Xem thêm cẩm nang nghề nghiệp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;