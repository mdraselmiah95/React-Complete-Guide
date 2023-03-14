import React, { useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ addVideo, editableVideo }) => {
  const [video, setVideo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(video);
    setVideo("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

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
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
};

export default AddVideo;
