import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import requestAxios, { setAccessToken } from '../../services/axios'
import './Auth.css'

function Authorization({ setUser }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const onHandleSubmit = async event => {
		event.preventDefault()
		const { data } = await requestAxios.post('/auth/authorization', {
            email,
			password,
		})
		if (data.message === 'success') {
            setUser(data.user)
			setAccessToken(data.accessToken)
			navigate('/')
		}
		// if (data.message === 'email или пароль не совпадают') {
        //     console.log(1111);
		// 	alert('email или пароль не совпадают')
		// }
	}

	return (
		<div className='auth-container'>
			<div className='auth-background'>
				<h1>Авторизация</h1>
				<form className='auth-form' onSubmit={onHandleSubmit}>
					<label htmlFor='email'>
						<input
							type='email'
							placeholder='Введите свой email!'
							value={email}
							onChange={event => setEmail(event.target.value)}
							className='auth-input'
						/>
					</label>
					<label htmlFor='password'>
						<input
							type='password'
							placeholder='Введите пароль!'
							value={password}
							onChange={event => setPassword(event.target.value)}
							className='auth-input'
						/>
					</label>
					<button type='submit' className='auth-button'>
						Войти
					</button>
				</form>
			</div>
		</div>
	)
}

export default Authorization
