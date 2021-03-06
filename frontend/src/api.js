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
		return await apiClient.post('/auth/login', data)
	} catch (error) {
		return {
			error: true,
			message: error
		}
	}
}

export const register = async (data) => {
	try {
		return await apiClient.post('/auth/register', data);
	} catch (error) {
		return {
			error: true,
			message: error
		}
	}
}


//secure routes

export const sendFriendInvitation = async (data) => {
	try {
		return await apiClient.post('/friend-invitation/invite', data);
	} catch (exception) {
		checkResponseCode(exception);

		return {
			error: true,
			exception,
		}
	}
}

export const acceptFriendInvitation = async (data) => {
	try {
		return await apiClient.post('/friend-invitation/accept', data)
	} catch (exception) {
		checkResponseCode(exception);

		return {
			error: true,
			exception,
		}
	}
} 

export const rejectFriendInvitation = async (data) => {
	try {
		return await apiClient.post('/friend-invitation/reject', data)
	} catch (exception) {
		checkResponseCode(exception);

		return {
			error: true,
			exception,
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