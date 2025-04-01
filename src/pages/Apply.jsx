import React, { useState } from 'react';

const Apply = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cv, setCv] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !cv) {
            alert('Vui lòng điền đầy đủ thông tin và tải lên CV!');
            return;
        }

        // Tạo form data để gửi đến API backend
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('cv', cv);

        // Gửi dữ liệu đến API backend
        fetch('/api/apply', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    alert('Ứng tuyển thành công!');
                } else {
                    alert('Đã xảy ra lỗi, vui lòng thử lại.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Đã xảy ra lỗi, vui lòng thử lại.');
            });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ứng tuyển trực tuyến</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tải lên CV</label>
                    <input
                        type="file"
                        onChange={(e) => setCv(e.target.files[0])}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Nộp hồ sơ
                </button>
            </form>
        </div>
    );
};

export default Apply;