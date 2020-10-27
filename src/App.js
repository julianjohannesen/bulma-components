import React from "react";
//import logo from './logo.svg';
import "./App.css";
import NameAndAge from "./components/NameAndAge.js";
import "./css/styles.css";

function App() {
	return (
		<div className="App">
			<div className="section is-fullheight">
				<div className="container">
					<div className="column is-4 is-offset-4">
						<div className="box">
              				<NameAndAge />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
