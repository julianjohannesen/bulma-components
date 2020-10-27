
import React from "react";

// If on blur the field does not pass checkValidity, then apply error styles and show error message
export default function useValidate (e) {
    const { valid, setValid } = useState(true)
    //checkValidity is part of the constraint validation API. It returns true or false, based on whether the element passes rules specified inline, e.g. "require". If it returns false, it fires the "invalid" event So, listen for the "invalid" event, and if it's false, apply styles.
    if(this.checkValidity()){
        setValid(true);
    };
}

// This is a super simple validation script that will only work on form submission. It's not designed to work as you leave a form field

export function validate(values) {
    let errors = {};
    // If no email, set errors.email this way
	if (!values.email) {
        errors.email = "Email address is required";
    // If there is an email, but it doesn't fit the regex, set errors.email this way
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
    }
    // If there's no password, set errors.password this way
	if (!values.password) {
        errors.password = "Password is required";
    // If there's a password, but it doesn't meet our requirements, set errors.password this way
	} else if (values.password.length < 8) {
		errors.password = "Password must be 8 or more characters";
    }
    // Return errors
	return errors;
}

// Custom error message. But if you use native validation, is any of this necessary?
const errorMessages = {
    fnameNo: "First name is required.",
    fnameBad: "Please enter a valid first name.",
    lnameNo: "Last name is required.",
    lnameBad: "Please enter a valid last name.",
    emailNo: "Email address is required.",
    emailBad: "Please enter a valid email address.",
    passwordNo: "Password is required.",
    passwordBad : "Please enter a valid password."
}

{ 
    const helpMesage = "";
    switch(errors[error]) {
        case "fname":
            helpMessage = "Please provide your full name"
            break;
        case "lname":
            break;
        case "email":
            break;
        case "password":
            break;
}}
