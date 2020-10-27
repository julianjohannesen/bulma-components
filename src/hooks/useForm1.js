// Adapted from Leonardo Maldonado's hook. https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks

import { useState, useEffect, useRef } from "react";

// Pass in the initial form values and the submit handler
const useCustomForm = ({ initialValues, onSubmit }) => {

    // In local state, track the form input values, any errors, whether something has been touched, and the blur and submit events.
	const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    // So is touched a list of touched form elements?
    const [touched, setTouched] = useState({});
    // And is this a validation hook? It's left unfinished.
    const [onSubmitting, setOnSubmitting] = useState(false);
    // And what's this? Another validation hook.
	const [onBlur, setOnBlur] = useState(false);

	// Create a persistent flag that tells us whether the form has rendered. We can use this flag to reset the form. The very first time the form renders, this flag is true and the initial values are set. Every subsequent render, the reset step is skipped.
	const formRenderedRef = useRef(true);

	useEffect(() => {
		// Test the persistent flag, then reset the form's initial values. Otherwise, skip this step.
		if (formRenderedRef.current) {
			setValues(initialValues);
            setErrors({});
			setTouched({});
			setOnSubmitting(false);
			setOnBlur(false);
        }
        // Regardless of the test above, set the persistent flag to false
		formRenderedRef.current = false;
        },
        // Re-render if and only if the initial values change 
        [initialValues]
    );

    // Handle the change event on input elements
	const handleChange = (event) => {
        // Get the target element's name and value, e.g. "fname" and "Bob"
        const { target: {name, value} } = event;
        // Persist the event so that it isn't returned to the pool and re-used by React. If we didn't do this, by the time the handler gets executed, there's a small chance that the event it operates on will be the wrong event.
        event.persist();
        // Finally, overwrite the values object with its previous members, plus the new member. Should we be using (prevValues)=>({...prevValues, [name]:value}) here?
		setValues({ ...values, [name]: value });
	};
    
    // Handle the blur event
	const handleBlur = (event) => {
        // Get the target element's name
        const { target: {name} } = event;
        // Set the touched flag to true for the particular element and add it to the list of touched elements
        setTouched({ ...touched, [name]: true });
        // Set any errors (Does onBlur return an error object? Where are the errors coming from?)
		setErrors({ ...errors });
	};

    // Handle form submission
	const handleSubmit = (event) => {
        if (event) event.preventDefault();
        // Set any errors
        setErrors({ ...errors });
        // Call the onSubmit callback, passing in values and errors
		onSubmit({ values, errors });
	};

	return {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

export default useCustomForm;
