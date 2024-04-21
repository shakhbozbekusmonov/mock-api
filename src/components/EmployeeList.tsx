import EmployeeCard from '@/components/EmployeeCard'
import useEmployees from '@/hooks/useEmployees'

const EmployeeList = () => {
	const { data: employees, isLoading, error } = useEmployees()

	if (isLoading) return <div>Loading...</div>

	if (error) return <div>Error: {error.message}</div>

	return (
		<section>
			<div className='container'>
				<h2 className='text-center text-2xl font-bold py-5'>Employee List</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
					{employees?.slice(0, 12).map(employee => (
						<li key={employee.id}>
							<EmployeeCard {...employee} />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default EmployeeList
