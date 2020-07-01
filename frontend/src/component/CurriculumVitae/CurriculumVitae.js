import React from 'react';
import ReactDOM from 'react-dom';
import '../CurriculumVitae/CurriculumVitae.css'
import { useState } from 'react';

import ShowTechnical from '../CurriculumVitae/ShowTechnical';
import ShowEducation from '../CurriculumVitae/ShowEducation';
import ShowExperience from '../CurriculumVitae/ShowExperience';

function showDisplayOptions(choice){
        switch(choice){
            case "technical":      
             try{
               document.getElementById('experience-link').parentNode.remove();
               document.getElementById('education-link').parentNode.remove();
               document.getElementById('technical-link').parentNode.className= 'cv-tec-link-move';
               document.getElementById("cv-main-display").className = 'cv-main-display-move';  
               return  <ShowTechnical/>;    
          
             }catch{ }               
             
            case "education":
            try{
               document.getElementById('technical-link').parentNode.remove();   
               document.getElementById('experience-link').parentNode.remove();           
               document.getElementById('education-link').parentNode.className = 'cv-edu-link-move';
               document.getElementById("cv-main-display").className = 'cv-main-display-move';              
               return <ShowEducation/>;
            }catch{}
               
            case "experience":
                document.getElementById('technical-link').parentNode.remove();   
                document.getElementById('education-link').parentNode.remove();           
                document.getElementById('experience-link').parentNode.className = 'cv-exp-link-move';
                return <ShowExperience />;
               
                //  document.getElementById("cv-main-display").innerHTML = 
                //  BioData.experience.projects.volunteering[0];
                 
        }
}


   

const CurriculumVitae = () => { 
       
     const [ mainDisplay, setMainDisplay ] = useState();
            return(
            <div>
                <ul className="cv-main-nav">
                    <li className="cv-main-links"
                      onClick={ () => setMainDisplay(showDisplayOptions("technical"))
                          
                      }>
                        <span id="technical-link">technical</span></li>
                    <li className="cv-main-links"  
                        onClick={ () => setMainDisplay( showDisplayOptions("experience")) }>
                        <span id="experience-link">Experience</span></li>
                    <li className="cv-main-links"  
                        onClick={ () => setMainDisplay( showDisplayOptions("education")) }>
                        <span id="education-link">Education</span></li>
                </ul>
                
                    <div id="cv-main-display">
                       { mainDisplay }
                    </div>
               
            </div>
        );
    
}

export default CurriculumVitae;