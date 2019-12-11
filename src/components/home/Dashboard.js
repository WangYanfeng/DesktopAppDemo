import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';


const { Content } = Layout;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false, activeMenu: 1 };
        this.handleMenuSelected = this.handleMenuSelected.bind(this);
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    handleMenuSelected(menuType) {
        console.log(menuType);
    }

    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><span className="header_span">Dashboard</span></Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Chart.</div>
            </Content>
        );
    }
}

export default Dashboard;