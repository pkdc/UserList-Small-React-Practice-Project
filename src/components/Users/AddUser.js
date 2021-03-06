import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		// "+" casts the value to int
		setEnteredAge(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();

		// not entered any value
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Something's Missing",
				message: "Please enter username and age",
			});
			// error = <ErrorModal>Please enter username and age</ErrorModal>;
			// alert("Please enter username");
			// return null;
			// display ErrorModal -> block
			return;
		}

		if (+enteredAge < 0) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age",
			});
			// error = <ErrorModal>Please enter a valid age</ErrorModal>;
			// alert("Please enter a valid age");
			// return null;
			// display ErrorModal -> block
			return;
		}

		const userData = {
			username: enteredUsername,
			age: +enteredAge,
			id: Math.random().toString(),
		};

		props.onSaveUserData(userData);

		setEnteredUsername("");
		setEnteredAge("");
		setError("");
	};

	const closeModalHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					onClose={closeModalHandler}
					title={error.title}
					message={error.message}
				/>
			)}
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
		</div>
	);
};

export default AddUser;
