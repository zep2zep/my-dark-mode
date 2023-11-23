import React from 'react'
import { useState, useEffect } from 'react';
import logo from "./img/elleffe_V2_r.png";
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, children }) => (
    <li className="nav-item ms-5">
        <Link to={to} className="nav-link">
            {children}
        </Link>
    </li>
);


const getFromLocalStorage = () => {
    if (localStorage.getItem("theme-icon")) {
        return localStorage.getItem("theme-icon");
    } else {
        return "light-mode";
    }
};
const Navbar = () => {
    //Stato iniziale per la nostra modalità
    const [theme, setTheme] = useState(getFromLocalStorage());

    //Cambia il valore dello staate theme
    const cambiaTema = () => {
        if (theme === "light-mode") {
            setTheme("dark-mode");
        } else {
            setTheme("light-mode");
        }
    };

    useEffect(() => {
        //Attacca classe al html tag
        document.documentElement.className = theme;

        //inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
        localStorage.setItem("theme", theme);
    }, [theme]);

    const location = useLocation();

    // Nascondi il Navbar sulla route '/'
    if (location.pathname === '/') {
        return null; // Renderizza null quando il percorso è '/'
    }
    return (
        <div className="container-fluid" style={{ width: '90%' }}>
            <div className="row justify-content-md-center">
                <div className="col">
                    <nav className="navbar navbar-expand-lg  mt-2 mb-4">
                        <div className="container-fluid">
                            <img
                                className="logo-nav"
                                src={logo}
                                alt="Descrizione dell'immagine"
                            />
                            <button className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <NavItem to="/">Home</NavItem>
                                    <NavItem to="/pages/About">About</NavItem>
                                    <NavItem to="/pages/cartelle">Tips</NavItem>
                                </ul>
                                <span id="theme-icon" style={{ fontSize: '24px' }} onClick={cambiaTema}>
                                    {theme === 'light-mode' ? (
                                        <i className="fas fa-moon" />
                                    ) : (
                                        <i className="fas fa-sun"
                                            style={{ color: theme === 'light-mode' ? '' : '#fff' }}
                                        />
                                    )}
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        </div >
    )
}

export default Navbar