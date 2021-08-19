import React, {useState, useEffect} from "react";
import BotsPage from "./BotsPage";

const API = "http://localhost:8002/bots"


function App() {
  
  const [bots, setBots] = useState([])
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json()
    .then(bots => setBots(bots)))
  }, []);
  
  console.log(bots)

  return (
    <div className="App">
      <BotsPage bots={bots} setBots={bots} />
    </div>
  );
}

export default App;
