import React, { Component } from 'react';
import request from 'request';

export default class LeagueSelect extends Component {
    state = {
        leagueName: '',
        leagueID: ''
    };

    componentDidMount() {
        console.log('component has mounted');
    }
    render() {
        return <React.Fragment />;
    }
}
