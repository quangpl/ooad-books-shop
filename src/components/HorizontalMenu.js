import React from "react";
import "../assets/css/HorizontalMenu.css";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;

export default class HorizontalMenu extends React.Component {
    state = {
        current: 1,
    }

    changeText(key) {
        let menuItems = document.getElementsByClassName("ant-menu-item");

        for (var i = 0; i < menuItems.length; ++i) {
            if (menuItems[i].id === "" || menuItems[i].disabled) {
                console.log("disabled: " + menuItems[i].key);
                continue;
            }
            if (menuItems[i].id === key) {
                menuItems[i].innerText = "Active";
            }
            else {
                menuItems[i].innerText = "Normal";
            }
        }
    }

    handleClick = e => {
        console.log("click: ", e.key);

        this.setState({ current: e.key });
        this.changeText(e.key);
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
                <Menu.Item key="10" id="10">
                    Normal
                </Menu.Item>
                <Menu.Item key="11" id="11">
                    Normal
                </Menu.Item>
                <Menu.Item key="12" disabled>
                    Disabled
                </Menu.Item>
            </Menu>
        );
    }
}