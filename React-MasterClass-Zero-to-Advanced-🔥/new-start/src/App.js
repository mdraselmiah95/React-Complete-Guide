import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";
import { useState } from "react";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideo(video) {
    setVideos([
      ...videos,
      {
        ...video,
        id: videos.length + 1,
      },
    ]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <div className="App">
      <AddVideo addVideo={addVideo} editableVideo={editableVideo}></AddVideo>
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      ></VideoList>
    </div>
  );
}

export default App;
