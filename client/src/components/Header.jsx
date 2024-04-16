import React from 'react'
import { GrSearch } from 'react-icons/gr'

import Logo from './Logo'

const Header = () => {
	return (
		<header className='h-16 shadow-sm'>
			<div className='container mx-auto h-full flex items-center px-4 justify-between'>
				<div className=''>
					<Logo
						w={100}
						h={50}
					/>
				</div>
				<div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-sm pl-2'>
					<input
						className='w-full outline-none'
						type='text'
						placeholder='Search product here...'
					/>
					<div className='text-lg min-w-[50px] h-8 flex items-center justify-center bg-red-600 rounded-r-full text-white'>
						<GrSearch />
					</div>
				</div>
				<div className=''>user icons</div>
			</div>
		</header>
	)
}

export default Header
