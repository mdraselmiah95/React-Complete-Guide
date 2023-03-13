import React from "react";

const Video = (props) => {
  return (
    <div>
      <img src="https://picsum.photos/seed/picsum/300/300" alt="Tower" />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Video;
