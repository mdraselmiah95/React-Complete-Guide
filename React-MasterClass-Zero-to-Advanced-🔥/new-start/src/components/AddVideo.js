import React from "react";
import "./AddVideo.css";

const AddVideo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <form style={{ padding: "10px" }}>
      <input
        type="text"
        name="title"
        //   onChange={handleChange}
        placeholder="title"
        //   value={video.title}
      />
      <input
        type="text"
        name="views"
        //   onChange={handleChange}
        placeholder="views"
        //   value={video.views}
      />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
};

export default AddVideo;
