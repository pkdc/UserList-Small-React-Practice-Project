import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
	const [userList, setUserList] = useState([]);

	const saveUserDataHandler = (data) => {
		console.log(data);
		setUserList((prevList) => {
			return [...prevList, data];
		});
	};

	return (
		<div>
			<AddUser onSaveUserData={saveUserDataHandler} />
			<UserList userDataList={userList} />
		</div>
	);
}

export default App;
