import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import Admin from "./AdminRouter";
import Cart from "./Cart";
import Login from "./Login";
import CustomerService from "../services/customer";

import Register from "./Register";
import { Layout, Menu, Icon, Avatar, Input, Dropdown, Button } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

export default class UserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      visible: false,
      isLoad: true,
      authInfo: {}
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

  async componentDidMount(){
    const customerService = new CustomerService();
    const authInfo = await customerService.auth();
    await this.setState({
      authInfo
    });
    await this.setState({
      isLoad: false
    });
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        {this.state.authInfo.name ? (
          <Menu.Item
            key="1"
            onClick={() => {
              localStorage.setItem("token", undefined);
              this.setState({
                authInfo: {}
              });
            }}
          >
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item key="1" onClick={() => {}}>
            <Link to="/login"> Login </Link>
          </Menu.Item>
        )}
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
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Truyện</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Sách kinh doanh</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="desktop" />
                <span>Tiểu thuyết</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              theme="light"
              style={{
                zIndex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "white"
              }}
            >
              <Link to="/">
                <Button size={64} icon="home">
                  Home
                </Button>
              </Link>

              <Search
                placeholder="Input book name"
                enterButton="Search"
                size="large"
                style={{
                  flex: 0.6
                }}
                onSearch={value => console.log(value)}
              />
              <div
                style={{
                  display: "flex",
                  alignContentL: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flex: 0.25
                }}
              >
                <div>
                  <Avatar shape="cirlce" size={40} icon="user" />
                  <Dropdown overlay={menu}>
                    <b>
                      {this.state.authInfo.name
                        ? this.state.authInfo.name
                        : "Guest"}
                    </b>
                  </Dropdown>
                </div>
                <Link to="/cart">
                  <Button type="primary" icon="shopping-cart" size={64}>
                    Cart
                  </Button>
                </Link>
              </div>
            </Header>
            <Content style={{ margin: "0 16px", height: "100%" }}>
              <Route exact path="/" component={Home} />

              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <Route exact path="/detail/:id" component={Detail} />

              <Route exact path="/cart" component={Cart} />
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
