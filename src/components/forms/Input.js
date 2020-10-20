import React from "react";
import classnames from "classnames";

export default function Input({
    // optional label text
    labelText,
    // name of input element, will also be used as label html-for and id
    inputName,
    // input type, e.g. text
    inputType,
    // optional placeholder text
    inputPlaceholder,
    // optional onChange will default to default handler
    inputOnChange,
    // optional blur handler will default to default blur handler
    inputOnBlur,
    // initial input value do i need it?
    value,
    // Is it a required field?
    required = "false",
    // input left icon string, just the last bit of the fa-
    inputLeftIconClass,
    // optional input right icon string, just the last bit of the fa-
    inputRightIconClass,

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
                    autoComplete="off"
                    className="input"
                    id={inputName}
                    name={inputName}
                    onChange={inputOnChange}
                    onBlur={inputOnBlur}
                    placeholder={inputPlaceholder}
                    required={required==="true"?true:false}
                    type={inputType}
                    value={value}
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
            {false ? 
            <p className={`help is-danger`}>later</p> 
            : null }
        </div>
    );
}
