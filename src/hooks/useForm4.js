import { useState } from "react";

// This is the first iteration of a useForm hook that I wrote from scratch. The hook stores all input values in "values" and updates state on input change. On a submit, the hook calls the passed in submission handler, passing it the form values. No error handling has been added at this stage. Nor is there any validation.

export default function useForm(
    submitHandler,
    initialValues
){
    // Form values and errors
    const [values, setValues] = useState(initialValues || {});
    // This isn't implemented yet
    const [errors, setErrors] = useState({});

    // Change handler
    const onChange = (e) => {
        // You could deconstruct the name and value from the event.target, but, personally, I think that's harder to read. Either way, put these values in variables that will persist so that you don't have to call event.persist(). 
        const name = e.target.name;
        const value = e.target.value;
        setValues((prev)=>({...prev, [name]:value}))
    };

    // Submit handler
    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values, errors)
    };

    return {
        values,
        errors,
        onChange,
        onSubmit
    }
}