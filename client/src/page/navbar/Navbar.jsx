import React from 'react';
import { NavLink } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import './Navbar.css';

function Navbar({ user, setUser }) {
    const onHandleLogout = async () => {
        const { data } = await requesAxios.get('/auth/logout')
        if (data.message === 'success') {
            setAccessToken(undefined)
            setUser(undefined)
        }
    }
    return (
        <nav className='Navbar'>
            <NavLink to='/'>Main</NavLink>
            <NavLink to='/property'>Property</NavLink>
            <NavLink to='/favorite'>Favorite</NavLink>
            {user ? (
                <button type='button' onClick={onHandleLogout}>
                    logout
                </button>
            ) : (
                <>
                    <NavLink to='/registration'>Registration</NavLink>
                    <NavLink to='/authorization'>Authorization</NavLink>
                </>
            )}
        </nav>

    );
}

export default Navbar;