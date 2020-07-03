import React from 'react';

export function createInitialCvUI() {   
  
    const arr = ['technical','experience','education'];
     
         const initialState = (           
                 <ul className="cv-main-nav"> 
                 { 
                 
                     arr.map((element,idx)=> 
                     <li key={idx} className="cv-main-links">
                         <span id={element + '-link'}>{ element }</span>
                     </li>
                     )              
                
                 }
                 
                 </ul> );
 
           return <div>{ initialState }</div>;
   }


export function reCreateCvUI() {
    const arr = ['technical','experience','education'];
      const ul = document.createElement('ul');
        ul.className = "cv-main-nav";
        //ul.appendChild(ul);
        for( var i = 0; i <= 2 ; i++ ){
            const li = document.createElement('li');
            li.className = "cv-main-links";
            ul.appendChild(li);

            const span = document.createElement('span');
            span.className = arr[0] + "-" + "link";
            li.appendChild(span);
        }
       
    
    return ul;
}