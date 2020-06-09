import React from 'react';
import './HamburgerIcon.css'

class HamburgerButton extends React.Component{
    

    HamburgerButtonAction(){    
        var element = document.querySelector(".container");
        element.classList.toggle("change");
       
    }

    render(){
        return(
        <div className="container" onClick={ this.HamburgerButtonAction.bind(this) }>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        );
    }
}

export default HamburgerButton;