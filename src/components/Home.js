import React from "react";
import HorizontalMenu from "./HorizontalMenu"

import { Layout, Menu, Breadcrumb, Icon, Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MenuItem } from "rc-menu";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Home extends React.Component {
  // state = {
  //   current: 'active',
  // };

  // function changeText(props) {
  //   let tmp=document.getElementById(props);

  //   tmp.title="active";
  // }

  // changeText(key) {
  //   var itemList = document.getElementsByClassName("ant-menu-item");
  //   console.log(itemList.length);

  //   for (var i = 0; i < itemList.length; ++i) {
  //     if (itemList[i].id === key) {
  //       itemList[i].innerText = "Active";
  //     }
  //     else {
  //       itemList[i].innerText = "Normal";
  //     }
  //   }

    // let tmp = document.getElementById(key);

    // tmp.innerText = "Active";
  //}

  // handleClick = e => {
  //   console.log(e.key);
  //   this.setState({ current: e.key });
  //   this.changeText(e.key);
  //   //changeText(e.key);
  // }

  // handleDeselect = e => {
  //   console.log("deselect: " + e.key);

  //   let tmp = document.getElementById(e.key);

  //   tmp.innerText = "Normal";
  // }

  render() {
   return <h2>Home child</h2>;
  }
}
