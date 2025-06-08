import React, { createContext, useContext, useEffect, useState } from 'react';
import { saveToken, getToken, deleteToken } from '../utils/storage';
import { userLogin } from '../api/authApi';

interface AuthContextType {
    user: any; // Replace 'any' with your user type if available
    token: string | null;
    login: (credentials: Record<string, any>) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null);      // Example: { id, name, email }
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStoredToken = async () => {
            const storedToken = await getToken();
            if (storedToken) {
                setToken(storedToken);
                // Optional: Fetch user info using the token
            }
            setLoading(false);
        };

        loadStoredToken();
    }, []);

    const login = React.useCallback(
        async ({ username, password }: { username: string; password: string }): Promise<void> => {
            const response = await userLogin({ username, password });
            if (response.status !== 200) {
                throw new Error('Login failed');
            }
            const authToken = response.data.data.accessToken; // Adjust based on your API response structure
            const userData = response.data.data.user; // Adjust based on your API response structure

            await saveToken(authToken);
            setToken(authToken);
            setUser(userData);
        },
        []
    );

    const logout = React.useCallback(async () => {
        await deleteToken();
        setToken(null);
        setUser(null);
    }, []);

    const contextValue = React.useMemo(
        () => ({ user, token, login, logout, loading }),
        [user, token, login, logout, loading]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
