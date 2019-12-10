import React, { Component } from 'react';
import Axios from 'axios';

import ProgressBar from './components/progressBar'
import LoginPage from './containers/LoginPage'

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        // detectStatus-> 1=detecting 2=detectSuccess 3=detectFail
        this.state = { detectStatus: 1 };
    }

    componentWillMount() {
        //TODO: use tcp socket to detect device
        Axios.get("/detect")
            .then((resp) => {
                console.log(resp.data);
                let data = resp.data;
                if (data.result == "success") {
                    console.log("detect ok");
                    this.setState({ detectStatus: 2 });
                }
            })
            .catch(function (error) {
                this.setState({ detectStatus: 3 });
            });
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.detectStatus === 1 && <ProgressBar name="aaa" />
                }
                {
                    this.state.detectStatus === 2 && <LoginPage></LoginPage>
                }
            </div>
        );
    }
}

export default App;
