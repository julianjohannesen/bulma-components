import React from "react";
import Form from "./forms/Form.js";
import Input from "./forms/Input.js";
import Button from "./forms/Button.js";

export default function Form1(props){
    return(
        <Form id="form1" classes="blah ba" >
            <Input name="input1"/>
            <Button />
        </Form>
    );
}