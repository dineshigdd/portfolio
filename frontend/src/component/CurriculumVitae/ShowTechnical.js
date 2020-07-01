import React from 'react';
import BioData from '../CurriculumVitae/bioData.json';
import '../LevelIndicator/LevelIndicator.css';
import './ShowTechnical.css';

const ShowTechnical = () =>{
  
  return (
    <div className="showTechnical-wrapper">
    <div className="level-title">
        <span>beginner</span>
        <span>intermediate</span>
        <span>Advanced</span>
    </div>
    { BioData.technical.language.map( (element, idx) => 
    <li className="language-item" key={idx}>{ element.name }  <div className="levelIndicator-Hzline">
      <div className="levelIndicator-Vline"></div></div> </li>
    
    
    ) }
    
    </div>
  );
}

export default ShowTechnical;