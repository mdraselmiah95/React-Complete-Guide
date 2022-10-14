import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  );
}

export default App;
