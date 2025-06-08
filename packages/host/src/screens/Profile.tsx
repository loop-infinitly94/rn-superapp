import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

const UserProfile = React.lazy(() => import('userapp/App'));

interface DecodedToken {
    name?: string;
    email?: string;
    [key: string]: any; // allow other fields if present
}

const extractUserDetailsFromToken = (token: string) => {
    try {
        const decoded = jwtDecode<DecodedToken>(token);
        console.log('Decoded token:', decoded);
        return {
            username: decoded.name ?? 'Unknown User',
            email: decoded.email ?? 'No Email Provided',
        };
    } catch (error) {
        console.error('Invalid token', error);
        return {
            username: 'Guest User',
            email: 'No Email Provided',
        };
    }
};

export default function Profile() {
    const auth = useAuth();
    const token = auth?.token;
    console.log('Profile screen rendered', auth?.token);
    const userDetails = token ? extractUserDetailsFromToken(token) : {
        username: 'Guest User',
        email: 'No Email Provided',
    };

    return (
        <UserProfile
            username={userDetails.username}
            email={userDetails.email}
        />
    );
}
