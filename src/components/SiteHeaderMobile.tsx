import { INavItem } from '@/components/SiteHeader'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

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

const SiteHeaderMobile = () => {
	return (
		<Sheet>
			<SheetTrigger className='md:hidden'>
				<Menu />
				<span className='sr-only'>Open Menu icon</span>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className='mb-5'>
					<SheetTitle>Mock API</SheetTitle>
				</SheetHeader>

				<NavigationMenu className='max-w-full'>
					<NavigationMenuList className='flex-col space-x-0 gap-5'>
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
			</SheetContent>
		</Sheet>
	)
}

export default SiteHeaderMobile
