import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import ListBook from "./ListBook"
import UserBar from "./UserBar"
import Login from "./Login"
import Register from "./Register"
import Admin from "./Admin"
import BookManagement from './BookManagement'
import { Layout, Menu, Icon, Avatar, Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminPage from "./Admin";
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

                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">

                <Link to="/detail" />
              </Menu.Item>
              <Menu.Item key="9">
                
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header 
              style={{ background: "#fff", padding: 0, flexDirection: 'row', justifyContent: 'space-between', display: 'flex', alignItems: 'center', padding: 10}}>
              <Avatar
                style={{
                  backgroundColor: "#001529",
                  marginLeft: 12
                }}
                size="large"
              >
                EZ
              </Avatar>
              <UserBar/>
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
