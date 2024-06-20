import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import requestAxios, { setAccessToken } from '../../services/axios'

function Authorization({ setUser }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const onHadleSubmit = async (event) => {
        event.preventDafault()
        const { data } = await requestAxios.post('/auth/authorization', {
            email,
            password,
        })
        if (data.message === 'success') {
            setAccessToken.uset(data.user)
            setAccessToken(data.accessToken)
            navigate('/')
        }
    }

    return (
        <div>
            <h1>Страница Авторизации</h1>
            <form className="auth" onSubmit={onHadleSubmit}>
                <label htmlFor="email">
                    <input type="email"
                        placeholder="Введите свой email!"
                        value={{ email }}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    <input type="password"
                        placeholder="Введите пароль!"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button type="submit"> Войти</button>
            </form>
        </div>
    );
}

export default Authorization;