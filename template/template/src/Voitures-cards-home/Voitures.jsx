import React from 'react';
import './Voitures.css';

function Voitures({name, image}) {
    return (
        <div className="Voitures">
            <div className="voitures-cards">
                <img className="Voiture-img" src={image} alt={name} />
                <div className="F3-desc">
                    <h3>name</h3>
                </div>

            </div>
        </div>
    )
}

export default Voitures
