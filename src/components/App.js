import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import ListBook from "./ListBook"
import Login from "./Login"
import Register from "./Register"
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
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="home" />
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <Link to="/detail" />
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Avatar
                style={{
                  backgroundColor: "#001529",
                  marginLeft: 12
                }}
                size="large"
              >
                EZ
              </Avatar>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route exact path="/detail">
                  <Detail />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              EZBooks @2019 Created by EZGroup
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
