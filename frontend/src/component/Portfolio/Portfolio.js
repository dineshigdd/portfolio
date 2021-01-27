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


function Portfolio() {    

    const frondEndImages = {
        randomQuote: randomQuote,
        drumMachine: drumMachine,
        PomodoroClock: PomodoroClock,
        weatherApp: weatherApp,
        wikiViewer: wikiViewer,
        twichTv: twichTv,
        mardownPreviewer:mardownPreviewer
     }

     const url = {
        timestamp: "https://bustling-selective-quart.glitch.me/",
        headerParser: "https://tan-balaur.glitch.me/",
        exerciseTracker: "https://fossil-capri.glitch.me/",
        fileMetadata: "https://light-foxtail.glitch.me/",
        urlShortener:"https://excessive-octopus.glitch.me/"
     }

     const backEndImages = {
        timestamp: timestamp,
        headerParser: headerParser,
        exerciseTracker:exerciseTracker,
        fileMetadata:fileMetadata,
        urlShortener: urlShortener,
        personalLibrary: personalLibrary
     }
    

    return (
        <div>
            <h1 className="master-head">My Work</h1>
            <h3>FreeCodeCamp projects</h3>
            <h4>FrontEnd Projects</h4>
            <ProjectSlideFrontEnd frondEndImages =  { frondEndImages }/>
                {/* <li>React Markdown Previewer</li>
                <li>Drum Machine</li>
                <li>Pomodoro Clock</li>  */}
                                {/* <iframe src="https://codepen.io/dineshigdd/full/VKRWJO"></iframe>                */}
               
            
            <h4>Backend Projects</h4>
            <ProjectSlideBackEnd backEndImages = { backEndImages }/>
           
           
        </div>
    )
}

export default Portfolio
