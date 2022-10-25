import axios from "axios"

const PUBLIC_BASE_URL = "localhost:3000";

export default function request(url, params = {}, data = {}) {
	return new Promise((resolve) => {
		axios({
			method: "get",
			url: `${PUBLIC_BASE_URL}/${url}`,
			headers: {
				"content-type": "application/json",
			},
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
