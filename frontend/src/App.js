import React from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import './App.css'
// import AboutMe from './component/AboutMe/AboutMe';
// import HamburgerIcon from './component/BurgerIcon/HamburgerIcon'
// import ContactMe  from './component/ContactMe/ContactMe';
// import CurriculumVitae from './component/CurriculumVitae/CurriculumVitae';
// import HomeButton from './images/home.svg';



class App extends React.Component {

  // constructor(props){
  //   super(props);

  //   this.showMainMenuOptions = this.showMainMenuOptions.bind(this);
  //   this.state = {};  
  // }
  
  // componentDidMount(){
  //   this.showMainMenuOptions();  
  //   this.setState({ footer: <div className="row">
  //   <div className="col  go-down-arrow">
  //       <div><p>See my work</p>
  //           <div className="go-down-arrow-1"></div>
  //           <div className="go-down-arrow-2"></div>
  //       </div>
  //   </div>
  // </div>
  //   });
  // }

  // showMainMenuOptions(option){
  //    switch(option){       
  //      case "aboutme" :
  //         this.setState( { currentScreen : <AboutMe /> , footer:''}) ;
  //         break;     
  //     case "contactme":
  //       this.setState({ currentScreen : <ContactMe /> , footer:''});
  //       break;
  //     case "CV":
  //       this.setState({ currentScreen: <CurriculumVitae /> , footer:''});
  //       break;
  //     default: this.setState( { currentScreen: (
  //     <div className="col intro-text-container">   
  //       <span className="my-name">Hi, I am Daminda Dinesh</span>
  //       <span className="my-intro">Your Full-Stack Developer</span>
  //     </div>) });
        
  //    }
  // }

  // render(){   
  //   return(
  //   <div className="container App">        
  //       <div className="row">
  //             <div className="col">
  //                 <img onClick={ ()=>this.showMainMenuOptions()}
  //                 className="home-button" src={  HomeButton } alt="Home" />
  //             </div>
  //             <div className="col HamburgerIcon">      
                               
  //                       <HamburgerIcon showMainMenuOptions = { this.showMainMenuOptions }/>                
  //             </div>   
                    
  //               {   this.state.currentScreen } 
                      
  //       </div>         
  //             { this.state.footer }
  //   </div>
  //   );
  // }

render(){
  return(  <div>Hello World this is a test</div> );
}

}


export default App;