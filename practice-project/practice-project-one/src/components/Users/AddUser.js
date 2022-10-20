import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterUserName.trim().length === 0 || enterUserAge.trim() === 0) {
      return;
    }
    if (Number(enterUserAge) < 1) {
      return;
    }
    console.log(enterUserName, enterUserAge);
    setEnterUserAge("");
    setEnterUserName("");
  };

  const userNameChangeHandler = (e) => {
    setEnterUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnterUserAge(e.target.value);
  };

  return (
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
  );
};

export default AddUser;
