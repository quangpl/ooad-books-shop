import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

// import { Layout, Menu, Breadcrumb, Icon, Avatar,Input,Button } from "antd";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// export default class Login extends React.Component {
//   render() {      
//     return(    
//     <div>
//     <h2>Login</h2>
//     <text>Email/SĐT: </text> <Input placeholder="Basic usage" />
//     <Input placeholder="Basic usage" />
//     <Button block>Đăng nhập</Button>
//     <Button type="primary" block>Đăng nhập bằng Facebook</Button>
//     <Button type="danger" block>Đăng nhập bằng Google</Button>

//     </div>);
//   }  
// }



export default class Login  extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

