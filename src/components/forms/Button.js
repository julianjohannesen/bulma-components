/** @format */

import React from "react";
import classnames from "classnames";

export default function Button({
	// button text
    buttonText = "",
    // classes
    buttonClasses = "",
	// optional button left icon, just the last bit of the fa-
	buttonLeftIconClasses = "",
	// optional button right icon, just the last bit of the fa-
	buttonRightIconClasses = "",
}) {

    // I need:
    // on button element need something for is-white,is-light,is-dark,is-black
    // type attribute for is-primary, is-link, is-info, is-success, is-warning, is-danger
    // size attribute for is-small, is-medium, is-large
    // color attribute
    // disabled attribute
    // need handler for is-hovered, is-focused, is-active, is-loading
    // automate the choices for these styles if someone picks "is-primary" or whatever
    // what about is-outlined, is-inverted, is-rounded

	return (
        <div className="field">
            <div className="control">
            <button className={"button " + buttonClasses}>
                {buttonLeftIconClasses ? 
                <span className="icon">
                    <i className={buttonLeftIconClasses}></i>
                </span>
                : null}
                <span>{buttonText}</span>
                {buttonRightIconClasses ?
                <span className="icon">
                    <i className={buttonRightIconClasses}></i>
                </span>
                : null}
            </button>
            </div>
        </div>
	);
}
