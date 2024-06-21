import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import React from 'react';
import './Registration.css';

function Registration({ setUser }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password.trim() === cpassword.trim()) {
                const isAdmin = true
                const { data } = await requestAxios.post('/auth/registration', {
                    name,
                    lastName,
                    email,
                    password,
                    isAdmin
                });
                if (data.message === 'success') {
                    setUser(data.user);
                    setAccessToken(data.accessToken);
                    navigate('/');
                }
                return;
            }
            setError('Пароли не совпадают!');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-background">
                <h1>Регистрация</h1>
                <form className='auth-form' onSubmit={onHandleSubmit}>
                    <label htmlFor="name">
                        <input
                            type="text"
                            placeholder='Введите Имя!'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className='auth-input'
                        />
                    </label>
                    <label htmlFor="lastName">
                        <input
                            type="text"
                            placeholder='Введите Второе Имя!'
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            className='auth-input'
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="email"
                            placeholder='Введите email!'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className='auth-input'
                        />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            placeholder='Введите пароль!'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className='auth-input'
                        />
                    </label>
                    <label htmlFor="cpassword">
                        <input
                            type="password"
                            placeholder='Повторите пароль!'
                            value={cpassword}
                            onChange={(event) => setCPassword(event.target.value)}
                            className='auth-input'
                        />
                    </label>
                    {error && <p className="error-message">{error}</p>}
                    <button type='submit' className='auth-button'>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
