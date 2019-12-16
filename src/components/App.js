import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import AdminRouter from "./AdminRouter";
import UserRouter from "./UserRouter";

import Login from "./Login";
import Register from "./Register";
import { Layout, Menu, Icon, Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Router path="/admin">
            <AdminRouter />
          </Router>
          <Router>
            <UserRouter />
          </Router>
        </Switch>
      </Router>
    );
  }
}
