import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	// adding 'btn' prefix for better understanding of what's happenning
	const combinedClasses = `${styles["button"]} ${props.btnClassName}`;
	return (
		<button
			className={combinedClasses}
			// provide a fallback in case that the type is not being set
			type={props.btnType || "button"}
			onClick={props.btnOnClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
