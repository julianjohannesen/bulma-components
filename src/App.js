/** @format */

import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Form1 from "./components/Form1.js";
//import Form2 from "./components/Form2.js"
import "./css/styles.css";

function App() {
	// useForm doesn't know what your form fields are, so you need to supply them. Also if you set an input's value to formValues.fname, you'll get an error if you leave the object empty, because you can't get property "fname" of null. I've tried setting all of the keys to "undefined". I've also tried to use a dummy initial value, just so that the the object isn't empty. Another way to get around this is to just use formValues?.fname etc. 
  
	return (
		<div className="App">
			<div className="section is-fullheight">
				<div className="container">
					<div className="column is-4 is-offset-4">
						<div className="box">
              				<Form1 />
							{/* <Form2 /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
