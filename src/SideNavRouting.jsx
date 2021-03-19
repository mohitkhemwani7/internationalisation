import React from "react";
import {Redirect, Route, Router, Switch} from "react-router";
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import Sidebar from "./components/Sidebar";
import {Content, Header} from "antd/es/layout/layout";
import Users from "./pages/Users";
import Files from "./pages/files";
import Dashboard from "./pages/Dashboard";
import history from "./history";
import {BrowserRouter} from "react-router-dom";
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

class SideNavRouting extends React.Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };
    render() {
        const {collapsed} = this.state;
        return(
            <BrowserRouter>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <Sidebar />
                    </Sider>
                    <Layout>
                        <Content style={{ padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                            <Switch>
                                <Route exact path="/users" component={Users} />
                                <Route exact path="/files" component={Files} />
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Redirect to="/users" from="/" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}
export default SideNavRouting
