import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";
import { useState } from "react";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideo(video) {
    setVideos([
      ...videos,
      {
        ...video,
        id: videos.length + 1,
      },
    ]);
  }

  return (
    <div className="App">
      <AddVideo addVideo={addVideo}></AddVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
