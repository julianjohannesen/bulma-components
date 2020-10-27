/** @format */

// This is a hook used in a tutorial from Sergio Marin: 
// https://itnext.io/form-validation-with-react-hooks-ab0dbba23b9f

// The hook is complex and its implementation is equally complex. It's unlike most of the other form hooks I've been experimenting with.

export default function useValidatedForm(
    // Initial field values
    fields = {},
    // For validation?
    descriptors = [],
    // Validation functions?
	validators = ValidaJS.validators
) {
    // Errors container
    const initialErrorsObj = emptyErrorFactory(fields);
    // Initial values container
    const initialState = stateFactory(fields);
    // Store initial field values in state
    const [state, setState] = useState(initialState);
    // Store validation state in state
	const [validation, setValidation] = useState({
		valid: true,
		errors: initialErrorsObj,
    });
    
    // Take descriptors and validators and use them to make rules
	const rulesBy = rulesByNameFactory(descriptors, validators);
    
    // Create a form container
    const form = formDataFactory(
		state,
		setState,
		setValidation,
		validation,
		rulesBy
	);

    // get form data
    const getData = () => getDataFromState(state);

    // set form data
    const setData = (data) => setState(stateFactory(data));
    
    // validate form
	const validate = () => {

		const newValidations = ValidaJS.validate(
			rulesBy.default,
			getDataFromState(state)
        );
        
		setValidation({
			...newValidations,
			errors: { ...initialErrorsObj, ...newValidations.errors },
        });
        
		return newValidations.valid;
	};

	return [
        // The form object
        form, 
        // The errors object
        validation, 
        // A function to validate the whole form
        validate, 
        // Get values in same form (signature) as initial values passed in
        getData, 
        // Set values by passing in object in same form (signature) as initial values passed in
        setData
    ];
}
