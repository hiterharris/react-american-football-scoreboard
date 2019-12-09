import React, {useState} from "react";
import "./App.css";
import Scoreboard from './Scoreboard';

function App() {

  const [scoreLions, setScoreLions] = useState(0);
  const [scoreTigers, setScoreTigers] = useState(0);


  return (
    <div className="container">
      <Scoreboard scoreLions={scoreLions} scoreTigers={scoreTigers} />
      <section className="buttons">
        <div className="homeButtons">
            <button className="homeButtons__touchdown" onClick={() => setScoreLions(scoreLions + 7)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => setScoreLions(scoreLions + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => setScoreTigers(scoreTigers + 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => setScoreTigers(scoreTigers + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
