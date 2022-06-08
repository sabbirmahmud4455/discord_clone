import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
	baseURL: "http://localhost:4000/api",
	timeout: 1000
})

apiClient.interceptors.request.use((config)=>{
	const userDetails = localStorage.getItem('user');

	if (userDetails) {
		const token = JSON.parse(userDetails).token;
		config.headers.Authorization = 	`Bearer ${token}` 
	}
	return config;
}, (error) => {

	return Promise.reject(error);
})

//public routes
export const login = async (data) => {
	try {
		return await apiClient.post('/login', data)
	} catch (error) {
		return {
			error: true,
			message: error
		}
	}
}

export const register = async (data) => {
	try {
		return await apiClient.post('/register', data);
	} catch (error) {
		return {
			error: true,
			message: error
		}
	}
}

//secure routes
const checkResponseCode = (error) => {
	const responseCode = error?.response?.status;

	if (responseCode) {
		(responseCode === 401 || responseCode === 403) && logout()
	}
}