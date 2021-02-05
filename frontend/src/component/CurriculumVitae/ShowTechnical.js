import React from 'react';
import BioData from '../CurriculumVitae/bioData.json';
import '../LevelIndicator/LevelIndicator.css';
import './ShowTechnical.css';

const ShowTechnical = () =>{
  
  return (
    <div>
      <div className="cv-tec-link-move">
          <p>Technical</p>
      </div>
      <div className="showTechnical-wrapper cv-main-display-move">
          <div className="level-title">
              <span>beginner</span>
              <span>intermediate</span>
              <span>Advanced</span>
          </div>
          { BioData.technical.language.map( (element, idx) => 
          <li className="language-item" key={idx}>{ element.name }  
            <div className="levelIndicator-Hzline">
            <div className="levelIndicator-Vline"></div>
            </div>
          </li>
          
          
          ) }
          
      </div>
      <div className="framwork-item-wrapper cv-main-display-move">
            { BioData.technical.Framework.map( (element, idx) =>(               
                <li className="framwork-item" key={idx}>
                  { element}
                </li>  
                )           

            )}       
      </div>   
    </div>
  );
}

export default ShowTechnical;