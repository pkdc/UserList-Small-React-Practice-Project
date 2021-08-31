import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
	const [userList, setUserList] = useState([]);

	const onSaveUserData = (data) => {
		console.log(data);
		setUserList((prevList) => {
			return [...prevList, data];
		});
	};

	return (
		<div>
			<AddUser pass={onSaveUserData} />
			<UserList userDataList={userList} />
		</div>
	);
}

export default App;
