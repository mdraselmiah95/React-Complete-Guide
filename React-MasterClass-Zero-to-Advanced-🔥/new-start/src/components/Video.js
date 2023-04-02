import React, { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";

const Video = ({ video, dispatch, editVideo }) => {
  const { title, channel = "Code DUD", views, time, verified, id } = video;
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
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
