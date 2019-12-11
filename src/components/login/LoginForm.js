import React from 'react';
import './loginForm.css';

//受控组件
//非受控组件 <input type="password" ref={(pwd) => this.password = pwd} name="password" />   ==>    this.password.value
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", password: "" };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangePwd(event) {
        this.setState({ password: event.target.value });
    }
    handleLoginClick(event) {
        this.props.handleLoginClick(this.state.name, this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            <form>
                <div className="input-container">
                    <input type="text" required="required" value={this.state.name} name="name" onChange={this.handleChangeName} />
                    <label>Username</label>
                    <div className="bar"></div>
                </div>
                <div className="input-container">
                    <input type="password" required="required" value={this.state.password} name="password" onChange={this.handleChangePwd} />
                    <label>Password</label>
                    <div className="bar"></div>
                </div>
                <div className="button-container">
                    <button onClick={this.handleLoginClick}><span>Go</span></button>
                </div>
                <div className="footer"><a href="#">Forgot your password?</a></div>
            </form >
        )
    }
}

export default LoginForm