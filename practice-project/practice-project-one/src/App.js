import React, { useState, useId } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const id = useId();

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: id }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
