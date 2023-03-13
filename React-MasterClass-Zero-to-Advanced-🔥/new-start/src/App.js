import Video from "./components/Video";
import "./App.css";
import videoCollection from "./components/data/data";

function App() {
  return (
    <div className="App">
      <h2>Videos:</h2>
      {videoCollection.map((video) => (
        <Video video={video} key={video.name || video.id} />
      ))}
    </div>
  );
}

export default App;
