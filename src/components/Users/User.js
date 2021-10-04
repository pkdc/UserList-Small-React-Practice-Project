import React from "react";
import styles from "./User.module.css";

const User = (props) => {
	return (
		<li className={styles["list-item"]}>
			<span>{props.newUsername}</span>
			<span> ({props.newAge} years old)</span>
		</li>
	);
};

export default User;
