/** @format */

import React from "react";
import Form from "./forms/FormWrapper.js";
import Input from "./forms/Input.js";
import Button from "./forms/Button.js";
import useForm from "../hooks/useForm.js";

export default function Form1() {

    const submitHandler = (formValues, formErrors) => {
		if (Object.keys(formValues)) console.log(Object.values(formValues));
	}

	const { formValues, formErrors, handleChange, handleBlur, handleSubmit } = useForm(submitHandler);

	console.log(
		"Form1 rendered.", 
		JSON.stringify(formValues)
	);

	return (
		<Form
			id="form1"
			classes=""
            onSubmit={handleSubmit}  
		>
			{/*Why is this div here? */}
            <div>
		
				<Input
					inputName="fname"
					labelText="First Name"
					inputOnChange={handleChange}
					// Supply a default value to avoid the uncontrolled to controlled error
					value={formValues?.fname || ''}
				/>
				<Input
					inputName="lname"
					labelText="Last Name"
					inputOnChange={handleChange}
					value={formValues?.lname || ''}
				/>
				<Input
					inputName="email1"
					labelText="Email"
					inputType="email"
					inputLeftIconClass="envelope"
					inputPlaceholder="example@example.com"
					required="true"
					inputOnChange={handleChange}
					value={formValues?.email1 || ''}
				/>
				<Input
					inputName="email2"
					labelText="Confirm Email"
					inputType="email"
					inputLeftIconClass="envelope"
					inputPlaceholder=""
					required="true"
					inputOnChange={handleChange}
					value={formValues?.email2 || ''}
				/>
				<Input
					name="pass1"
					labelText="Password"
					inputType="password"
					inputLeftIconClass="lock"
					required="true"
					inputOnChange={handleChange}
                    value={formValues?.pass1 || ''}
                    inputPlaceholder="**********"
				/>
				<Input
					name="pass2"
					labelText="Password"
					inputType="password"
					inputLeftIconClass="lock"
					required="true"
					inputOnChange={handleChange}
                    value={formValues?.pass2 || ''}
				/>
				
				
				<Button buttonText="Submit" buttonClasses="is-large is-info" />
			</div>
		</Form>
	);
}
