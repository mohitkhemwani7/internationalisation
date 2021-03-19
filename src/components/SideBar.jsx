import React from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import history from "../history";
import {Route, Router, Switch} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import Files from "../pages/files";
import Dashboard from "../pages/Dashboard";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class SideBar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    handleSelect =()=>{

    }
    render() {
        const {collapsed} = this.state;
        return (
            <BrowserRouter history={history}>
            <React.Fragment>
                <Header className="site-layout-background" style={{ padding: 0 }}  />
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined/>}>
                                Option 1
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2" onSelect={this.handleSelect} icon={<DesktopOutlined/>}>
                                Option 2
                                <Link to="/page2" />
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined/>}>
                                Files
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content style={{margin: '0 16px'}}>
                            {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                            {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                            {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                            {/*</Breadcrumb>*/}
                            {/*<div className="site-layout-background" style={{padding: 24, minHeight: 360}}>*/}
                            {/*    Bill is a cat.*/}
                            {/*</div>*/}
                            <Switch>
                            <Route exact path="/" component={Files} />
                            <Route exact path="/page2" component={Dashboard} />
                            </Switch>

                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default SideBar;
