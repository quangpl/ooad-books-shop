import React from "react";

import { Layout, Menu, Breadcrumb, Icon, Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Home extends React.Component {
  render() {
    return <h2>Home child</h2>;
  }
}
