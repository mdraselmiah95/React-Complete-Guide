import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";
import { useContext, useReducer, useState } from "react";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
// import Counter from "./components/Counter";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  const themeContext = useContext(ThemeContext);

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

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  return (
    <>
      <div className={`App ${themeContext}`}>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList
          videos={videos}
          dispatch={dispatch}
          editVideo={editVideo}
        ></VideoList>
      </div>
      {/* <Counter /> */}
    </>
  );
}

export default App;
