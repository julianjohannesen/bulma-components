/** 
 * Jason Brown's usePosition custom hook. 
 * see: https://codedaily.io/tutorials/60/Create-a-useMousePosition-Hook-with-useEffect-and-useState-in-React
 * **/

import { useEffect, useState } from "react";

export const useMousePosition = () => {

    // Use "position" to track in local state the mouse position
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {

        // The setFromEvent handler updates the "position" object in local state
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        
        // Now add the event listener. Remember that addEventListener needs the event type as its first argument.
		window.addEventListener("mousemove", setFromEvent);

        // useEffect can only return a clean up function. That function is used here to remove the event listener. Note: in a class component you'd use this.setFromEvent. Instead, we have to define setFromEvent within useEffect(), i.e. inside the function that calls the clean up function.
		return () => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

    // Return the mouse's x/y position.
	return position;
};
