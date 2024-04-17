import loginIcons from 'assets/signin.gif'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<section id='login'>
			<div className='mx-auto container p-4'>
				<div className='bg-white p-5 w-full max-w-sm mx-auto'>
					<div className='w-20 h-20 mx-auto'>
						<img
							src={loginIcons}
							alt='login'
						/>
					</div>
					<form className='pt-6'>
						<div className='grid'>
							<label>Email:</label>
							<div className='bg-slate-200 p-2'>
								<input
									className='w-full h-full outline-none bg-transparent'
									type='email'
									placeholder='Enter email'
								/>
							</div>
						</div>
						<div className=''>
							<label>Email:</label>
							<div className='bg-slate-200 p-2 flex'>
								<input
									className='w-full h-full outline-none bg-transparent'
									type={showPassword ? 'text' : 'password'}
									placeholder='Enter password'
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
								className='block w-fit ml-auto hover:underline hover:text-red-600 transition-all'
							>
								Forgot password
							</Link>
						</div>
						<button className='bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[200px] rounded-full  transition-all mx-auto block mt-6'>
							Login
						</button>
					</form>
					<p className='mt-4'>
						Don`t have account?{' '}
						<Link
							to='/sign-up'
							className='underline hover:text-red-600 transition-all'
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
