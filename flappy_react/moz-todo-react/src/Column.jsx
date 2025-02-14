import React, { useState, useEffect, useRef } from "react";

function Column(props){
    const elementRef = useRef(null);

    const [elements, setElements] = useState([]);
  
    useEffect(() => {

		const pipeGenerator = setInterval(() => {
			let heights = props.colHeightDiff();
			
				setElements((element) => [
					...element,
					{ 
						id: Math.random(),
						text: `Element ${elements.length + 1}`,
						width: props.width,
						xPos: window.innerWidth + props.width,
						heightTop: heights[0],
						heightBottom: heights[1],
					}
				]
			);		
					
		}, 4000);

		const updatePosition = setInterval(() => {				
				setElements((element) => 					
					element.map((element) => (
						{...element, xPos: element.xPos - 5}						
					))
				); 
		}, 30);
  
      return () => {
		clearInterval(pipeGenerator);
		clearInterval(updatePosition);
	  }
    }, []);	

    return (
		<div>
			{elements.map(element => (		
				<span key={element.id} >
				<div ref={elementRef} className="column column--top" style={{width: element.width, height: element.heightTop, left: element.xPos}}>
					<p>{element.id}</p>
					<p>{element.text}</p>
					<p>Height: {element.height}</p>
				</div>
				<div ref={elementRef} className="column column--bottom" style={{width: element.width, height: element.heightBottom, left: element.xPos}}>
					<p>{element.id}</p>
					<p>{element.text}</p>
					<p>Height: {element.height}</p>
				</div>
				</span>		
				
			)			
			)}
    	</div>   
    );
}

export default Column;