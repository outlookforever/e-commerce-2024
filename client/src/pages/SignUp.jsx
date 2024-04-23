import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { PiUserCirclePlusThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import { imageToBase64 } from '@helpers/imageToBase64'

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [confirmPassword, setConfirmPassword] = useState(false)

	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		profilePic: ''
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

	// TODO:
	// Что бы можно было отобразить выбранную картинку,
	// необходимо преобразовать ее в base64 @helpers/imageToBase64
	const handelLoadPic = async e => {
		e.preventDefault()

		const file = e.target.files[0]

		const imagePic = await imageToBase64(file)
		setData(prev => {
			return {
				...prev,
				profilePic: imagePic
			}
		})
	}

	return (
		<section id='login'>
			<div className='container mx-auto p-4'>
				<div className='mx-auto w-full max-w-sm bg-white p-5'>
					<div className='relative mx-auto flex h-32 w-32  items-center justify-center  overflow-hidden  rounded-full border transition-all'>
						<div className=''>
							{data.profilePic ? (
								<img src={data.profilePic} />
							) : (
								<PiUserCirclePlusThin size={80} />
							)}
						</div>
						<form
							className='absolute
							bottom-0
							w-full'
						>
							<label>
								<div className=' h-12 cursor-pointer bg-slate-100 bg-opacity-80 py-2 text-center text-sm font-bold transition-all hover:bg-slate-100'>
									Upload photo
								</div>
								<input
									type='file'
									className='hidden'
									onChange={handelLoadPic}
								/>
							</label>
						</form>
					</div>
					<form
						className='flex flex-col gap-3 pt-6'
						onSubmit={handleSubmit}
					>
						<div className='grid'>
							<label>Name:</label>
							<div className='bg-slate-200 p-2'>
								<input
									className='h-full w-full bg-transparent outline-none'
									type='name'
									name='name'
									placeholder='Enter name'
									value={data.name}
									onChange={handleChange}
								/>
							</div>
						</div>
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
						</div>
						<div className=''>
							<label>Confirm Password:</label>
							<div className='flex bg-slate-200 p-2'>
								<input
									className='h-full w-full bg-transparent outline-none'
									type={showPassword ? 'text' : 'password'}
									name='confirmPassword'
									placeholder='Confirm Password'
									value={data.confirmPassword}
									onChange={handleChange}
								/>
								<div
									className='cursor-pointer text-xl'
									onClick={() => setConfirmPassword(prev => !prev)}
								>
									<span>
										{confirmPassword ? (
											<AiOutlineEyeInvisible />
										) : (
											<AiOutlineEye />
										)}
									</span>
								</div>
							</div>
						</div>
						<button className='mx-auto mt-6 block w-full max-w-[200px] rounded-full bg-red-600 px-6  py-2 text-white transition-all hover:bg-red-700'>
							Sign Up
						</button>
					</form>
					<p className='mt-4'>
						Already have account?{' '}
						<Link
							to='/login'
							className='underline transition-all hover:text-red-600'
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}

export default SignUp
