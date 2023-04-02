import { useContext } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";

function PlayButton({ message, children, onPlay, onPause }) {
  const theme = useContext(ThemeContext);

  let playing = false; // don't use this approach;
  function handleClick(e) {
    console.log(e);
    e.stopPropagation();

    if (playing) onPause();
    else onPlay();

    playing = !playing;
  }

  return (
    <button onClick={handleClick} className={theme}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
