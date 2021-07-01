import React from 'react';
import Voitures from './Voitures';
import './VoituresList.css';

function VoituresList() {

    const EMC2 ={
        name:"EMC²",
        image:"file:///C:/Users/Utilisateur/Desktop/Nouveau%20dossier/photo-1508176694280-97e78b36d5fd.webp"
    }

    const STAND ={
        name:"Voiture au stand",
        image:"file:///C:/Users/Utilisateur/Desktop/Nouveau%20dossier/photo-1582854050148-651d87fa3319.webp"
    }
    
    const RAY ={
        name:"Ray-bun",
        image:"file:///C:/Users/Utilisateur/Desktop/Nouveau%20dossier/photo-1508175911810-a4817cd3d7b4.webp"
    }

    return (
        <div className="VoituresList">
            <h2 className="section-title Voiturelist-title">Venez tester nos voitures </h2>
            <div className="cards-container">
                    <Voitures {...EMC2} />
                    <Voitures {...STAND} />
                    <Voitures {...RAY} />
            </div>
        </div>
    )
}

export default VoituresList
