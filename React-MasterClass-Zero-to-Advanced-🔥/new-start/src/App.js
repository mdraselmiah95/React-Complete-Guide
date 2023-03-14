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

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideo = [...videos];
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
  }

  return (
    <div className="App">
      <AddVideo
        addVideo={addVideo}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      ></AddVideo>
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      ></VideoList>
    </div>
  );
}

export default App;
