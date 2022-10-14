import "./App.css";
import Layout from "./components/layout/Layout";
import { Router, Link } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Layout>
        <Home path="/" />
        <About path="/about" />
      </Layout>
    </Router>
  );
}

export default App;
