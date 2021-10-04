import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
	// adding 'card' prefix for better understanding of what's happenning
	const combinedClasses = `${styles["card"]} ${props.cardClassName}`;
	return <div className={combinedClasses}>{props.children}</div>;
};

export default Card;
