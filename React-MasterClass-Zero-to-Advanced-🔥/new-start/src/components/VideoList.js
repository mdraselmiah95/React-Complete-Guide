import React from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({ videos, editVideo, dispatch }) => {
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          video={video}
          dispatch={dispatch}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
};

export default VideoList;
