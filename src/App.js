import React from 'react';
import './styles/index.css';
import HamburgerIcon from './component/util/HamburgerIcon'

function App() {
  return (
    <div className="App">    
      
    <header>
        <div className="HamburgerIcon">
          <HamburgerIcon /> 
        </div>      
    </header>         
    
      <div>       
        <h1>Hi I am Daminda Dinesh</h1>
        <h2>Your Full-Stack Developer</h2>
      </div>
    </div>
  );
}

export default App;
