import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState("");
  const [error, setError] = useState();

  //Simple ways to handle anything.
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterUserName.trim().length === 0 || enterUserAge.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (Number(enterUserAge) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enterUserName, enterUserAge);
    setEnterUserAge("");
    setEnterUserName("");
  };

  const userNameChangeHandler = (e) => {
    setEnterUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnterUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
