import React, { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {
	// const [hewUsername, setNewUsername] = useState("");
	// const [newAge, setNewAge] = useState("");

	// const addUserHandler = () => {
	// 	setNewUsername(props.uData.username);
	// 	setNewAge(props.uData.age);
	// };

	return (
		<li className={styles["list-item"]}>
			<span>{props.newUsername}</span>
			<span> ({props.newAge} years old)</span>
		</li>
	);
};

export default User;
