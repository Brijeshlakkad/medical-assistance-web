import axios from "axios";

export default function request(url, method, params = {}, data = {}) {
	return new Promise((resolve) => {
		const headers = {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json"
		};
		const accessToken = localStorage.getItem("USER");
		if (accessToken) {
			headers["Authorization"] = `Bearer ${accessToken}`;
		}
		axios({
			method: method,
			url: `${process.env.REACT_APP_BASE_URL}/${url}`,
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
