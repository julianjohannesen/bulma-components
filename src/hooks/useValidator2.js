import React, { useEffect, useReducer, useRef } from "react";
//import useDeepCompareEffect from "use-deep-compare-effect";
import validator from "validator";

// CONFIG
const config = {
	fields: {
		username: {
			isRequired: { message: "Please provide an alphanumeric username between 2 and 256 characters in length." },
			isMinLength: { value: 2, message: "At least 2 characters in length."},
			isAlphanumeric: { message: "Alphanumeric characters only."}
		},
		password: {
			isRequired: { message: "Please fill out a password" },
			isMinLength: { value: 6, message: "Please make it more secure" },
		},
	},
	onSubmit: (e) => {
		console.log("Form submitted.");
	},
};

export default function LoginForm (props) {
	const { getFieldProps, getFormProps, errors } = useValidation(config);
	return (
		<form className="form" {...getFormProps()}>
			<label className="label">
				Username
				<br />
				<input autoComplete="off" type="text" className="input" {...getFieldProps("username")} />
				{errors.username && (
					<div className="error is-danger">{errors.username}</div>
				)}
			</label>

			<label className="label">
				Password
				<br />
				<input autoComplete="off" type="password" className="input" {...getFieldProps("password")} />
				{errors.password && (
					<div className="error is-danger">{errors.password}</div>
				)}
			</label>

			<button className="button" type="submit">Submit</button>
		</form>
	);
};

// INITIAL STATE
const initialState = {
	values: {"username":"", "password":""},
	errors: {},
	submitted: false,
};

// REDUCER
function reducer(state, action) {
	switch (action.type) {
		case "change":
			const values = { ...state.values, ...action.payload };
			return {...state, values,};
		case "submit":
			return {...state, submitted: true,};
		case "validate":
			return {...state, errors: action.payload,};
		default: throw new Error("Unknown action type");
	}
}

// VALIDATOR
function validateFields(){
	// for each field in the form, for each rule for that field (found in ref.fields), validate that field against that rule
	console.log("The validator function was called");
	return {}
}

function useValidation(config) {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log("Right after calling useReducer in useValidation", JSON.stringify(state));
	const ref = useRef(config);
	useEffect(() => dispatch({ 
		type: "validate", 
		payload: validateFields(state.fields, ref.fields),
	}), [state.fields, ref.fields]);
	return {
		errors: state.errors,
		getFormProps: () => ({
			onSubmit: (e) => {
				e.preventDefault();
				dispatch({ type: "submit" });
				if (ref.onSubmit) {ref.onSubmit(state)}
			},
		}),
		getFieldProps: (field) => ({
			onChange: (e) => {
				// The ref is used here, because the config gets passed into useValidation on each call, which means we have to persist it across renders. Otherwise, it's going to trigger an infinite render loop.
				//? Is getFieldProps being called on every render? It is, right? 
				//! In this example, we only have a single component, but real forms have multiple components. Is that causing unnecessary renders
				if (!ref.current.fields[field]) {return}
				// To avoid the need to persist the synthetic event, we save it as a variable
				const theValue = e.target.value;
				dispatch({
					type: "change",
					payload: { [field]: theValue },
				});
			},
			name: field,
			value: state.values[field],
		}),
	};
};
