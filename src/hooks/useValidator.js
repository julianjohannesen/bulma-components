/** @format */

// SAMPLE FORM
const LoginForm = (props) => {
	const { getFieldProps, getFormProps, errors } = useValidation(config);
	return (
		<form {...getFormProps()}>
			<label>
				Username
				<br />
				<input {...getFieldProps("username")} />
				{errors.username && (
					<div className="error">{errors.username}</div>
				)}
			</label>

			<label>
				Password
				<br />
				<input {...getFieldProps("password")} />
				{errors.password && (
					<div className="error">{errors.password}</div>
				)}
			</label>

			<button type="submit">Submit my form</button>
		</form>
	);
};

// HOOK STUFF

// SAMPLE CONFIG
const config = {
	fields: {
		username: {
			isRequired: { message: "Please fill out a username" },
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

// INITIAL STATE
const initialState = {
	values: {},
	errors: {},
	submitted: false,
};

// REDUCER
// A reducer that will be passed to useReduce, along with the initial state
function validationReducer(state, action) {
	// Depending on action type, switch cases
	switch (action.type) {
		// On change, create a new state object to use later
		case "change":
			// A new state object
			const values = { ...state.values, ...action.payload };
			// Return an object with the original state and the new state key:value pair
			return {
				// Original state
				...state,
				// Updated state
				values,
			};
		// On submit, return a new state object with previous state and a new submitted flag
		case "submit":
			return {
				// Original state
				...state,
				// New submitted flag
				submitted: true,
			};
		// On a call to validate return a new state object and a new errors object
		case "validate":
			return {
				...state,
				// When useEffect calls its callback, the callback calls validateFields and stores any errors. Those errors will be the payload here.
				errors: action.payload,
			};
		default:
			// Handle errors
			throw new Error("Unknown action type");
	}
}

// VALIDATION FUNCTIONS

// VALIDATION HOOK
// The validation hook takes a config object and returns an object with properties for an array of errors, and methods for getting form props and getting field props
const useValidation = (config) => {
	// Pass the reducer and initial state to useReducer and store the state and the dispatch function
	const [state, dispatch] = useReducer(validationReducer, initialState);

	// see below
	const constantConfig = useRef(config);

	// We can't use useEffect here, because in this particular case useEffect will run every render, even when the config object has NOT been modified. That's because, given that we're passing config as an argument to validateFields below, the config object is newly created on every render. useEffect doesn't care whether those previous and current versions of config have exactly the same keys and values. It only cares that they aren't the same specific object. It will recognize that and call useEffect again, causing an infinite loop. So we need to use useDeepCompareEffect. It might be possible to use useMemo or useRef instead to save the config object and then use useEffect.
	useEffect(() => {
		// The validateFields function takes all of our form fields and their rules and returns any error messages. The fields are in state.fields and the rules are in config.fields
		const errors = validateFields(state.fields, constantConfig.fields);

		// Now call dispatch to use the reducer to figure out what to do with action.type "validate" and the errors provided
		dispatch({ type: "validate", payload: errors });
	}, [state.fields, constantConfig.fields]);

	// Return an object with the errors, getFormProps, and getFieldProps
	return {
		errors: state.errors,
		// getFormProps will supply any form props 
		getFormProps: () => ({
			onSubmit: (e) => {
				e.preventDefault();
				dispatch({ type: "submit" });
				if (constantConfig.onSubmit) {
					constantConfig.onSubmit(state);
				}
			},
		}),
		// For the given field, supplies a change handler as well as the field name and its value.
		getFieldProps: (fieldName) => ({
			// The change handler calls dispatch, passing in an object with the action type ("change") and the field value to update (those are the type and payload). The reducer that we passed to useReducer provides a function that specifies how the action type affects state. In this case, we're updating state.
			onChange: (e) => {
				// If the field name isn't part of the form config, exit. The reducer will provide an error message.
				if (!constantConfig.fields[fieldName]) {
					return;
				}

				// Dispatch the information needed to update state
				dispatch({
					type: "change",
					payload: { [fieldName]: e.target.value },
				});
			},
			// The field name
			name: fieldName,
			// The current value of that field
			value: state.values[fieldName],
		}),
	};
};
