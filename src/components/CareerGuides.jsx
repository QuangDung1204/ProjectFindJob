import React from 'react';

const CareerGuides = ({ guides }) => {
    return (
        <div className="container mx-auto px-4 mt-6">
            <h2 className="text-2xl font-bold text-gray-800">Cẩm nang nghề nghiệp</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {guides.map((guide, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{guide.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{guide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerGuides;