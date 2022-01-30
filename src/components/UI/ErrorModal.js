import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	return (
		<div>
			<div className={styles["backdrop"]}></div>
			<Card cardClassName={styles["modal"]}>
				<h2>{props.title}</h2>
				<p>{props.message}</p>
				<Button>OK!</Button>
			</Card>
		</div>

	);
};

export default ErrorModal;
