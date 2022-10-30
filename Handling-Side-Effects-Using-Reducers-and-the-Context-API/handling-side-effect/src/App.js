import React, { useEffect, useReducer, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Card from "./components/UI/Card/Card";

// useReducer
const initialValue = { num: 1 };

function applyReducer(state, action) {
  switch (action.type) {
    case "plus":
      return { num: state.num + 1 };
    case "minus":
      return { num: state.num - 1 };
    default:
      throw new Error();
  }
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(applyReducer, initialValue);

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
          <h2>This is The True Value: {state.num}</h2>
          <button onClick={() => dispatch({ type: "plus" })}>Increase</button>
          <button onClick={() => dispatch({ type: "minus" })}>Decrease</button>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default App;
