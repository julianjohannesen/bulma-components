/** @format */

import React from "react";
import Form from "./forms/FormWrapper.js";
import Input from "./forms/Input.js";
import Button from "./forms/Button.js";
import useForm from "../hooks/useForm.js";

export default function Form1(props) {

    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        password2: "",
    }

    const submitHandler = (formValues, errors) => console.log(Object.values(formValues), Object.values(errors))

	const { formValues, errors, handleChange, handleBlur, handleSubmit } = useForm(initialValues, submitHandler);

	console.log("Is there a formValues object?", Object.values(formValues));

	return (
		<Form
			id="form1"
			classes="fakeclass1 fakeclass2"
            onSubmit={handleSubmit}
            
		>
			{/*Why is this div here? */}
            <div>
				<Input
					inputName="fname"
					labelText="First Name"
					inputOnChange={handleChange}
					value={formValues.fname}
				/>
				<Input
					inputName="lname"
					labelText="Last Name"
					inputOnChange={handleChange}
					value={formValues.lname}
				/>
				<Input
					inputName="email"
					labelText="Email"
					inputType="email"
					inputLeftIconClass="envelope"
					placeholder="example@example.com"
					required="true"
					inputOnChange={handleChange}
					value={formValues.email}
				/>
				<Input
					name="password"
					labelText="Password"
					inputType="password"
					inputLeftIconClass="lock"
					required="true"
					inputOnChange={handleChange}
                    value={formValues.password}
                    inputPlaceholder="*****"
				/>
				<Input
					name="password2"
					labelText="Confirm Password"
					inputType="text"
					inputLeftIconClass="lock"
					required="true"
					inputOnChange={handleChange}
					value={formValues.password2}
				/>
				<Button buttonText="Submit" buttonClasses="is-large is-info" />
			</div>
		</Form>
	);
}
