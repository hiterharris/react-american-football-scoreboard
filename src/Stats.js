import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

export default class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gb: '',
            Chi: '',
        }
    }

componentDidMount() {
    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=8ed083931a1e4ce8bb67d4e6ac28238d')
    .then(response => {
        // console.log(response);
        this.setState({
            Gb: response.data[12],
            Chi: response.data[6],
        })
    })
}

    render() {
        console.log(this.state.Gb);
        return (
            <section className='stats_container'>
                <div className='team_container home_stats'>
                    <h1>{this.state.Gb.FanDuelName}</h1>
                    <p>Conference: {this.state.Gb.Conference} </p>
                    <p>Division: {this.state.Gb.Division}</p>
                    <p>Head Coach: {this.state.Gb.HeadCoach}</p>
                </div>
                <div className='team_container away_stats'>
                    <h1>{this.state.Chi.FanDuelName}</h1>
                    <p>Conference: {this.state.Chi.Conference} </p>
                    <p>Division: {this.state.Chi.Division}</p>
                    <p>Head Coach: {this.state.Chi.HeadCoach}</p>
                </div>
            </section>
        );
    }
}
