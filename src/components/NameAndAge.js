import React from "react";
import Form from "./forms/FormWrapper";
import Input from "./forms/Input";
import Button from "./forms/Button";
import useForm from "../hooks/useForm4.js";

// This is the implementation of another useForm hook. This hook is one that I wrote myself from scratch. It will probably have several iterations. Right now, it includes an errors object, but it isn't doing anything.

export default function NameAndAge () {
	
	function mySubmitHandler() {
		console.log("The form values are: ", JSON.stringify(values), "The errors are: ", JSON.stringify(errors));
	}

	const myInitialValues = {
		"Name": "",
		"Age": ""
	}

	const { values, errors, onChange, onSubmit } = useForm(mySubmitHandler, myInitialValues);

	return (
		<Form id="form4" onSubmit={onSubmit} >
            <div>
				<Input
					Name="name"
					Label="Name"
					OnChange={onChange}
					Value={values?.name || ''}
				/>

				<Input
					Name="age"
					Label="Age"
					OnChange={onChange}
					Value={values?.age || ''}
				/>

				<Button buttonText="Submit" buttonClasses="is-large is-info"></Button>

			</div>
		</Form>
	);
}