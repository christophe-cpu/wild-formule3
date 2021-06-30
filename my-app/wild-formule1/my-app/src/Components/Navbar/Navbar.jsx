import React from 'react';
import logo from "../../assets/logo.png";
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/" ><img className="logo" src={logo} alt="logo F3"/></a>
            <div className="navigation">
                <a className="navigation-link" href="C:\Users\Utilisateur\Desktop\Nouveau dossier\photo-1508176694280-97e78b36d5fd.webp">LES VOITURES</a>
                <a className="navigation-link" href="/">A PROPOS</a>
                <a className="navigation-link" href="/">CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar;
