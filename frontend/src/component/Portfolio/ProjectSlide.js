import React from 'react'
import './ProjectSlide.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Divider } from '@material-ui/core';

function ProjectSlide({ frondEndImages }) {
    console.log(  )
    
    return (    
        <>
        <em className="left"></em>
        <div className="project-slide-container">        
           
            <li className="project-slide slide-one">
                <img src={ frondEndImages.randomQuote } alt="random quote machine"/>
            </li>
            <li className="project-slide">
                <img src={ frondEndImages.drumMachine } alt="drum machine"/>
            </li>
            <li className="project-slide">
                <img src={ frondEndImages.PomodoroClock } alt="pomodoro clock"/>
            </li>
            <li className="project-slide">
                <img src={ frondEndImages.weatherApp } alt="weather app"/>    
            </li>  
            
        </div> 
        <em className="right"></em>
        </>
    )
}

export default ProjectSlide
