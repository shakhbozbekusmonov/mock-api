import { APIClient } from '@/services/api-client'
import { useQuery } from 'react-query'

export interface IEmployee {
	id: string
	name: string
	avatar: string
	email: string
	phone_number: string
	position: string
	createdAt: string
}

const apiClient = new APIClient<IEmployee[]>('/employee')

const useEmployees = () =>
	useQuery<IEmployee[], Error>({
		queryKey: ['employees'],
		queryFn: () =>
			apiClient.getAll({
				params: {
					limit: 10,
				},
			}),
	})

export default useEmployees
