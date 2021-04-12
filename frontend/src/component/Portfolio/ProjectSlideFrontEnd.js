import React, { useState } from 'react'
import './ProjectSlide.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Divider } from '@material-ui/core';


function ProjectSlide({ frontEndImages, displayProject }) {
    const [index, setIndex] = useState(0);   

    let images = Object.values(frontEndImages);  
    let keys = Object.keys(frontEndImages);

  
    const nextImage = () =>{   
        if( images.length > 4 ){   
            if( index >= 0 && index <= 2 ){
                setIndex( index + 1 );
            }
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
                onClick={ ()=>  previousImage() }/>
        
        <div className="project-slide-container">        
           
            <li className="project-slide slide-one" onClick={ ()=>displayProject(keys[ 0 + index ]) }>
                <img src={ images[ 0 + index ] } alt="random quote machine"/>
            </li>
            <li className="project-slide" onClick={ ()=>displayProject(keys[ 1 + index ])}>
                <img src={ images[1 + index ] } alt="drum machine"/>
            </li>
            <li className="project-slide" onClick={ ()=>displayProject(keys[ 2 + index ])}>
                <img src={ images[2 + index ] } alt="pomodoro clock"/>
            </li>
            <li className="project-slide" onClick={ ()=>displayProject(keys[ 3 + index ])}>
                <img src={ images[3 + index ] } alt="weather app"/>    
            </li>  
            
        </div> 
       
            <ArrowRightIcon 
                style={{ fontSize: '6rem', marginTop:'60px' } }
                onClick = { ()=>nextImage() }/>
        
        
        {/* <em className="right"></em> */}
        </div>
    )
}

export default ProjectSlide
