import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Videos:</h2>
      <Video
        title="ReactJs Learning"
        views="100k"
        time="10.00"
        channel="Stack"
      />
      <Video
        title="NodeJs Learning"
        views="100k"
        time="14.10"
        channel="js Dude"
      />
      <Video
        title="ExpressJs Learning"
        views="170k"
        time="1 years ago"
        channel="Express Boss"
      />
    </div>
  );
}

export default App;
