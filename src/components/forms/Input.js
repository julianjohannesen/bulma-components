import React from "react";
import classnames from "classnames";

// Could event listeners like OnChange be imported in a more succinct way in an object and then spread

export default function Input({
    // optional label text
    Label,
    // name of input element, will also be used as label html-for and id
    Name,
    // input type, e.g. text
    Type,
    // optional placeholder text
    Placeholder,
    // optional onChange will default to default handler
    OnChange,
    // optional blur handler will default to default blur handler
    OnBlur,
    // initial input value do i need it?
    Value,
    // Is it a required field?
    Required = "false",
    // input left icon string, just the last bit of the fa-
    LeftIconClass,
    // optional input right icon string, just the last bit of the fa-
    RightIconClass,

}){

    const icons = classnames(
        {"has-icons-left": LeftIconClass},
        {"has-icons-right": RightIconClass}
    );

    // const [valid, setValid] = useState(true);
    // const blurHandler = (e) => {
    //     setValid(this.checkValidity());
    // }

    return(
        <div className="field">
            {Label ? 
            <label 
                htmlFor={Name}
                className="label"
            >
                {Label}
            </label>
            : null }
            <div className={"control " + icons}>
                <input
                    autoComplete="off"
                    className="input"
                    id={Name}
                    name={Name}
                    onChange={OnChange}
                    //onBlur={blurHandler}
                    placeholder={Placeholder}
                    required={Required==="true"?true:false}
                    type={Type}
                    value={Value}
                />
                {LeftIconClass ?
                <span className="icon is-small is-left">
                    <i className={`fas fa-${LeftIconClass}`}></i>
                </span>
                : null }
                {RightIconClass ?
                <span className="icon is-small is-right">
                    <i className={`fas fa-${RightIconClass}`}></i>
                </span>
                : null }
            </div>
            {false ? 
            <p className={`help is-danger`}>later</p> 
            : null }
        </div>
    );
}
