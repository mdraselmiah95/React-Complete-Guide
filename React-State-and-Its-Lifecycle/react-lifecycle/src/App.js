import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
    </Router>
  );
}

export default App;
