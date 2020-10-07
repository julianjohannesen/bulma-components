import React from "react";
import Form from "./forms/Form.js";
import Input from "./forms/Input.js";
import Button from "./forms/Button.js";

export default function Form1(props){
    return(
        <Form id="form1" classes="fakeclass1 fakeclass2" >
            <div>
                <Input name="fname" labelText="First Name"/>
                <Input name="lname" labelText="Last Name" />
                <Input name="email" labelText="Email" inputType="email" inputLeftIconClass="envelope" placeholder="example@example.com" required="true"/>
                <Input name="password" labelText="Password" inputType="password" inputLeftIconClass="lock" required="true"/>
                <Input name="password" labelText="Confirm Password" inputType="password" inputLeftIconClass="lock" required="true"/>
                <Button buttonText="Submit" buttonClasses="is-large is-info"/>
            </div>
        </Form>
    );
}