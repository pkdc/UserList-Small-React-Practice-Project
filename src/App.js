import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const saveUserDataHandler = (data) => {
		console.log(data);
		setUsersList((prevList) => {
			return [...prevList, data];
		});
	};

	return (
		<div>
			<AddUser onSaveUserData={saveUserDataHandler} />
			<UsersList usersDataList={usersList} />
		</div>
	);
}

export default App;
