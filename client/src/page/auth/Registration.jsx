import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import React from 'react';
import './Auth.css';

function Registration({ setUser }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password.trim() === cpassword.trim()) {
                const { data } = await requestAxios.post('/auth/registration', {
                    name,
                    email,
                    password,
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
            <h1>Страница Регистрации</h1>
            <form className='auth' onSubmit={onHandleSubmit}>
                <label htmlFor="name">
                    <input
                        type="text"
                        placeholder='Введите Имя!'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="email"
                        placeholder='Введите email!'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        placeholder='Введите пароль!'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <label htmlFor="cpassword">
                    <input
                        type="password"
                        placeholder='Повторите пароль!'
                        value={cpassword}
                        onChange={(event) => setCPassword(event.target.value)}
                    />
                </label>
                {error && <p className="error-message">{error}</p>}
                <button type='submit'>Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Registration;
