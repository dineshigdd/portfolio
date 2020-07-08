import React from 'react';
import ReactDOM from 'react-dom';
import '../CurriculumVitae/CurriculumVitae.css'
import { useState, useEffect, useReducer} from 'react';

import ShowTechnical from '../CurriculumVitae/ShowTechnical';
import ShowEducation from '../CurriculumVitae/ShowEducation';
import ShowExperience from '../CurriculumVitae/ShowExperience';
import { createInitialCvUI } from './cvInterface';

function init(initialState){
    return { result : initialState  };
}

function removeContainerStyles(){
    var element = document.getElementById("cv-main-display");
    element.classList.remove("cv-main-display");
}

function reducer(state, action){
        switch(action.type){
            case "technical":      
            
             removeContainerStyles();

             state.result = <ShowTechnical/>;      
             return  { result : state.result};              
             
            case "education":
               removeContainerStyles();
               state.result = <ShowEducation/>;              
               return  { result : state.result};            
               
            case "experience":
                removeContainerStyles();  
                state.result = <ShowExperience />;
                return  { result : state.result};
              
            case "reset": 
                var element = document.getElementById("cv-main-display");
                element.className = "cv-main-display";
                 return init(action.payload);
        }
}



const CurriculumVitae = ({initialState}) => {     
    const[ counter ,setCounter ] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState,init);
       
    const tecSubmit = () => document.getElementById("technical-link").parentNode.onclick = 
        () => dispatch({ type: "technical"})
    
    const eduSubmit = () => document.getElementById("education-link").parentNode.onclick = 
        () => dispatch({ type: "education"})

    const expericeSubmit = () => document.getElementById("experience-link").parentNode.onclick = 
        () => dispatch({ type: "experience"})

    useEffect(
        
        ()=>{
             tecSubmit()      
             eduSubmit()   
             expericeSubmit()           
        },[counter]
    )
   
    
    useEffect(
     ()=>{
        setCounter(counter + 1)  
             dispatch({type: 'reset', payload: initialState })
     } ,[initialState])

    return(
        //  <div id="test">
            <div id="cv-main-display" className="cv-main-display">    
              
                 {  state.result }
                
             </div>
              
            
        );
    
}

export default CurriculumVitae;