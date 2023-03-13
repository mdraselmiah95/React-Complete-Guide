import Video from "./components/Video";
import "./App.css";

function App() {
  let obj = {
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
    verified: false,
  };

  return (
    <div className="App">
      <h2>Videos:</h2>
      <Video {...obj} />
      <Video
        title="NodeJs Learning"
        views="100k"
        time="14.10"
        channel="js Dude"
        verified={true}
      />
      <Video
        title="ExpressJs Learning"
        views="170k"
        time="1 years ago"
        channel="Express Boss"
        verified={false}
      />
      <Video
        title="MongoDBJs Learning"
        views="170k"
        time="1 years ago"
        channel="MongoBD Boss"
        verified={true}
      />
    </div>
  );
}

export default App;
