/** @format */

import React from "react";
import Form from "./forms/FormWrapper.js";
import Input from "./forms/Input.js";
import Button from "./forms/Button.js";
import useForm from "../hooks/useForm.js";

export default function Form1() {

    const submitHandler = (formValues, formErrors) => {
		if (Object.keys(formValues).length > 0) console.log(Object.values(formValues));
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
            <div>
				<Input
					Name="fname"
					Label="First Name"
					OnChange={handleChange}
					// Supply a default value to avoid the uncontrolled to controlled error
					Value={formValues?.fname || ''}
				/>

				<Input
					Name="lname"
					Label="Last Name"
					OnChange={handleChange}
					Value={formValues?.lname || ''}
				/>

				<Input
					Name="email1"
					Label="Email"
					Type="email"
					LeftIconClass="envelope"
					Placeholder="example@example.com"
					Required="true"
					OnChange={handleChange}
					Value={formValues?.email1 || ''}
				/>
				
				<Input
					Name="password"
					Label="Password"
					Type="password"
					LeftIconClass="lock"
					Required="true"
					OnChange={handleChange}
                    Value={formValues?.password || ''}
                    Placeholder="**********"
				/>
		
				<Button buttonText="Submit" buttonClasses="is-large is-info" />
			</div>
		</Form>
	);
}
