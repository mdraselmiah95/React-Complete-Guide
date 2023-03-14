import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";
import { useReducer, useState } from "react";
import VideoList from "./components/VideoList";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function addVideo(video) {
    dispatch({ type: "ADD", payload: video });
  }

  function deleteVideo(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    dispatch({ type: "UPDATE", payload: video });
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
