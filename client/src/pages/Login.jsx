import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { PiUserLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import loginIcons from '@assets/signin.gif'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handleChange = e => {
		const { name, value } = e.target

		setData(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<section id='login'>
			<div className='container mx-auto p-4'>
				<div className='mx-auto w-full max-w-sm bg-white p-5'>
					<div className='mx-auto flex h-20 w-20 items-center justify-center'>
						<PiUserLight size={80} />
					</div>
					<form
						className='flex flex-col gap-3 pt-6'
						onSubmit={handleSubmit}
					>
						<div className='grid'>
							<label>Email:</label>
							<div className='bg-slate-200 p-2'>
								<input
									className='h-full w-full bg-transparent outline-none'
									type='email'
									name='email'
									placeholder='Enter email'
									value={data.email}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className=''>
							<label>Password:</label>
							<div className='flex bg-slate-200 p-2'>
								<input
									className='h-full w-full bg-transparent outline-none'
									type={showPassword ? 'text' : 'password'}
									name='password'
									placeholder='Enter password'
									value={data.password}
									onChange={handleChange}
								/>
								<div
									className='cursor-pointer text-xl'
									onClick={() => setShowPassword(prev => !prev)}
								>
									<span>
										{showPassword ? (
											<AiOutlineEyeInvisible />
										) : (
											<AiOutlineEye />
										)}
									</span>
								</div>
							</div>
							<Link
								to={'/forgot-password'}
								className='ml-auto block w-fit transition-all hover:text-red-600 hover:underline'
							>
								Forgot password?
							</Link>
						</div>
						<button className='mx-auto mt-6 block w-full max-w-[200px] rounded-full bg-red-600 px-6  py-2 text-white transition-all hover:bg-red-700'>
							Login
						</button>
					</form>
					<p className='mt-4'>
						Don`t have account?{' '}
						<Link
							to='/sign-up'
							className='underline transition-all hover:text-red-600'
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Login
