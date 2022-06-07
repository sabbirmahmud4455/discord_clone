import axios from 'axios';

const apiClient = axios.create({
	baseURL: "http://localhost:4000/api",
	timeout: 1000
})

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