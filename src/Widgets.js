import React from 'react'
import './Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Linkedin news</h2>
            <InfoIcon />
        </div>
        {newsArticle("L'équipe Allemande a ouvert la compétition avec une large victoire", 'EURO 2024')}
        {newsArticle("L'équipe Italienne a gagné son premier match avec difficulté", 'EURO 2024')}
        {newsArticle("L'ESPAGNE on fire", 'EURO 2024')}
        {newsArticle("Petite victoire pour la Suisse", 'EURO 2024')}
        {newsArticle("Le Maroc a récupéré son eau de visage contre les Congolais, 6-0", 'EURO 2024')}
    </div>
  )
}

export default Widgets
