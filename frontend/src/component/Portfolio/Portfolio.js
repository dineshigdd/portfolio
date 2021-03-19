import React from 'react';
import './Portfolio.css';
import ProjectSlideFrontEnd from './ProjectSlideFrontEnd';
import ProjectSlideBackEnd from './ProjectSlideBackEnd';

import randomQuote from "../../images/frontend/random-quote.png";
import drumMachine from "../../images/frontend/drum-machine.png";
import PomodoroClock from "../../images/frontend/pomodoro-clock.png";
import weatherApp from "../../images/frontend/weather-app.png";
import wikiViewer from "../../images/frontend/wiki-viewer.png";
import mardownPreviewer from "../../images/frontend/react-markdown-previewer.png";
import twichTv  from "../../images/frontend/twitch-tv.png"

import timestamp from "../../images/backend/timestamp.png";
import headerParser from "../../images/backend/headerParser.png";
import exerciseTracker from "../../images/backend/exerciseTracker.png";
import fileMetadata from "../../images/backend/fileMetadata.png";
import urlShortener from "../../images/backend/urlShortener.png";
import personalLibrary from "../../images/backend/personalLibrary.png";
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';


function Portfolio() {    
    let [ state, setState ] = useState('');

    const frondEndImages = {
        randomQuote: randomQuote,
        drumMachine: drumMachine,
        PomodoroClock: PomodoroClock,
        weatherApp: weatherApp,
        wikiViewer: wikiViewer,
        twichTv: twichTv,
        mardownPreviewer:mardownPreviewer
     }

     const backEndImages = {
        timestamp: timestamp,
        headerParser: headerParser,
        exerciseTracker:exerciseTracker,
        fileMetadata:fileMetadata,
        urlShortener: urlShortener,
        personalLibrary: personalLibrary
     }

     const urlPartOne = "https://glitch.com/embed/#!/embed/";
     const urlPartTwo = "?path=server.js&previewSize=100";

     const URL = {        
        randomQuote: "https://codepen.io/dineshigdd/full/VKRWJO",
        drumMachine: "https://codepen.io/dineshigdd/full/GbMLdo",
        PomodoroClock: "https://codepen.io/dineshigdd/full/VoapKP",
        weatherApp: "https://codepen.io/dineshigdd/full/EvrVGq",
        wikiViewer: "https://codepen.io/dineshigdd/full/wqbYoj",
        twichTv: "https://codepen.io/dineshigdd/full/gGoKeR",
        mardownPreviewer:"https://codepen.io/dineshigdd/full/jjWWWa",
        timestamp: urlPartOne + "bustling-selective-quart" + urlPartTwo,
        headerParser: urlPartOne + "tan-balaur" + urlPartTwo,
        exerciseTracker: urlPartOne + "fossil-capri" + urlPartTwo,
        fileMetadata: urlPartOne + "light-foxtail" + urlPartTwo,
        urlShortener: urlPartOne + "excessive-octopus" + urlPartTwo,
        personalLibrary: urlPartOne + "abyssinian-melodic-city" + urlPartTwo
     }


    const closePreview = () => {
        setState(null)
        
    }
    
     const displayProject = (url)=>{      
        
        setState(   
            <div id="iframe-wrapper">
            <CloseIcon onClick={ ()=>closePreview()}/>            
            <iframe id="dispaly-master"
                title="Project Preview"
                width="1000px" 
                height="500px" 
                src= { URL[url] }     
                loading="eager"         
            >                    
            </iframe>   
            </div>       
        );
        
        
     }

    return (
        <div>
            <h1 className="master-head">My Work</h1>
            <h3>FreeCodeCamp projects</h3>
            <h4>FrontEnd Projects</h4>
            <ProjectSlideFrontEnd frondEndImages =  { frondEndImages } displayProject={ displayProject }/>
            <div>
                { state }
            </div>
                {/* <li>React Markdown Previewer</li>
                <li>Drum Machine</li>
                <li>Pomodoro Clock</li>  */}
                                {/* <iframe src="https://codepen.io/dineshigdd/full/VKRWJO"></iframe>                */}
               
            
            <h4>Backend Projects</h4>
            <ProjectSlideBackEnd backEndImages = { backEndImages } displayProject={ displayProject }/>
           
           
        </div>
    )
}

export default Portfolio
