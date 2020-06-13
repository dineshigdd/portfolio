import React from 'react';
import './AboutMe.css';
import myImage from "../../images/self.jpg";

class AboutMe extends React.Component{
    
    
    render(){        
        return(
            <div className="container">
                <title>About Me</title>
                <div className="row about-me-row">
                    <div className="col myImage-wrapper">
                        <img className="myImage" src={ myImage } alt="myImage"/>
                    </div>
                </div>
                <div className="row about-me-row">
                    <div className="col">
                        <div><p>My name is Dinesh. I am enthiasitice about web developement and programming
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutMe;