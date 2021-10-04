import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const UserForm = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		// "+" casts the value to int
		setEnteredAge(+event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// not working
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			// alert("Please enter username");
			// return null;
			return;
		}

		if (enteredAge < 0) {
			// alert("Please enter a valid age");
			// return null;
			return;
		}

		const userData = {
			username: enteredUsername,
			age: enteredAge,
			id: Math.random().toString(),
		};

		props.onSaveUserData(userData);

		setEnteredUsername("");
		setEnteredAge("");
	};

	return (
		<Card cardClassName={styles.inputForm}>
			<form onSubmit={submitHandler}>
				<label htmlFor="uname">Username</label>
				<input
					type="string"
					id="uname"
					onChange={usernameChangeHandler}
					value={enteredUsername}
				/>

				<label htmlFor="age">Age (Years)</label>
				<input
					type="number"
					id="age"
					onChange={ageChangeHandler}
					value={enteredAge}
				/>

				<Button btnType="submit">Submit</Button>
			</form>
		</Card>
	);
};

export default UserForm;
