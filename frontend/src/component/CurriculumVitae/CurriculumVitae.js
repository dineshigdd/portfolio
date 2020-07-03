import React from 'react';
import ReactDOM from 'react-dom';

import '../CurriculumVitae/CurriculumVitae.css'

import ShowTechnical from '../CurriculumVitae/ShowTechnical';
import ShowEducation from '../CurriculumVitae/ShowEducation';
import ShowExperience from '../CurriculumVitae/ShowExperience';
import { createInitialCvUI } from './cvInterface';

class CurriculumVitae extends React.Component { 

    
    constructor(props){
        super(props);
   
       
    
     this.state = { 
         test :this.props.test,         
         currentScreen: this.props.initialScreen
    };


    this.showDisplayOptions = this.showDisplayOptions.bind(this);
    // this.reCreateCvUI = this.reCreateCvUI.bind(this);
    }
  
    //this method will not get called first time
    componentWillReceiveProps(){
        this.setState({currentScreen:this.props.initialScreen})
     }

showDisplayOptions(choice){
        switch(choice){
            case "technical":      
             try{
            
            //    document.getElementById('experience-link').parentNode.remove();
            //    document.getElementById('education-link').parentNode.remove();
            //    document.getElementById('technical-link').parentNode.className= 'cv-tec-link-move';
            //    document.getElementById("cv-main-display").className = 'cv-main-display-move'; 
              // this.setState( { "test":false} ) 
               this.setState( { "currentScreen": <ShowTechnical /> }) ;
              
                break;
             }catch(err){ 
                  console.log("err");
             }               
             
            case "education":
            try{
            //    document.getElementById('technical-link').parentNode.remove();   
            //    document.getElementById('experience-link').parentNode.remove();           
            //    document.getElementById('education-link').parentNode.className = 'cv-edu-link-move';
            //    document.getElementById("cv-main-display").className = 'cv-main-display-move';              
            //    this.setState( { "currentScreen": <ShowEducation/> }) ;
               break;
            }catch{}
               
            case "experience":
                // document.getElementById('technical-link').parentNode.remove();   
                // document.getElementById('education-link').parentNode.remove();           
                // document.getElementById('experience-link').parentNode.className = 'cv-exp-link-move';
                // this.setState( { "currentScreen": <ShowExperience />});
                break;
            default:


                //  document.getElementById("cv-main-display").innerHTML = 
                //  BioData.experience.projects.volunteering[0];
                 
        }
}

componentWillMount(){
   // console.log(this.state.test)
 
   
}  

      componentDidMount(){
        //this.showDisplayOptions()
          document.getElementById("technical-link").onclick = () =>{
            this.showDisplayOptions("technical");           
            
          }
          this.props.rerenderParentCallback();
        //   document.getElementById("education-link").onclick = () =>{
        //     this.showDisplayOptions("education")
        // }

        // document.getElementById("experience-link").onclick = () =>{
        //     this.showDisplayOptions("experience")
        // }
        
        
      }

      

       render(){       
        // if( this.state.test === false) {
        //     this.setState( { test : true})
        //     const initial = createInitialCvUI();
        //     this.setState( { currentScreen:  initial });
          
        //     return <div>{ this.state.currentScreen }</div> 
        // } 
       // console.log(this.state.test)
        //console.log(this.state.currentScreen)
            
           return(
            <div id="cv-main-display">
                   
                     { this.state.currentScreen }
                 

            </div>
            
            
        
        
        )
        
           
       }
   
            
}

export default CurriculumVitae;

/* <ul className="cv-main-nav">
            <li className="cv-main-links"
              >
                <span id="technical-link">technical</span></li>
            <li className="cv-main-links"  
                >
                <span id="experience-link">Experience</span></li>
            <li className="cv-main-links"  
                >
                <span id="education-link">Education</span></li>
        </ul> */

         /* <ul className="cv-main-nav">
            <li className="cv-main-links"
              onClick={ () => ( this.showDisplayOptions("technical"))}>
                <span id="technical-link">technical</span></li>
            <li className="cv-main-links"  
                onClick={ () => ( this.showDisplayOptions("experience")) }>
                <span id="experience-link">Experience</span></li>
            <li className="cv-main-links"  
                onClick={ () => ( this.showDisplayOptions("education")) }>
                <span id="education-link">Education</span></li>
        </ul> */