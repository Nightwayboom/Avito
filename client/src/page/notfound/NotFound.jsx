import React from 'react';
import ReactPlayer from 'react-player';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1>404 - Страница не найдена</h1>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=xVWHbTsVCLg"
                playing
                loop
                controls
                width="100%"
                height="100%"
                className="notfound-video"
            />
            <p>СЛАВА С ДНЕМ РОЖДЕНИЯ! <a href="/">главную страницу</a>.</p>
        </div>
    );    
}

export default NotFound;
