import React, { useEffect, useReducer, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Card from "./components/UI/Card/Card";

// useReducer
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedInfo = localStorage.getItem("isLogged");
    if (storedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogged", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogged");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>

      <Card>
        <div>
          Count: {state.count}
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default App;
