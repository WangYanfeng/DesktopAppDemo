import React, { Component } from 'react';
import './progressBar.css';

function ProgressDiv(props) {
    let deg = 360 * props.percent / 100;
    return (
        <div className={props.percent > 50 ? "progress-pie-chart gt-50" : "progress-pie-chart"}>
            <div className="ppc-progress">
                <div className="ppc-progress-fill" style={{ transform: 'rotate(' + deg + 'deg)' }}></div>
            </div>
            <div className="ppc-percents">
                <div className="pcc-percents-wrapper">
                    <span>Detect Cloud Edge</span>
                </div>
            </div>
        </div>
    )
}

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = { percent: 5 };
    }

    //挂载：DOM加载组件时
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    //卸载：DOM移除组件时
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let percent = this.state.percent;

        if (this.state.percent >= 100) {
            this.state.percent = 0;
        } else {
            percent += 5;
            this.setState({ percent: percent });
        }
    }

    render() {
        return (
            <ProgressDiv percent={this.state.percent}></ProgressDiv>
        );
    }

}

export default ProgressBar;