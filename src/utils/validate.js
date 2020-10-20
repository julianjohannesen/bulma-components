import React, {useState} from "react";


// What I want: 
// 1. Validation for each form element as the user leaves the element. Keep the Bulma danger style until the problem is fixed. Remove the danger style when the problem is fixed. It shouldn't matter whether the user leaves the element and comes back later. 
// 2. Validation on submit
// 3. Use the native validation API
// 4. Use Bulma styling
// 5. Possibly use a React hook

// To do this I need to listen for the focus and blur events (or focusin and focusout). On blur, validate the element. On success, do nothing. On failure, style element and show help message.

//Store validation flag
const [ valid, setValid ] = useState(true);
//Do this on blur
const inlineValidate = (e) => {
    //checkValidity is part of the constraint validation API. It returns true or false, based on whether the element passes rules specified inline, e.g. "require". If it returns false, it fires the "invalid" event So, listen for the "invalid" event, and if it's false, apply styles.
    checkValidity();
}

// This is a super simple validation script that will only work on form submission. It's not designed to work as you leave a form field

export default function validate(values) {
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
    // If the password does not match the password confirmation, set errors.confirmation this way
    //? This is fine for 
    if (values.password2 !== values.password) {
        errors.confirmation = "Passwords do not match."
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
    emailNoMatch: "Email addresses do not match."
    passwordNo: "Password is required.",
    passwordBad : "Please enter a valid password."
    passwordNoMatch: "Passwords do not match."

}

{ 
    const helpMesage = "";
    switch(errors[error]) {
        case "fname":
            helpMessage = "Please provide your full name"
            break;
        case "lame":
            break;
        case "email":
            break;
        case "password":
            break;
        case: "password2":
            break;
}}
