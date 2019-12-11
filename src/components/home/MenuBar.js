import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import './home.css';
import 'antd/dist/antd.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Dashboard</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="desktop" /><span>Network</span></span>}>
                        <Menu.Item key="2">Interfaces</Menu.Item>
                        <Menu.Item key="3">DNS</Menu.Item>
                        <Menu.Item key="4">Addresses</Menu.Item>
                        <Menu.Item key="5">Bridge</Menu.Item>
                        <Menu.Item key="6">Routing</Menu.Item>
                        <Menu.Item key="7">Services</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Administration</span></span>}>
                        <Menu.Item key="8">System Settings</Menu.Item>
                        <Menu.Item key="9">Device Management</Menu.Item>
                        <Menu.Item key="10">Updates</Menu.Item>
                        <Menu.Item key="11">Maintenance</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="12"><Icon type="security-scan" /><span>Scan</span></Menu.Item>
                    <SubMenu key="sub3" title={<span><Icon type="file" /><span>Device logs</span></span>}>
                        <Menu.Item key="13">Audit lLogs</Menu.Item>
                        <Menu.Item key="14">System Event Log</Menu.Item>
                        <Menu.Item key="15">VPN Log</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="file-done" /><span>Diagnostics</span></span>}>
                        <Menu.Item key="16">Packet Capture</Menu.Item>
                        <Menu.Item key="17">Traffic Tracing</Menu.Item>
                        <Menu.Item key="18">Diagnostic Files</Menu.Item>
                        <Menu.Item key="19">Health Check</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="deployment-unit" /><span>Others</span></span>}>
                        <Menu.Item key="20">Support</Menu.Item>
                        <Menu.Item key="21">About</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default MenuBar;