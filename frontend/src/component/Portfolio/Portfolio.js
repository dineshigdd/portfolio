import React from 'react';
import './Portfolio.css';
import ProjectSlide from './ProjectSlide';
import randomQuote from "../../images/random-quote.png";
import drumMachine from "../../images/drum-machine.png";
import PomodoroClock from "../../images/pomodoro-clock.png";
import weatherApp from "../../images/weather-app.png";

function Portfolio() {
    

    const frondEndImages = {
        randomQuote: randomQuote,
        drumMachine: drumMachine,
        PomodoroClock: PomodoroClock,
        weatherApp: weatherApp
     }
    
    return (
        <div>
            <h1 className="master-head">My Work</h1>
            <h3>FreeCodeCamp projects</h3>
            <h4>FrontEnd Projects</h4>
            <ProjectSlide frondEndImages =  { frondEndImages }/>
                {/* <li>React Markdown Previewer</li>
                <li>Drum Machine</li>
                <li>Pomodoro Clock</li>  */}
                                {/* <iframe src="https://codepen.io/dineshigdd/full/VKRWJO"></iframe>                */}
               
            
            <h4>Backend Projects</h4>
            {/* <ProjectSlide /> */}
           
           
        </div>
    )
}

export default Portfolio
