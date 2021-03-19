import React from "react";
import { Menu} from "antd";
import {DashboardOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import history from "../history";
import {Link} from "react-router-dom";

class Sidebar extends React.Component{
    handleUserClick =()=>{
        console.log("In Users")
        history.push('/users')
    }
    handleDashboardClick =()=>{
        console.log("In Dashboard")
        history.push('/dashboard')
    }
    handleFileClick =()=>{
        console.log("In Files")
        history.push('/files')
    }
    render() {
        return(
            <div>
                {/*<div style={{height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>*/}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={this.handleUserClick} >
                        <UserOutlined  />
                        <Link to='/users'/>
                        <span> Users</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={this.handleDashboardClick}>
                        <DashboardOutlined />
                        <Link to='/dashboard'/>
                        <span> Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.handleFileClick}>
                        <UploadOutlined />
                        <Link to='/files'/>
                        <span> Files</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Sidebar
