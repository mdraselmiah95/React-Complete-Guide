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

  function deleteVideo(id) {}

  return (
    <div className="App">
      <AddVideo addVideo={addVideo}></AddVideo>
      <VideoList videos={videos} deleteVideo={deleteVideo}></VideoList>
    </div>
  );
}

export default App;
