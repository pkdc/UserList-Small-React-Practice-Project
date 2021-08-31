import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import "./AddUser.module.css";

const UserForm = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setAge(+event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const userData = {
			username: username,
			age: age,
			id: Math.random().toString(),
		};

		props.pass(userData);
	};

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<label htmlFor="uname">UserName</label>
				<input type="string" id="uname" onChange={usernameChangeHandler} />

				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" onChange={ageChangeHandler} />

				<Button type="submit">Submit</Button>
			</form>
		</Card>
	);
};

export default UserForm;
