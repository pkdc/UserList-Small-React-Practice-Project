import React, { useState } from "react";
import User from "./User";
import Card from "../UI/Card";

const UserList = (props) => {
	return (
		<Card>
			<ul>
				{props.userDataList.map((userData) => (
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

export default UserList;
