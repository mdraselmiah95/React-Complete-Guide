import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";
import { useContext, useReducer, useState, lazy, Suspense } from "react";
import ThemeContext from "./context/ThemeContext";
import { BallTriangle } from "react-loader-spinner";
// import Dummy from "./components/Dummy";

const Dummy = lazy(() => import("./components/Dummy.js"));

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [show, setShow] = useState(false);

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

  // const [videos, dispatch] = useReducer(videoReducer, videoDB);

  return (
    <>
      <div className={`App ${themeContext}`}>
        {/* <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo> */}
      </div>
      <div>
        <button
          onClick={() => setShow(true)}
          style={{ padding: "1rem 2rem", color: "black", fontWeight: "bolder" }}
        >
          Show
        </button>
        {show ? (
          <Suspense
            fallback={
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
              />
            }
          >
            <Dummy />
          </Suspense>
        ) : null}
      </div>
    </>
  );
}

export default App;
