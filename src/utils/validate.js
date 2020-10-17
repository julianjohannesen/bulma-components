/** @format */


// What I want: 
// Validation for each form element as the user leaves the element. Keep the danger style until the problem is fixed. Remove the danger style when the problem is fixed. It doesn't matter whether the user leaves the element and comes back later. Or should it be impossible to move on until a problem is fixed?
// Validation on submit
// Use the native validation API
// Possibly use a React hook

// To do this I need to listen for the focus and blur events (or is it focusin and focusout?). On blur, validate the element. On success, do nothing. On failure, style element and show help message.

// Store validation flag
//const [ valid, setValid ] = useState(true);
// Do this on blur
//function inlineValidate (e) {
   // checkValidity() // return t/f, if f fires "invalid" event
//}

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
    passwordNo: "Password is required.",
    passwordBad : "Please enter a valid password."
    password2: "Passwords do not match."

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
