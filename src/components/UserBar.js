import React from 'react';
import "../assets/css/UserAvatar.css";
import {Avatar, icon} from 'antd';
import UserMenu from './UserMenu';
import {Button, Icon, Radio} from 'antd';

export default class UserAvatar extends React.Component{
    render(){
        return (
            <span className="UserBar">
                <Avatar size="large">USER</Avatar>
                <UserMenu/>
                <Button>
                    <Icon type="shopping-cart" />
                    Giỏ Hàng
                </Button>
            </span>
        );
    }
}