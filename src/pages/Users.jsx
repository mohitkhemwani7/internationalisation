import React from 'react';
import {Button, Calendar, DatePicker, Popconfirm, Select, Table, TimePicker, Transfer} from "antd";
import {Option} from "antd/es/mentions";
import Modal from "antd/es/modal/Modal";

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { RangePicker } = DatePicker;


class Users extends React.Component{
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    hideModal = () => {
        this.setState({ visible: false });
    };


    render() {
        const info = () => {
            Modal.info({
                title: 'some info',
                content: 'some info',
            });
        };
        const confirm = () => {
            Modal.confirm({
                title: 'some info',
                content: 'some info',
            });
        };

        return(
            <div>
                <h1>Users List</h1>
                <div className="locale-components">
                    <div className="example">
                        <Select showSearch style={{ width: 200 }}>
                            <Option value="jack">jack</Option>
                            <Option value="lucy">lucy</Option>
                        </Select>
                        <DatePicker />
                        <TimePicker />
                        <RangePicker style={{ width: 200 }} />
                    </div>
                    <div className="example">
                        <Button type="primary" onClick={this.showModal}>
                            Show Modal
                        </Button>
                        <Button onClick={info}>Show info</Button>
                        <Button onClick={confirm}>Show confirm</Button>
                        <Popconfirm title="Question?">
                            <a href="#">Click to confirm</a>
                        </Popconfirm>
                    </div>
                    <div className="example">
                        <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
                    </div>
                    <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                        <Calendar fullscreen={false} value={moment()} />
                    </div>
                    <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
                        <p>Locale Modal</p>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default Users;
