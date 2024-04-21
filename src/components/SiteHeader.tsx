import { ModeToggle } from '@/components/ModeToggle'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import SiteHeaderMobile from './SiteHeaderMobile'

export interface INavItem {
	label: string
	href: string
}

const navList: INavItem[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Contacts',
		href: '/contacts',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
]

const SiteHeader = () => {
	return (
		<header className='py-5 shadow-sm'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<h1 className='text-xl font-bold'>
						<a href='/'>Mock API</a>
					</h1>

					<NavigationMenu className='hidden md:flex'>
						<NavigationMenuList className='gap-5'>
							{navList.map(item => (
								<NavigationMenuItem key={item.label}>
									<NavigationMenuLink
										className='hover:underline'
										href={item.href}
									>
										{item.label}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>

					<div className='flex gap-5'>
						<ModeToggle />

						<SiteHeaderMobile />
					</div>
				</div>
			</div>
		</header>
	)
}

export default SiteHeader
