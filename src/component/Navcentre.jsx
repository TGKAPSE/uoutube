import React from "react";
import '../Style/navcen.css'

function Navcentre(){

    return(
    
        <div className="Navcentre">
          
         <div className="Search">
            <input type="text" placeholder="Search" className="search" />
            
         </div>
         <div className="div1" > <i class="fa-solid fa-magnifying-glass" id="icon"></i></div>
         <div >
             <div id="icon2">
            <i class="fa-solid fa-microphone" id="voice"></i>
             </div>
         </div>
        </div>

      
    )
    
    
    }
    
    export default Navcentre;