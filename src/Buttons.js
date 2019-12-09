import React, {Component} from 'react';
import './App.css';

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='buttons'>
                <div className='homeButtons'>
                    <button className='homeButtons__touchdown' onClick={() => this.props.setScoreLions(this.props.scoreLions + 7)}>
                        Home Touchdown
                    </button>
                    <button className='homeButtons__fieldGoal' onClick={() => this.props.setScoreLions(this.props.scoreLions + 3)}>
                        Home Field Goal
                    </button>
                </div>
                <div className='awayButtons'>
                    <button className='awayButtons__touchdown' onClick={() => this.props.setScoreTigers(this.props.scoreTigers + 7)}>
                        Away Touchdown
                    </button>
                    <button className='awayButtons__fieldGoal' onClick={() => this.props.setScoreTigers(this.props.scoreTigers + 3)}>
                        Away Field Goal
                    </button>
                </div>
            </section>
        );
    }
}
