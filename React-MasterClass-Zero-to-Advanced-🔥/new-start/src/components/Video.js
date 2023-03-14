import React from "react";
import "./Video.css";

const Video = ({ video, deleteVideo, editVideo }) => {
  const { title, channel = "Code DUD", views, time, verified, id } = video;

  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          EDIT
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Tower" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
};

export default Video;
