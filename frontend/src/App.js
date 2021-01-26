import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'; 
import AboutMe from './component/AboutMe/AboutMe';
import HamburgerIcon from './component/BurgerIcon/HamburgerIcon'
import ContactMe  from './component/ContactMe/ContactMe';
import CurriculumVitae from './component/CurriculumVitae/CurriculumVitae';
import HomeButton from './images/home.svg';
import { createInitialCvUI } from './component/CurriculumVitae/cvInterface';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Portfolio from './component/Portfolio/Portfolio'




class App extends React.Component {

  constructor(props){
    super(props);

    this.showMainMenuOptions = this.showMainMenuOptions.bind(this);
    this.state ={};
  }
  
  componentDidMount(){
    this.showMainMenuOptions();  
  //   this.setState({ footer: 
    
  //   <div className="row">
  //   <div className="col  go-down-arrow">
  //       <div>          
  //            <p>See my work</p>
  //            <ExpandMoreIcon style={ { fontSize:100 }} 
  //             onClick={ () => this.showMainMenuOptions('portfolio') } />     
         
  //       </div>
  //   </div>
  // </div>
  //   });
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
          const initialState = createInitialCvUI();
          this.setState({ currentScreen: <CurriculumVitae initialState= {initialState } /> , footer:''});
        break;
      case "portfolio":
        this.setState({ currentScreen : <Portfolio /> , footer:''});
        break;
      default: this.setState( { currentScreen: 
        (<>
            <div className="section">
                <div className="col intro-text-container">   
                  <span className="my-name">Hi, I am Daminda Dinesh</span>
                  <span className="my-intro">Your Full-Stack Developer</span>
                </div>  
            </div>  
            
            <div className="section porfolio-col">
              <div>     
                    <p>See my work</p>
                    <ExpandMoreIcon style={ { fontSize:100 } } 
                      onClick={ () => this.showMainMenuOptions('portfolio') } />              
              </div>
            </div>
        
        </>
      
      ) });
        
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
                               
                        <HamburgerIcon showMainMenuOptions = { this.showMainMenuOptions }/>                
              </div>   
                    
                {   this.state.currentScreen } 
                      
        </div>         
              { this.state.footer }
    </div>
    );
  }
}


export default App;