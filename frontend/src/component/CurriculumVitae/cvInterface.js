import React  from 'react';

// export function createInitialCvUI() {   
  
//     const arr = ['technical','experience','education'];
        
//          const initialState = (           
//                  <ul className="cv-main-nav"> 
//                  { 
                 
//                      arr.map((element,idx)=> 
//                      <li key={idx} className="cv-main-links">
//                          <span id={element + '-link'}>{ element }</span>
//                      </li>
//                      )              
                
//                  }
                 
//                  </ul>
//                  );
                
//            return  initialState ;
//    }

   export function createInitialCvUI(){
    return (
   <ul className="cv-main-nav">
   <li className="cv-main-links">
       <span id="technical-link">technical</span></li>
   <li className="cv-main-links">
       <span id="experience-link">Experience</span></li>
   <li className="cv-main-links">
       <span id="education-link">Education</span></li>
</ul> 
    );
}