/** @format */

import { useState, useRef, useEffect, useCallback } from "react";

// This is how to use the hook down below.
function myComponent() {
	// State for storing mouse coordinates
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	// Event handler uses useCallback so that reference never changes. He doesn't say reference to what. He must mean the handler function. (This reminds me of using event.persist() to retain reference to an event that would otherwise be pooled and reused by React.) But a good question is - is it worth it? Not if the child components aren't memoized. Otherwise, counter-intuitively, using useCallback might be more expensive than not using. 
	const handler = useCallback(
        // Pass in the mouse position
		({ clientX, clientY }) => {
			// Update the mouse position
			setCoords({ x: clientX, y: clientY });
        },
        // Track the setCoords function. I'm not sure this makes any sense. This dependency probably isn't going to change.
		[setCoords]
	);

    // OUR HOOK COMES INTO PLAY HERE
	// Add event listener using our hook. (Remember, the first arg is the event type)
	useEventListener("mousemove", handler);

	return (
		<h1>
			The mouse position is ({coords.x}, {coords.y})
		</h1>
	);
}

// Hook
// Pass in the event type, the handler for that event, and the element to which you'll attack the event
export default function useEventListener(eventName, handler, element = window) {
	// The author says that this creates a ref that stores the handler. I thought that the reference had to be to an element in the DOM. I was wrong. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component, including between renders. Yes, if you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes. But that's not the only way to use useRef. It's also a good way to hold on to any mutable value between renders, like here it's storing the event handler. So now the handler is being stored between renders in a couple of different ways. In the parent, the handler is defined with useCallback. Here in the child, it's stored as a ref.
	const savedHandler = useRef();

	// Update the ref.current value if the handler changes. This allows our effect below to always get the latest handler without us needing to pass it in to effect as a deps array and potentially cause the effect to re-run every render. Uhhh. But the author passes it in as a dependency anyway. So is the ref just a back up?
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(
		() => {
			// Make sure element supports addEventListener
            const isSupported = element && element.addEventListener;
            // If not, then exit here.
			if (!isSupported) return;

			// Create event listener that calls handler function stored in ref and pass it the event. This is the way we get the event to the handler.
			const eventListener = (event) => savedHandler.current(event);

			// Add event listener
			element.addEventListener(eventName, eventListener);

			// Remove event listener on cleanup. Remember the useEffect can only return a cleanup function that's run after everything else.
			return () => {
				element.removeEventListener(eventName, eventListener);
			};
		},
        // Re-run if and only if eventName or element changes
        [eventName, element] 
	);
}
