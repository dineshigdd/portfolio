import React from 'react';
import '../AboutMe/AboutMe.css'
import myImage from "../../images/self.jpg";

class AboutMe extends React.Component{
    
    
    render(){        
        return(
            <div className="container">                
                <div className="row about-me-row">
                    <div className="col s12 myImage-wrapper">
                        <img className="myImage" src={ myImage } alt="myImage"/>
                    </div>               
              
                    <div className="col s12 my-description-wrapper">
                        <div>
                            <p>
                                I am a full-stack web developer in service for any clients in need of websites and web applications. 
                                I put in a genuine effort to understand the requirements of the client. I have a client-oriented approach when it comes to web development. 
                                With my passion for web development and programming, I am fully committed to supporting you reach your business goals 
                                in a modern competitive market.
                            </p>
                        </div>
                    </div>                   
                    <div className="col s12 social-media-icons">
                        <a href="https://www.facebook.com/daminda.me/" target="_blank"><i className="fab fa-facebook fa-2x fa-fw" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/DineshForIT" target="_blank"><i className="fab fa-twitter fa-2x  fa-fw" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/damindadinesh/" target="_blank"><i className="fab fa-linkedin fa-2x fa-fw" aria-hidden="true"></i></a>
                        <a href="https://github.com/dineshigdd" target="_blank"><i className="fab fa-github-square fa-2x fa-fw" aria-hidden="true"></i></a>
                    </div>
    
                </div>
            </div>

        );
    }
}

export default AboutMe;