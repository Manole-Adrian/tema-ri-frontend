import logo from "./logo.svg";
import "./App.css";
import WebsiteTile from "./components/WebsiteTile";
import React from "react";
import adrianImg from "./adrian.jpg"
import mimiImg from "./mimi.jpg"

// async function getTimes() {
//   const response = await fetch("http://127.0.0.1:5000/list");
//   const times = await response.json();
//   console.log(times)
//   return times;
// }

function App() {
  // let times;
  const [times,setTimes] = React.useState([])
  React.useEffect(() => {
    async function getTimes() {
      const response = await fetch("http://adrianmanole1997.pythonanywhere.com/list");
      const times = await response.json();
      console.log(times)
      setTimes(times)
    }
    getTimes()
  },[])
  // console.log(times)

  return (
    <div className="App">
      <div className="hero">
        <h1>Down Detector</h1>
        <h3>Un website realizat de Manole Adrian si Serea Mihaela</h3>
        <div className="heroImages">
        <img src={adrianImg} alt="adrian"></img>
        <img src={mimiImg} alt="mimi"></img>

        </div>
      </div>
      <div className="content">
        <p> Graficele reprezinta timpul de raspuns de la backend catre websiteul precizat. Pe axa Oy este timpul de raspuns in secunde, iar pe Axa Ox este timpul (aproximativ) de la request in secunde</p>
        <div className="tilesContainer">

        {times ? Object.keys(times).map(function (key, index) {
          // console.log(times[key])
          return <WebsiteTile title={key} times={times[key]}/>;
        }) : <div></div>}
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
