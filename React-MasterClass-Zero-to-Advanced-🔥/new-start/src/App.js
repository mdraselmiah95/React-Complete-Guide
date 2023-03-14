import Video from "./components/Video";
import "./App.css";
import videoCollection from "./data/data";
import PlayButton from "./components/PlayButton";
import AddVideo from "./components/AddVideo";

function App() {
  return (
    <div className="App">
      <AddVideo />
      {videoCollection.map((video) => (
        <Video video={video} key={video.name || video.id}>
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;
