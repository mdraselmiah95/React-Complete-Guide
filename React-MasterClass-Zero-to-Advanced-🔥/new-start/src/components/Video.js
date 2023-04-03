import React, { useContext, useEffect } from "react";
import "./Video.css";
import axios from "axios";
import ThemeContext from "../context/ThemeContext";

const Video = ({ video, dispatch, editVideo }) => {
  const { title, channel = "Code DUD", views, time, verified, id } = video;
  const theme = useContext(ThemeContext);

  const URL = "https://jsonplaceholder.typicode.com/users ";

  const fetchData = async () => {
    const { data } = await axios.get(URL);
    console.log(data);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("Video Playing", id);
  //   }, 3000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [id]);

  // /https://jsonplaceholder.typicode.com/users

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
      <button onClick={fetchData}>DATA</button>
    </>
  );
};

export default Video;
