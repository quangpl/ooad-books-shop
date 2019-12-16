import React from "react";
import { Form, Input, Icon, Select, Checkbox, Button , message} from "antd";
import CustomerService from "../services/customer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const customerService = new CustomerService();
        await customerService.register(values);
        message.success("Register successfully!")
      }
    });
  };

  //XỬ LÝ SHOW ON MẬT KHẨU
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  // SO SÁNH XÁC NHẬN MẬT KHẨU
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  // XÁC THỰC MẬT KHẨU
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="Register register-form">
        {/* NHẬP HỌ TÊN */}
        <Form.Item>
          <h1 style={{ fontSize: "20px" }}>Register</h1>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input your name!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Your name"
            />
          )}
        </Form.Item>

        {/* NHẬP EMAIL */}
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        {/* NHẬP Địa chỉ */}
        <Form.Item>
          {getFieldDecorator("address", {
            rules: [
              {
                type: "string"
              },
              {
                required: true,
                message: "Please input your address"
              }
            ]
          })(
            <Input
              prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Address"
            />
          )}
        </Form.Item>

        {/* MẬT KHẨU */}
        <Form.Item hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(
            <Input.Password
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>

        {/* XÁC NHẬN MẬT KHẨU
        <Form.Item hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input.Password
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Confirm password"
            />
          )}
        </Form.Item> */}

        {/* SỐ ĐIỆN THOẠI */}
        <Form.Item>
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(
            <Input
              prefix={
                <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Phone number"
            />
          )}
        </Form.Item>

        {/* NHẬN THÔNG BÁO
        <Form.Item>
          {getFieldDecorator("agreement", { valuePropName: "checked" })(
            <Checkbox>
              Receive information and promotions of <a href> EZGroup </a> via
              email
            </Checkbox>
          )}
        </Form.Item> */}

        {/* NÚT SUMIT */}
        <Form.Item>
          <Button
            block
            style={{ backgroundColor: "rgb(253, 216, 53)" }}
            htmlType="submit"
          >
            Register
          </Button>
          <Link to="/login">
            <Button block style={{ backgroundColor: "#fff" }}>
              Login
            </Button>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);
export default WrappedRegistrationForm;
