import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	const classes = styles["button"];
	return <button className={classes}>{props.children}</button>;
};

export default Button;
