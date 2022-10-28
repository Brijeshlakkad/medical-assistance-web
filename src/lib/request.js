import axios from "axios"

const PUBLIC_BASE_URL = "http://127.0.0.1:3010/api/v1";

export default function request(url, method, params = {}, data = {}) {
	return new Promise((resolve) => {
		const accessToken = localStorage.getItem("USER");
		const headers = {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json"
		};
		if (accessToken) {
			headers["Authorization"] = `Bearer ${accessToken}`;
		}
		axios({
			method: method,
			url: `${PUBLIC_BASE_URL}/${url}`,
			headers,
			params: params,
			data: data,
		})
			.then((response) => {
				// console.log(response.data)
				resolve({ data: response.data })
			})
			.catch((exception) => {
				resolve({ exception })
			})
	})
}
