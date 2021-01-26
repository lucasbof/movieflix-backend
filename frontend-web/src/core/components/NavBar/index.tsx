import React, { useState } from 'react';
import './styles.scss';

const NavBar = () => {

    const [isUserLogged, setIsUserLogged] = useState(false);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
    }

    return (
        <div className="navbar-container row">

            <a href="home" className="nav-logo-text">
                MovieFlix
            </a>

            {
                isUserLogged && (
                    <div className="nav-logout-container">
                        <a
                            href="#logout"
                            onClick={handleLogout}
                            className="nav-logout-text"
                        >
                            SAIR
                            </a>
                    </div>
                )
            }

        </div>
    );
};

export default NavBar;