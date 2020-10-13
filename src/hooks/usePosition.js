/** 
 * Jason Brown's usePosition custom hook. 
 * see: https://codedaily.io/tutorials/60/Create-a-useMousePosition-Hook-with-useEffect-and-useState-in-React
 * **/

import { useEffect, useState } from "react";

// This is a simplified version of the useEventListener hook found on Gabe Ragland's useHooks site. The main difference is that the author does not pass in the event type, handler, and element. All of those variables are fixed.  That means we don't have worry about using useCallback and useRef, like we do in the more generalized useEventListener. This is really useful as a teaching example.
export const useMousePosition = () => {

    // Use "position" to track the mouse position and keep it in local state
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {

        // The setFromEvent handler updates the "position" object in local state
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        
        // Now add the event listener. Remember that addEventListener needs the event type as its first argument.
		window.addEventListener("mousemove", setFromEvent);

        // useEffect can only return a clean up function. That function is used here to remove the event listener. Note: in a class component you'd use this.setFromEvent to ensure that removeEventListener could find the event that needs to be removed. Instead, we have to define setFromEvent within useEffect(), i.e. inside the function that calls the clean up function, otherwise the interpreter would not be able to find the original listener. I'm not super clear on the closure issues at play here. Perhaps you could accomplish the same thing with call() or bind(). But then what would we call as or bind to?
		return () => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

    // Return the mouse's x/y position.
	return position;
};
