import React from "react";
import '../Style/rightnav.css'

function Navright() {

    return (

        <div className="right-nav"> 
            <div className="rigth-line">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="rigth-btn">
                <button className="btn">
                <i class="fa-regular fa-circle-user"></i>
                    sign in
                </button>

            </div>
        </div>
    )


}

export default Navright;