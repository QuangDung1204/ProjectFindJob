import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const JobCards = ({ jobs, totalPages, currentPage, setCurrentPage }) => {
    const [favorites, setFavorites] = useState([]);

    // Lấy danh sách công việc yêu thích từ localStorage khi component được mount
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    // Lưu danh sách công việc yêu thích vào localStorage
    const saveFavoritesToLocalStorage = (updatedFavorites) => {
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    // Xử lý thêm hoặc xóa công việc yêu thích
    const toggleFavorite = (job) => {
        const isFavorite = favorites.some((fav) => fav.id === job.id);
        let updatedFavorites;

        if (isFavorite) {
            // Xóa khỏi danh sách yêu thích
            updatedFavorites = favorites.filter((fav) => fav.id !== job.id);
        } else {
            // Thêm vào danh sách yêu thích
            updatedFavorites = [...favorites, job];
        }

        setFavorites(updatedFavorites);
        saveFavoritesToLocalStorage(updatedFavorites);
    };

    return (
        <div>
            {/* Tiêu đề "Việc làm tuyển gấp" */}
            <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🔥</span>
                <h2 className="text-lg font-bold text-gray-800">Việc làm tuyển gấp</h2>
            </div>

            {/* Danh sách công việc */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobs.map((job, index) => {
                    const isFavorite = favorites.some((fav) => fav.id === job.id);

                    return (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition relative"
                        >
                            {/* Icon yêu thích */}
                            <button
                                onClick={() => toggleFavorite(job)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                            >
                                {isFavorite ? (
                                    <AiFillHeart size={20} className="text-red-500" />
                                ) : (
                                    <AiOutlineHeart size={20} />
                                )}
                            </button>

                            {/* Logo công ty */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800 truncate">{job.title}</h2>
                                    <p className="text-sm text-gray-600 truncate">{job.company}</p>
                                </div>
                            </div>

                            {/* Thông tin chi tiết */}
                            <div className="flex items-center text-sm text-gray-600 mt-2">
                                <FaDollarSign className="mr-1 text-gray-500" />
                                <span className="text-blue-600 font-semibold">{job.salary}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                <FaMapMarkerAlt className="mr-1 text-gray-500" />
                                {job.location}
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                                <div className="flex items-center">
                                    <FaClock className="mr-1 text-gray-500" />
                                    Còn {job.daysLeft}
                                </div>
                                {job.hot && (
                                    <span className="text-xs text-red-500 font-bold">HOT</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                    Trang trước
                </button>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full ${index === currentPage ? 'bg-blue-600' : 'bg-gray-400'
                                }`}
                        ></button>
                    ))}
                </div>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                    Trang sau
                </button>
            </div>
        </div>
    );
};

export default JobCards;