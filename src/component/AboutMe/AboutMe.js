import React from 'react';
import './AboutMe.css';
import myImage from "../../images/self.jpg";

class AboutMe extends React.Component{
    
    
    render(){        
        return(
            <div className="container">
                <title>About Me</title>
                <div className="row">
                    <div className="col">
                        <img className="myImage" src={ myImage } alt="myImage"/>
                    </div>
                </div>
             
            </div>

        );
    }
}

export default AboutMe;