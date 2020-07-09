import React from 'react';
import BioData from '../CurriculumVitae/bioData.json';
import './showEducation.css'


const ShowEducation = () =>{
  
  return (
    <div>
        <div className="cv-edu-link-move">
            <p>Education</p>
        </div>    
        <div className="showEducation-wrapper cv-main-display-move">
        <ul>
        
          {  BioData.education.map( element => 
            <li>
              <div className="year">{ element.graduationYear }</div>
              <div className="college">{ element.school }</div>
            <div className="degree">{ element.degree }</div> 
            </li> )}       
      
        </ul>      
      </div>
    </div>
  );
}

export default ShowEducation;