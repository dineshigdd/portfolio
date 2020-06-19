// import React from 'react';
// import M from "materialize-css";
// import './HamburgerIcon.css'


// class HamburgerButton extends React.Component{
//     constructor(props){
//         super(props);     
        
//         this.state = {
//             isDropDownActive : false
//         }
//     }
   
//     componentDidMount() {
//         // Auto initialize all the things!
//         M.AutoInit();
//     }
    
//     HamburgerButtonAction(){    
//         var element = document.querySelector(".container");
//         element.classList.toggle("change");
        
//         this.setState(  state=> ( { isDropDownActive : ! state.isDropDownActive }));
          
//         // document.addEventListener('DOMContentLoaded', function() {
//         //     var elems = document.querySelectorAll('.dropdown-trigger');
//         //     // var instance = M.Dropdown.getInstance(elems);
//         //   });
            
      
//     }

  

//     render(){    
//         const { showMainMenuOptions } = this.props;
//         return(
//         <div>
//         <div className="container dropdown-trigger" 
//          href='#' data-target='dropdown1'
//          onClick={ this.HamburgerButtonAction.bind(this) }>
//             <div className="bar1"></div>
//             <div className="bar2"></div>
//             <div className="bar3"></div>
//         </div>
          
//             <ul id= "dropdown1" className='dropdown-content' alignment="down">
//                 <li onClick={ () =>showMainMenuOptions("aboutme")}><a href="#!">About me</a></li>
//                 <li onClick={ () =>showMainMenuOptions("CV")}><a href="#!">My CV</a></li>        
//                 <li onClick={ () =>showMainMenuOptions("contactme")}><a href="#!">Contact Me</a></li>
//             </ul>
           
//         </div>
//         );
//     }
// }

// export default HamburgerButton;