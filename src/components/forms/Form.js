import React from "react";

// how do you deal with all the autocomplete, autocorrect, spellcheck, autocapitalize, etc.

export default function Form( {
    // form element id
    id,
    // space separated string of classes
    classes,
    // submit handler function
    submitHandler = (e) => console.log(e),
    // child components
    children
} ) {
    
    return(
        // form wrapper
        <form 
            className={"form " + classes}
            id={id}
            onSubmit={submitHandler}
        >
            {children}
        </form>
    );
}