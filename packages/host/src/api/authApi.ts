import api from './apiConfig';

export const userLogin = (credentials: Record<string, any>) => api.post('/auth/login', credentials);

export const register = (data: Record<string, any>) => api.post('/auth/register', data);
