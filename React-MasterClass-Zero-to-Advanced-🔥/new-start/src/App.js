import Video from "./components/Video";
import "./App.css";
import videoCollection from "./components/data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
      <h2>Videos:</h2>
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
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
