import React, { useState, useEffect, useRef } from "react";

function Birdy(props) {    
    const elementRef = useRef(null);

    return (
        <div ref={elementRef} className="birdy"
        style={{top: props.posY, left: props.posX,}}>                        
            <p>Y Pos: <br />{props.posY} </p>
        </div>        
    );
}

export default Birdy;

