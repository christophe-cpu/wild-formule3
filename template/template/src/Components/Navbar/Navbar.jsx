import React from 'react';
import logo from "../../assets/logo.png";
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/" ><img className="logo" src={logo} alt="logo F3"/></a>
            <div className="navigation">
                <a className="navigation-link" href="file:///C:/Users/Utilisateur/Desktop/Nouveau%20dossier/photo-1491659015174-15b37116b4a4.webp">LES VOITURES</a>
                <a className="navigation-link" href="/">A PROPOS</a>
                <a className="navigation-link" href="/">CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar;
