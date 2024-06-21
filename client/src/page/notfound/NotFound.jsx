import React from 'react';
import ReactPlayer from 'react-player';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1>404 - Страница не найдена</h1>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=jdLVdUHVa_w"
                playing
                loop
                controls
                width="100%"
                height="100%"
                className="notfound-video"
            />
            <p>Кажется, вы заблудились. Вернитесь на <a href="/">главную страницу</a>.</p>
        </div>
    );
}

export default NotFound;
