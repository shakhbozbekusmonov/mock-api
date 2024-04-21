import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import EmployeeList from './components/EmployeeList'

const App = () => {
	return (
		<>
			<SiteHeader />
			<main className='flex-grow'>
				<EmployeeList />
			</main>
			<SiteFooter />
		</>
	)
}

export default App
