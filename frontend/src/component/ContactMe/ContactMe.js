// import React from 'react';
// import '../ContactMe/ContactMe.css'
// import { submitUser } from './../../util/message_util';
 

//  class ContactMe extends React.Component {

//     state = { 
//         firstName: '',
//         lastName:'',
//         email:'',
//         phone:'',
//         message:'',
       
//     }

//     update(field) {
//         return e => this.setState({
//           [field]: e.currentTarget.value
//         });
//       }

//     submitHandler(e){
//         e.preventDefault();
//         submitUser(this.state).then( 
//             res => {
//                 document.getElementById('confirm-message').innerHTML = res
//                 this.setState({ confirmStyle : 'confirm-message-style' })
//             }
//         );
        
        
//     }


//     render(){
//      return(
//             <div className="row contact-me-wrapper">
//                 <h1>Contact Me</h1>
//                 <form className="col s12">
//                     <div className="row">
//                         <div className="input-field col s6">                    
//                             <input placeholder="First Name" 
//                                 value={ this.state.firstName } 
//                                 onChange = { this.update('firstName')}
//                                 id="first_name" 
//                                 type="text" 
//                                 className="validate" />
//                             <label htmlFor="first_name">First Name</label>
//                         </div>
//                         <div className="input-field col s6">
//                             <input placeholder="Last Name" 
//                             value={ this.state.lastName }
//                             onChange = { this.update('lastName')}
//                             id="last_name" 
//                             type="text" 
//                             className="validate" />
//                             <label htmlFor="last_name">Last Name</label>
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="input-field col 12">
//                             <input placeholder="E-mail" 
//                             value={ this.state.email }
//                             onChange = { this.update('email')}
//                             id="email" 
//                             type="email" 
//                             className="validate" />
//                             <label htmlFor="email">E-mail</label>
//                         </div>
//                         <div className="input-field col s12">
//                             <input placeholder="Phone" 
//                             value={ this.state.phone }
//                             onChange = { this.update('phone')}
//                             id="phone_number" 
//                             type="tel" 
//                             className="validate" />
//                             <label htmlFor="phone_number">Phone</label>
//                         </div>
//                         <div className="input-field col s12">
//                             <textarea id="textarea1" 
//                             value={ this.state.message }
//                             onChange = { this.update('message')}
//                             placeholder="Your message" 
//                             className="materialize-textarea"></textarea>
//                             <label className="textarea1-label" htmlFor="textarea1">Your message</label>
//                         </div>
//                     </div>
                    
//                     <div className="row">
//                         <div className="col s12">
//                             <button onClick={ this.submitHandler.bind(this) } className="btn waves-effect waves-light" type="submit" name="action">Submit
//                                 <i className="material-icons right">send</i>
//                             </button>
//                             <span className={ this.state.confirmStyle } id="confirm-message"></span>
//                         </div>
//                     </div>
//                 </form>
//             </div>  
//      );
//     }
// }

// export default ContactMe;