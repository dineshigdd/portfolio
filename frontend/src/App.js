import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'; 
import AboutMe from './component/AboutMe/AboutMe';
import HamburgerIcon from './component/BurgerIcon/HamburgerIcon'
import ContactMe  from './component/ContactMe/ContactMe';
import CurriculumVitae from './component/CurriculumVitae/CurriculumVitae';
import HomeButton from './images/home.svg';
import { createInitialCvUI } from './component/CurriculumVitae/cvInterface';




class App extends React.Component {

  constructor(props){
    super(props);

    this.showMainMenuOptions = this.showMainMenuOptions.bind(this);
    this.HamburgerButtonAction = this.HamburgerButtonAction.bind(this);
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    this.state = {
      isDropDownActive : false
    }
   // this.state = {};  
  }
  
  componentDidMount(){
    this.showMainMenuOptions();  
    this.setState({ footer: <div className="row">
    <div className="col  go-down-arrow">
        <div><p>See my work</p>
            <div className="go-down-arrow-1"></div>
            <div className="go-down-arrow-2"></div>
        </div>
    </div>
  </div>
    });
  }

  HamburgerButtonAction(){    
    var element = document.querySelector(".container");
    element.classList.toggle("change");
    
    this.setState(  state=> ( { isDropDownActive : ! state.isDropDownActive }));
      
     
  
}
rerenderParentCallback() {
  this.forceUpdate();
}

  showMainMenuOptions(option){
     switch(option){       
       case "aboutme" :
          this.setState( { currentScreen : <AboutMe /> , footer:''}) ;
          break;     
      case "contactme":
        this.setState({ currentScreen : <ContactMe /> , footer:''});
        break;
      case "CV":      
        
        // ReactDOM.render( <CurriculumVitae 
        //   initialScreen= { [ true,initialScreen] }/>,document.getElementById('cv-main-display'));
        
          const initialScreen = createInitialCvUI(); 
           this.setState( { currentScreen: <CurriculumVitae 
            initialScreen= { initialScreen }  
            test = { true }
            rerenderParentCallback = { this.rerenderParentCallback }/> , footer:''});
        break;
      default: this.setState( { currentScreen: (
      <div className="col intro-text-container">   
        <span className="my-name">Hi, I am Daminda Dinesh</span>
        <span className="my-intro">Your Full-Stack Developer</span>
      </div>) });
       break;
     }
  }

  
  

  render(){   
    return(
    <div className="container App">        
        <div className="row">
              <div className="col">
                  <img onClick={ ()=>this.showMainMenuOptions()}
                  className="home-button" src={  HomeButton } alt="Home" />
              </div>
              <div className="col HamburgerIcon">      
                               
                        <HamburgerIcon 
                            showMainMenuOptions = { this.showMainMenuOptions }
                            HamburgerButtonAction = { this.HamburgerButtonAction } />                
              </div>   
                    
                {   this.state.currentScreen } 
                      
        </div>         
              { this.state.footer }
    </div>
    );
  }
}


export default App;