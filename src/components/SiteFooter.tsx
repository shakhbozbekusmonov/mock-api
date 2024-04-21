import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from '@/components/Icons'

const SiteFooter = () => {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a className='flex font-medium items-center md:justify-start justify-center'>
					<span className='ml-3 text-xl'>Mock API</span>
				</a>
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© 2024 Mock API —
					<a
						href='https://github.com/shakhbozbekusmonov'
						className='text-gray-600 ml-1'
						rel='noopener noreferrer'
						target='_blank'
					>
						@shakhbozbekusmonov
					</a>
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a className='text-gray-500'>
						<FacebookIcon />
						<span className='sr-only'>Facebook icon</span>
					</a>
					<a className='ml-3 text-gray-500'>
						<TwitterIcon />
						<span className='sr-only'>Twitter icon</span>
					</a>
					<a className='ml-3 text-gray-500'>
						<InstagramIcon />
						<span className='sr-only'>Instagram icon</span>
					</a>
					<a className='ml-3 text-gray-500'>
						<LinkedinIcon />
						<span className='sr-only'>Linkedin icon</span>
					</a>
				</span>
			</div>
		</footer>
	)
}

export default SiteFooter
