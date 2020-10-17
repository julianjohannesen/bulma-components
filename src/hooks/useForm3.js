/** @format */

import { useState, useEffect } from "react";

// Pass in the submit handler (I'm guessing) and the validation rules
const useForm = (callback, validate) => {

    // In local state, track the form input values, and any errors, as well as a flag for whether the form is submitting
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

    // After the form component renders, check to see if there are any errors and if the submit flag has been set to true. This could happen as you exit an individual field or when you hit the submit button. If both of those are true, then call the callback (which I think is the submit handler)
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleSubmit = (event) => {
        if (event) event.preventDefault();
        // Store any errors
        setErrors(validate(values));
        // And set submitting to true
        setIsSubmitting(true);
        // What will happen next is that useEffect will trigger and this time it will notice either that there are errors or that there are no errors and that submitting has been set to true. In the former case, I have no idea what happens. In the latter case, the callback is called. I suspect that the callback is the true submission handler.
	};

	const handleChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;
