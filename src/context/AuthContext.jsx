import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0123456789',
        joinDate: '01/01/2023',
    }); // Tạm thời giả lập dữ liệu người dùng

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);