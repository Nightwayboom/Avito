import React from "react";
import { NavLink } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import "./Navbar.css";

function Navbar({ user, setUser }) {
  const onHandleLogout = async () => {
    const { data } = await requestAxios.get("/auth/logout");
    if (data.message === "success") {
      setAccessToken(undefined);
      setUser(undefined);
    }
  };

  return (
    <nav className="Navbar">
      <div className="nav-links">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/property">Аренда</NavLink>
      </div>
      <div className="logo">
        <img src="/logoApp.svg" alt="Site Logo" />
        <span className="site-name">Бомжито</span>
      </div>
      <div className="auth-links">
        {user ? (
          <>
            <div>Привет, {user.name}!</div>
            <NavLink to="/favorite">Избранное</NavLink>
            <button type="button" onClick={onHandleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/authorization">Авторизация</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
