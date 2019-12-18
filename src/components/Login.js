import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from "antd";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CustomerService from "../services/customer";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

class NormalLoginForm extends React.Component {
  state = {
    confirmDirty: false
  };
  //XỬ LÝ SHOW ON MẬT KHẨU
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {

         const customerService = new CustomerService();
        const res = await customerService.login(values);
        if(res){
         window.location.href="/";
         return true;
        }else{
          message.error("Wrong password")
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form form-login">
        {/* Textbox Username */}
        <Form.Item>
          <h1 style={{ fontSize: "20px" }}>Login</h1>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>

        {/* Textbox password  */}
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input.Password
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>

        {/* Quên mật khẩu / Remember -> tạo col */}
        <Form.Item>
          {/* Button login*/}
          <Button
            block
            style={{ backgroundColor: "rgb(253, 216, 53)" }}
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          {/* <Button block type="primary" htmlType="submit" className="login-form-button">
          <IconFont type="icon-facebook" />            
            Continue with Facebook
          </Button>

          <Button block type="danger" htmlType="submit" className="login-form-button ">
            <Icon type="google-plus" />
            Continue with Google +
          </Button> */}
          {/* Register now */}
          Or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
export default WrappedNormalLoginForm;
