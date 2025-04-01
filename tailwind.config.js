export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Đường dẫn đến các file cần sử dụng Tailwind CSS
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A', // Màu xanh chủ đạo
                secondary: '#10B981', // Màu xanh lá
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [], // Thêm plugin nếu cần
};