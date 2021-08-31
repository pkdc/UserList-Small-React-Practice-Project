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

		if (username.length === 0) {
			alert("Please enter username");
			return null;
		}

		if (age < 0) {
			alert("Please enter a valid age");
			return null;
		}

		const userData = {
			username: username,
			age: age,
			id: Math.random().toString(),
		};

		props.onSaveUserData(userData);

		setUsername("");
		setAge("");
	};

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<label htmlFor="uname">UserName</label>
				<input
					type="string"
					id="uname"
					onChange={usernameChangeHandler}
					value={username}
				/>

				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" onChange={ageChangeHandler} value={age} />

				<Button type="submit">Submit</Button>
			</form>
		</Card>
	);
};

export default UserForm;
