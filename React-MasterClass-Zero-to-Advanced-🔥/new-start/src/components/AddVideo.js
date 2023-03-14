import React, { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ editableVideo, dispatch }) => {
  const [video, setVideo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <form style={{ padding: "10px" }}>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title || ""}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views || ""}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "EDIT" : "ADD"}-VIDEO
      </button>
    </form>
  );
};

export default AddVideo;
