import React, { useCallback } from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({ videos, editVideo, dispatch }) => {
  const play = useCallback(() => console.log("Playing.."), []);
  const pause = useCallback(() => console.log("pause"), []);
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          video={video}
          dispatch={dispatch}
          editVideo={editVideo}
        >
          <PlayButton onPlay={play} onPause={pause}>
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
};

export default VideoList;
