import React from 'react';
import './styles.scss';
import { ReactComponent as MainImage } from 'core/assets/images/home-image.svg';
import Login from 'pages/Auth/components/Login';

const Home = () => (
    <div className="home-container row">
        <div>
            <h1 className="home-title">Avalie Filmes</h1>
            <h3 className="home-subtitle">Diga o que você achou do seu filme favorito</h3>
            <MainImage className="main-image" />
        </div>
        <div>
           <Login />
        </div>
    </div>
);

export default Home;