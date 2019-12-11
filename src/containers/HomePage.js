import React, { Component } from 'react';
import { Layout, Avatar } from 'antd';

import MenuBar from '../components/home/MenuBar'
import Dashboard from '../components/home/Dashboard'

import '../components/home/home.css';
import 'antd/dist/antd.css';

const { Header, Footer } = Layout;

class HomePage extends Component {
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
            <Layout style={{ minHeight: '100vh' }}>
                <MenuBar handleMenuSelected={this.handleMenuSelected}></MenuBar>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div className="header_tool_bar">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                        </div>
                    </Header>
                    {
                        this.state.activeMenu === 1 && <Dashboard></Dashboard>
                    }
                    <Footer style={{ textAlign: 'center' }}>©2019 Created by Trend Micro</Footer>
                </Layout>
            </Layout >
        );
    }
}

export default HomePage;