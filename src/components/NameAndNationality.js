import React from "react";
import Form from "./forms/FormWrapper";
import Input from "./forms/Input";
import Button from "./forms/Button";

const NameAndNationality = () => {
	
	// Submit handler function
	function mySubmitHandler() {
		console.log("No errors, submit callback called!");
	}

	// Form fields and initial values
	const myInitialValues = {
		"Name": "",
		"Nationality": ""
	}

	return (
		<Form id="NameAndNationality" noValidate={true} onSubmit={handleSubmit} >
            <div>
				<Input
					Name="name"
					Label="Name"
					OnChange={handleChange}
					Value={values?.name || ''}
				/>
		
				<Input
					Name="nationality"
					Label="Nationality"
					OnChange={handleChange}
					Value={values?.Nationality || ''}
				/>
				
				<Button buttonText="Submit" buttonClasses="is-large is-info"></Button>
			</div>
		</Form>
	);