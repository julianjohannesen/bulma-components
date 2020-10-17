/** @format */

// A couple different things are mixed together - form state, form event handlers, form error handling

import React, { useState, useRef, useEffect } from "react";

export default function useForm (initialValues, submitHandler) {

    const [formValues, setFormValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [blurFlag, setBlurFlag] = useState(false);
    const [submitFlag, setSubmitFlag] = useState(false);
    //const resetFlag = useRef(true);

    //console.log("Here are the initial values and the form values", + "\n" + Object.values(initialValues) || "null", "\n" + Object.values(formValues) || "null");

    // The handlers can be reinitialized and redefined on each render. You could avoid that with useCallback, but it might not be worth it if there aren't a lot of forms on the page.

    // Handle input element changes
    const handleChange = (event) => {
        // Prevent React from recycling the event
        event.persist();
        // Set the form values
        setFormValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    // Handle input element blur. This is a hook for validation.
    const handleBlur = (event) => {
        // Add the element to a list of elements that have been touched
        setTouched(prev => ({ ...prev, [event.target.name]: true }));
        // Set any errors
        setErrors({ ...errors });
    };

    const handleSubmit = (event) => {
        // The conditional is unnecessary right?
        if (event) event.preventDefault();
        // Set any errors
        setErrors({ ...errors });
        // And/Or submit the form with values and errors
        submitHandler({ formValues, errors });
    };

    //? What's the problem that has to be solved? Maybe you have to use useEffect like this in order to be able to send a request to the server that could be sent back with error messages without having the form reset. Is that even true? Is this a good way to do that? The form will only reset if the page reloads and we set the useRef again. It will not reset if the form goes through multiple renders. OR is the problem that the page does not reload, but React tries to stick the initial values back in? That problem would only come up if useForm was called more than once, right? Why would useForm be called more than once? 

    // useEffect(
    //     () => {
    //         // The reset flag is true on the first render...
    //         if(resetFlag.current){
    //             setFormValues(initialValues);
    //             setErrors({});
    //             setTouched({});
    //             setBlurFlag(false);
    //             setSubmitFlag(false);
    //         }
    //         //... and false on subsequent renders
    //         resetFlag.current = false;
    //     },
    //     // Re-render if and only if the initial values change
    //     [initialValues]
    // );

    // Export everything
    return {
        formValues,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    }

}
