import './App.css';
import React from "react";
import {Avatar, Breadcrumb, ConfigProvider, Radio, Layout, Menu, Select, Dropdown} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/lib/layout/layout";
import Title from "antd/es/typography/Title";
import Icon, {UserOutlined} from "@ant-design/icons";
import SubMenu from "antd/es/menu/SubMenu";
import Sidebar from "./components/Sidebar";
import SideNavRouting from "./SideNavRouting";
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import arEG from 'antd/es/locale/ar_EG'
import heIL from 'antd/es/locale/he_IL';
import hiIN from 'antd/es/locale/hi_IN';


import moment from 'moment';
import 'moment/locale/zh-cn';
import {BrowserRouter} from "react-router-dom";
import {Option} from "antd/es/mentions";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            locale: enUS,
            direction:'ltr'
        };
    }

    changeLocale = e => {
        const localeValue = e.target.value;
        const directionValue =e.target.direction;
        this.setState({ locale: localeValue });
        // if(localeValue === zhCN || arEG){
        //     this.setState({direction:'rtl'})
        // }
        // if(localeValue == enUS ||  hiIN){
        //     this.setState({direction:'ltr'})
        // }
        this.setState({direction : directionValue})
    };

    render() {
        const { locale } = this.state;

        return (
            <ConfigProvider direction={this.state.direction} locale={locale}>
                <Header className="site-layout-background"  style={{ padding: 0 }} >
                    {/*<h2 style={{ padding: 10, color:'white' }}>PredApp</h2>*/}
                    <Radio.Group value={locale} onChange={this.changeLocale}>
                        <Radio.Button key="en" value={enUS} direction='ltr'>
                            English
                        </Radio.Button>
                        <Radio.Button key="cn" value={zhCN} direction='ltr'>
                            中文
                        </Radio.Button>
                        <Radio.Button key="eg" value={arEG} direction='rtl'>
                            Arabic
                        </Radio.Button>
                        <Radio.Button key="il" value={heIL} direction='rtl'>
                            Hebrew
                        </Radio.Button>
                        <Radio.Button key="in" value={hiIN} direction='ltr'>
                            Hindi
                        </Radio.Button>
                    </Radio.Group>
                    {/*<Dropdown overlay={menu} trigger={['click']}>*/}
                    {/*    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>*/}
                    {/*        Languages <Icon type="down" />*/}
                    {/*    </a>*/}
                    {/*</Dropdown>,*/}
                    {/*<Select showSearch style={{ width: 200 }}   >*/}
                    {/*    <Option value="Arabic">Arabic</Option>*/}
                    {/*    <Option value="lucy">lucy</Option>*/}
                    {/*</Select>*/}
                </Header>
                <SideNavRouting/>
            </ConfigProvider>
        );
    }
}

export default App;
