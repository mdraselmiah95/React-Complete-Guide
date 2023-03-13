import "./App.css";

function App() {
  const name = "This is Rasel";
  return (
    <div className="App-header">
      <h2>{name}</h2>
      <Demo />
    </div>
  );
}

function Demo() {
  return (
    <div className="App-header">
      <h2>This is a Demo Tool.</h2>
    </div>
  );
}

export default App;
