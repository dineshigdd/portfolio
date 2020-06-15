import React from 'react';
import '../ContactMe/ContactMe.css'


 export const ContactMe = () => {
     return(
            <div className="row contact-me-wrapper">
                <h1>Contact Me</h1>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">                    
                            <input placeholder="First Name" id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col 12">
                            <input placeholder="E-mail" id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Phone" id="phone_number" type="tel" className="validate" />
                            <label htmlFor="phone_number">Phone</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" placeholder="Your message" className="materialize-textarea"></textarea>
                            <label className="textarea1-label" htmlFor="textarea1">Your message</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>  
     );
}