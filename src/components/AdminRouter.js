import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import Admin from "./AdminRouter";
import Login from "./Login";
import BookManagement from "./BookManagement"
import Register from "./Register";
import { Layout, Menu, Icon, Avatar, Input, Dropdown, Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
export default class UserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      visible: false
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleMenuClick = e => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };
  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/admin/book">
                  <Icon type="pie-chart" />
                  <span>Quản lý sách</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
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
            <Header
              theme="light"
              style={{
                zIndex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "white"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <div>
                  <Avatar shape="cirlce" size={40} icon="user" />
                  <Dropdown overlay={menu}>
                    <b>Guest</b>
                  </Dropdown>
                </div>
              </div>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Switch>
                <Route  path="/admin/book">
                  <BookManagement />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
