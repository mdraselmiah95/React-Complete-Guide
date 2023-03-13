import React from "react";
import "./Video.css";

const Video = ({ title, channel, views, time }) => {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://picsum.photos/seed/picsum/300/300" alt="Tower" />
        </div>
        <div className="title">{title}</div>
        <div className="clannel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
};

export default Video;
