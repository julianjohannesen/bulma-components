import React from "react";

// how do you deal with all the autocomplete, autocorrect, spellcheck, autocapitalize, etc.

export default function Form( {
    // form element id
    id,
    // space separated string of classes
    classes,
    // submit handler function
    onSubmit,
    // child components
    children
} ) {
    
    return(
        // form wrapper
        //? Do I need to add noValidate?
        <form 
            className={"form " + classes}
            id={id}
            onSubmit={onSubmit}
            
        >
            {children}
        </form>
    );
}