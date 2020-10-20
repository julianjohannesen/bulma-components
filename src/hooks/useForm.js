/** @format */

import React, { useState, useRef, useEffect } from "react";

export default function useForm (submitHandler) {

    // Is the purpose of initialValues to re-fill the form with the same values after submit, in the event that the server sends the form back because the form contains an error
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [blurFlag, setBlurFlag] = useState(false);
    const [submitFlag, setSubmitFlag] = useState(false);
    const initializeFlag = useRef(true);

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
        // Prevent React from recycling the event
        event.persist();
        // Add the element to a list of elements that have been touched
        setTouched(prev => ({ ...prev, [event.target.name]: true }));
        // Set any errors
        setFormErrors({ ...formErrors });
    };

    const handleSubmit = (event) => {
        // The conditional is unnecessary right?
        if (event) event.preventDefault();
        // Set any errors
        setFormErrors({ ...formErrors });
        // And/Or submit the form with values and errors
        submitHandler({ formValues, formErrors });
    };

    // useEffect(
    //     () => {
    //         // The flag is true on the first render...
    //         if(initializeFlag.current){
    //             setFormValues({});
    //             setFormErrors({});
    //             setTouched({});
    //             setBlurFlag(false);
    //             setSubmitFlag(false);
    //         }
    //         //... and false on subsequent renders
    //         initializeFlag.current = false;
    //     },
    //     // Re-render if and only if the initial values change
    //     []
    // );

    // Export everything
    return {
        formValues,
        formErrors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    }

}
