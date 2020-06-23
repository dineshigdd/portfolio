import React from 'react';
import '../CurriculumVitae/CurriculumVitae.css'
import BioData from '../CurriculumVitae/bioData.json';

// class CurriculumVitae extends React.Component {

function showDisplayOptions(choice){
        switch(choice){
            case "technical": 
                 document.getElementById("cv-main-display").innerHTML = 
                 BioData.technical.language ;
                 break;
            case "education":
                 document.getElementById("cv-main-display").innerHTML = 
                 BioData.education[0].school;
                 break;
            case "experience":
                 document.getElementById("cv-main-display").innerHTML = 
                 BioData.experience.projects.volunteering[0];
                 break;
        }
}

const CurriculumVitae = () => {     
        return(
            <div>
                <ul className="cv-main-nav">
                    <li className="cv-main-links" onClick={ () => showDisplayOptions("technical") }>
                        <span id="technical-link">technical</span></li>
                    <li className="cv-main-links"  onClick={ () =>showDisplayOptions("experience") }>
                        <span id="experience-link">Experience</span></li>
                    <li className="cv-main-links"  onClick={ () =>showDisplayOptions("education") }>
                        <span id="education-link">Education</span></li>
                </ul>
                
                    <div id="cv-main-display"></div>
               
            </div>
        );
    
}

export default CurriculumVitae;