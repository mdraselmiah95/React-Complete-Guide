import Video from "./components/Video";
import "./App.css";
import videos from "./components/data/data";

function App() {
  const collection = videos;

  return (
    <div className="App">
      <h2>Videos:</h2>
      {collection.map((video) => (
        <Video video={video} key={video.name || video.id} />
      ))}
    </div>
  );
}

export default App;
