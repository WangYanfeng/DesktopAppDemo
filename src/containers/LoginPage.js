import React, { Component } from 'react';

import LoginForm from '../components/login/LoginForm';
import Axios from 'axios';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    // 状态提升
    handleLoginClick(name, password) {
        Axios.post("/login", {
            name: name,
            password: password
        }).then(res => {
            let resp = res.data;
            console.log(resp);
            if (resp.success) {
                console.log("login success, go to /home");
                this.props.history.push({
                    pathname: '/home',
                });
            } else {
                console.log("login fail");
            }
        }).catch(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Login</h1>
                    <LoginForm handleLoginClick={this.handleLoginClick}></LoginForm >
                </div>
            </div>
        )
    }
}

export default LoginPage;