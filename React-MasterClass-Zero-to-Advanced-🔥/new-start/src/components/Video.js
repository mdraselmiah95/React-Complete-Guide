import React from "react";
import "./Video.css";

const Video = ({ video }) => {
  const { title, channel = "Code DUD", views, time, verified, id } = video;

  return (
    <>
      <div className="container">
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
