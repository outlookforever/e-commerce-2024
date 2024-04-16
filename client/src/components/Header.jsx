import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
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
				<div className='flex items-center gap-7'>
					<div className='text-3xl cursor'>
						<FaRegCircleUser />
					</div>
					<div className='text-2xl cursor relative'>
						<span>
							<FaShoppingCart />
						</span>
						<div className='text-white bg-red-600 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
							<p className='text-xs'>0</p>
						</div>
					</div>
					<div className=''>
						<button className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-700'>
							Login
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
