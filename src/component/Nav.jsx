import React from "react";
import Navcentre from "./Navcentre";
import Navright from "./Navright";
import Navleft from "./Navleft";
import '../Style/Navbar.css'


function Nav(){

return(

    <div className="nav-bar" style={{  backgroundColor:"black", color:"white"}}>
    <Navleft/>
    <Navcentre/>
    <Navright/>
   
    </div>
)


}

export default Nav;