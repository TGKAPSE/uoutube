import React from "react";
import Video from "./Video";

function Allvideo(){

    const mystyle = {
        display:'flex',
        position: 'relative',
        height: '30vh',
        width: '80vw',
        left: '18vw',
        top:'7vh'
    }

return(

<div style={mystyle}>
<Video/>
<Video/>
<Video/>
</div>

)
}

export default Allvideo;