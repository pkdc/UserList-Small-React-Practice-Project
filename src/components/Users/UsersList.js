import React from "react";
import User from "./User";
import Card from "../UI/Card";

const UsersList = (props) => {
	return (
		<Card>
			<ul>
				{props.usersDataList.map((userData) => (
					<User
						key={userData.id}
						newUsername={userData.username}
						newAge={userData.age}
					/>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
