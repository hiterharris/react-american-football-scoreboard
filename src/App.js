import React, {useState} from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';
import Stats from './Stats';

function App() {

  const [scoreLions, setScoreLions] = useState(0);
  const [scoreTigers, setScoreTigers] = useState(0);

  return (
    <div className='container'>
      <Scoreboard scoreLions={scoreLions} scoreTigers={scoreTigers} />
      <Buttons scoreLions={scoreLions} scoreTigers={scoreTigers} setScoreLions={setScoreLions} setScoreTigers={setScoreTigers} />
      <Stats />
      <p>Stats from <a href='https://sportsdata.io/developers/api-documentation/nfl#' target="_blank">Sports Data API Solutions</a></p>
    </div>
  );
}

export default App;
