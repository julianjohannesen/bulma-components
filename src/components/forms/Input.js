import React from "react";
import classnames from "classnames";

export default function Input({
    // optional label text
    labelText = '',
    // name of input element, will also be uses as label html-for and id
    inputName,
    // input type, e.g. text
    inputType = "text",
    // optional placeholder text
    inputPlaceholder = '',
    // optional onChange will default to default handler
    inputOnChange = (e)=>console.log(e.target),//_onChange,
    // optional blur handler will default to default blur handler
    inputOnBlur = (e)=>console.log(e.target),//_onBlur,
    // initial input value do i need it?
    inputValue = '',//values.value,
    // Is it a required field?
    required,
    // input left icon string, just the last bit of the fa-
    inputLeftIconClass = '',
    // optional input right icon string, just the last bit of the fa-
    inputRightIconClass = '',
    // optional help message string
    helpMessage = "Please complete this field."
}){

    const icons = classnames(
        {"has-icons-left": inputLeftIconClass},
        {"has-icons-right": inputRightIconClass}
    );

    return(
        <div className="field">
            {labelText ? 
            <label 
                htmlFor={inputName}
                className="label"
            >
                {labelText}
            </label>
            : null }
            <div className={"control " + icons}>
                <input
                    id={inputName}
                    name={inputName}
                    className="input"
                    type={inputType}
                    placeholder={inputPlaceholder}
                    value={inputValue}
                    onChange={inputOnChange}
                    required={required==="true"?true:false}
                />
                {inputLeftIconClass ?
                <span className="icon is-small is-left">
                    <i className={`fas fa-${inputLeftIconClass}`}></i>
                </span>
                : null }
                {inputRightIconClass ?
                <span className="icon is-small is-right">
                    <i className={`fas fa-${inputRightIconClass}`}></i>
                </span>
                : null }
            </div>
            {/* <p className={`help is-danger`}>{helpMessage}</p> */}
        </div>
    );
}