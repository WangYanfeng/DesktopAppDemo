import React, { Component } from 'react';
import Axios from 'axios';

import ProgressBar from './components/login/progressBar'

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //TODO: use tcp socket to detect device
        Axios.get("/detect")
            .then((resp) => {
                console.log(resp.data);
                let data = resp.data;
                if (data.result === "success") {
                    console.log("detect ok");
                    this.props.history.push({
                        pathname: '/login',
                    });
                }
            })
            .catch(function (error) {
                // this.setState({ detectStatus: 3 });
            });
    }

    render() {
        return (
            <div className="App">
                <ProgressBar />
            </div>
        );
    }
}

export default App;
