import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://6624bd3a04457d4aaf9cda80.mockapi.io/api/v1',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

class APIClient<T> {
	endpoint: string

	constructor(endpoint: string) {
		this.endpoint = endpoint
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance.get<T>(this.endpoint, config).then(res => res.data)
	}
}

export { APIClient }
