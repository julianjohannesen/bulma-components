import React from "react";
import Form from "bulma/"

default export function Form( {id,submitHandler,children} ) {
    
    return(
        <form 
            className="form" 
            id={id}
            onSubmit={submitHandler}
        >
            {children}
        </form>
    );
}