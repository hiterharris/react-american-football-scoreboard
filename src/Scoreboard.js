import React, {Component} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

export default class Scoreboard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <section className="scoreboard">
                <div className="topRow">
                <div className="home">
                    <h2 className="home__name">Lions</h2>
                    <div className="home__score">{this.props.scoreLions}</div>
                </div>
                <div className="timer">00:03</div>
                <div className="away">
                    <h2 className="away__name">Tigers</h2>
                    <div className="away__score">{this.props.scoreTigers}</div>
                </div>
                </div>
                <BottomRow />
          </section>
        );
    }
}
