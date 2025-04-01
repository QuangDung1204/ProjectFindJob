import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoBagCheck } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchFilters = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch({ searchTerm, jobType, location });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-1/2">
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                    type="text"
                    placeholder="Nhập vị trí muốn ứng tuyển"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="relative w-full md:w-1/4">
                <IoBagCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Lọc theo nghề nghiệp</option>
                    <option value="Kế toán">Kế toán</option>
                    <option value="Nhân sự">Nhân sự</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            <div className="relative w-full md:w-1/4">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Lọc theo tỉnh thành</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
            </div>
            <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
            >
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
    );
};

export default SearchFilters;