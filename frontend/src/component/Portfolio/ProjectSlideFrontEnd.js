import React, { useState, useEffect } from 'react'
import './ProjectSlide.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Divider } from '@material-ui/core';


function ProjectSlide({ frondEndImages }) {
    const [index, setIndex] = useState(0);
   
    // useEffect(()=>{
    //     if( index == 6){
    //         alert("hello");
    //     }
    // }, index)
    let images = Object.values(frondEndImages);   
    const displayFrondEndProject = () => {

    }
    const nextImage = () =>{      
        if( index >= 0 && index <= 2 ){
            setIndex( index + 1 );
        }
    }
   
    const previousImage = () =>{        
        if( index > 0 ){
            setIndex( index - 1 );           
        }
    }
   

    return (    
        <div className="slide-wrapper">
         {/* <em className="left" onClick= { nextProject() }></em> */}
       
            <ArrowLeftIcon 
                style={{ fontSize: '6rem', marginTop:'60px' } }
                onClick={ ()=> nextImage() }/>
        
        <div className="project-slide-container">        
           
            <li className="project-slide slide-one" onClick={ displayFrondEndProject }>
                <img src={ images[ 0 + index ] } alt="random quote machine"/>
            </li>
            <li className="project-slide" onClick={ displayFrondEndProject }>
                <img src={ images[1 + index ] } alt="drum machine"/>
            </li>
            <li className="project-slide" onClick={ displayFrondEndProject }>
                <img src={ images[2 + index ] } alt="pomodoro clock"/>
            </li>
            <li className="project-slide" onClick={ displayFrondEndProject }>
                <img src={ images[3 + index ] } alt="weather app"/>    
            </li>  
            
        </div> 
       
            <ArrowRightIcon 
                style={{ fontSize: '6rem', marginTop:'60px' } }
                onClick = { ()=>previousImage() }/>
        
        
        {/* <em className="right"></em> */}
        </div>
    )
}

export default ProjectSlide
