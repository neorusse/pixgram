import axios from 'axios';

const API_URL = 'http://localhost:7070/api/v1/users/';

const register = (firstName, lastName, email, password, confirmPassword) => {
	return axios.post(API_URL + 'signup', {
		firstName,
		lastName,
		email,
		password,
		confirmPassword,
	});
};

const login = (email, password) => {
	return axios
		.post(API_URL + 'login', {
			email,
			password,
		})
		.then((response) => {
			console.log(response);
			if (response.data.token) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

export default {
	register,
	login,
	logout,
	getCurrentUser,
};
