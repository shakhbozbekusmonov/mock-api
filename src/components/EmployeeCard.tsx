import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { IEmployee } from '@/hooks/useEmployees'

const EmployeeCard = ({
	name,
	avatar,
	email,
	phone_number,
	position,
	createdAt,
}: IEmployee) => {
	return (
		<Card className='h-full flex flex-col justify-between'>
			<CardHeader className='flex flex-row items-center gap-4'>
				<Avatar>
					<AvatarImage src={avatar} />
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>

				<div>
					<CardTitle>{name}</CardTitle>
					<CardDescription>{position}</CardDescription>
				</div>
			</CardHeader>
			<CardContent className='space-y-2'>
				<p>Email: {email}</p>
				<p>Phone number: {phone_number}</p>
			</CardContent>
			<CardFooter>
				<p className='text-sm text-gray-500'>
					Created at: {createdAt.slice(0, 10)}
				</p>
			</CardFooter>
		</Card>
	)
}

export default EmployeeCard
