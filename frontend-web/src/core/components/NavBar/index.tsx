import { isAuthenticated, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {

    const location = useLocation();
    const [isUserLogged, setIsUserLogged] = useState(false);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    useEffect(() => {
        setIsUserLogged(isAuthenticated());
    }, [location]);

    return (
        <div className="navbar-container row">

            <Link to="/" className="nav-logo-text">
                MovieFlix
            </Link>

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