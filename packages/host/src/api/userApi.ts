import api from './apiConfig';

export const getUserById = (id: string) => api.get(`/users/${id}`);

