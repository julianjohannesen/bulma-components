10-05-20:
- ~~install ruby and sass gem~~
- ~~test compile css~~
- ~~add form component~~
- ~~add input component~~
- ~~add button component~~
- ~~add conditional rendering in input component~~
- add validation
    - read up on the JS validation API
    - read up on form validation with react hooks
        - https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms
        - https://upmostly.com/tutorials/form-validation-using-custom-react-hooks
    - read up on form validation with Bulma classes
- decide how to handle passing in optional classes to form elements
- decide how to handle passing in initial form values
- add aria labels
- add a show/hide password feature with that little eye icon with the password input
- add a "remember me" feature at login
- Make sure that a form can't be submitted more than once with the same values, maybe with a dialogue element

In the useForm hook, I'm not sure what problem is that we're trying to solve that requires us to use useRef and useEffect. 

- Do we need to do this, just to initialize the form values? I've noticed that if you don't initialize the form values, then setting an input's value to formValues.fname or whatever won't work, because the object is null. 

- Do we have to use useEffect in order to be able to send a request to the server that could be sent back with error messages without having the form reset? Is that even true? Is this a good way to do that? The form will only reset if the page reloads and we set the useRef again. It will not reset if the form goes through multiple renders.

- Is it because React retains the user's responses, even after the form has been submitted?

QUESTION - If you have a bunch of constraints on a form input, does violating a constraint generate an immediate message?