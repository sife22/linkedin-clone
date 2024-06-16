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
        {newsArticle('Sif eddine is the best', 'Top news - 999 readers')}
        {newsArticle('Sif eddine is the best is the best', 'Top news - 999 readers')}
        {newsArticle('Sif eddine is is is isis isis is I', 'Top news - 999 readers')}
        {newsArticle('Sif eddine is is the best is the the best', 'Top news - 999 readers')}
        {newsArticle('Sif eddine is the best', 'Top news - 999 readers')}
    </div>
  )
}

export default Widgets
