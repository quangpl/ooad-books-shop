import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu=(
    <Menu>
        <Menu.Item key="0">
            1
        </Menu.Item>
        <Menu.Item key="1">
            2
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            3
        </Menu.Item>
    </Menu>
);

export default class UserMenu extends React.Component{
    state={
        current: 0,
    }



    render(){
        return(
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    User Name <Icon type="down" />
                </a>
            </Dropdown>
        );
    }
}