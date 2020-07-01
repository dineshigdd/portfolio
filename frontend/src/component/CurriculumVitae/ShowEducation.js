import React from 'react';
import BioData from '../CurriculumVitae/bioData.json';
import './showEducation.css'


const ShowEducation = () =>{
  
  return (
    <div className="showEducation-wrapper">
      <ul>
       
        {  BioData.education.map( element => 
          <li>
            <div className="year">{ element.graduationYear }</div>
            <div className="college">{ element.school }</div>
           <div className="degree">{ element.degree }</div> 
          </li> )}       
     
      </ul>       
    
    
    </div>
  );
}

export default ShowEducation;