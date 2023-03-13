import React from "react";
import "./Video.css";

const Video = ({ video }) => {
  const { title, channel = "Code DUD", views, time, verified } = video;
  // let channelJSX;
  // if (verified) {
  //   channelJSX = <div className="channel">{channel} ✅</div>;
  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://picsum.photos/seed/picsum/300/300" alt="Tower" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
        ;
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
};

export default Video;
