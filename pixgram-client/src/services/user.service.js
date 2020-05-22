import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/feeds';

const postFeed = () => {
	return axios.post(API_URL + `signed-url/${me}`);
};

const getFeed = () => {
	return axios.get(API_URL + 'users', { headers: authHeader() });
};

export default {
	postFeed,
	getFeed,
};
