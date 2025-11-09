
import axios from 'axios';

export const HttpClient = axios.create({
	baseURL: `https://dummyjson.com`,
	timeout: 90000,
	headers: {
		'Content-Type': 'application/json',
		//Authorization: `Bearer ${appConfig.PUBLIC_API_TOKEN}`,
	},
});
 
