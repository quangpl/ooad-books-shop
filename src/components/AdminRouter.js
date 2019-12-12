import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import Admin from "./AdminRouter";
import ListBook from "./ListBook";
import Login from "./Login";
import Register from "./Register";
import BookManagement from './BookManagement';
import CustomerManagement from './CustomerManagement';
import StaffManagement from './StaffManagement';
import RuleManagement from './RuleManagement';
import ReceiptManagement from './ReceiptManagement';
import { Layout, Menu, Icon, Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WrappedCustomerManagement from "./CustomerManagement";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class AdminRouter extends React.Component {
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
         <h2>Admin</h2>
            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <span>Quản Lý Sách</span>
                <Link to="/bookmanagement" />
              </Menu.Item>
              <Menu.Item key="2">
                <span>Quản Lý Khách</span>
                <Link to="/customermanagement" />
              </Menu.Item>
              <Menu.Item key="3">
                <span>Quản Lý Nhân Viên</span>
                <Link to="/staffmanagement" />
              </Menu.Item>
              <Menu.Item key="4">
                <span>Quản Lý Quy Định</span>
                <Link to="/rulemanagement" />
              </Menu.Item>
              <Menu.Item key="5">
                <span>Quản Lý Phiếu Thu</span>
                <Link to="/receiptmanagement" />
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
                  <Admin />
                </Route>
                <Route exact path="/bookmanagement">
                  <BookManagement />
                </Route>
                <Route exact path="/customermanagement">
                  <CustomerManagement />
                </Route>
                <Route exact path="/staffmanagement">
                  <StaffManagement />
                </Route>
                <Route exact path="/rulemanagement">
                  <RuleManagement />
                </Route>
                <Route exact path="/receiptmanagement">
                  <ReceiptManagement />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
