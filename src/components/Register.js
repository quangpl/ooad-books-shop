import React from "react";
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,DatePicker } from 'antd';

// nếu muốn có ngày tháng năm sinh
// import moment from 'moment';
// const { MonthPicker, RangePicker } = DatePicker;
// const dateFormatList = ['DD/MM/YYYY']; 

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
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
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
    // XÁC THỰC MẬT KHẨU   
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;

      // // LẤY MÃ VÙNG -> SỐ ĐIỆN THOẠI
      // const prefixSelector = getFieldDecorator('prefix', {
      //   initialValue: '86',
      // })(
      //   <Select style={{ width: 70 }}>
      //     <Option value="86">+86</Option>
      //     <Option value="87">+87</Option>
      //   </Select>,
      // );


      return (
        <Form  onSubmit={this.handleSubmit} className='Register register-form' >          
        
        {/* NHẬP HỌ TÊN */}  
        <Form.Item>              
        <h1 style={{fontSize: '20px'}}>Register</h1>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>

          {/* NHẬP EMAIL */}           
          <Form.Item >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })( <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              placeholder="Email"
            />,)}
          </Form.Item>

          {/* MẬT KHẨU */}   
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })( <Input.Password
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,)}
          </Form.Item>

          {/* XÁC NHẬN MẬT KHẨU */}   
          <Form.Item  hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm password"
            />,)}
          </Form.Item>
          
          {/* SỐ ĐIỆN THOẠI */}   
          <Form.Item>
          {<Row gutter={8}>
            <Col span={16}>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input 
              // addonBefore={prefixSelector} style={{ width: '100%' }} 
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone number"/>)}
            </Col>
            {/* lấy mã captcha */}
            <Col span={8}>
            <Button block style={{backgroundColor: 'rgb(253, 216, 53)'}} >Get captcha</Button>
              </Col>
            </Row>
          }
          </Form.Item>
          

           {/* NGÀY SINH   
          <Form.Item>
              <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />           
          </Form.Item> */}

          {/* NHẬN THÔNG BÁO */}  
          <Form.Item>
            {getFieldDecorator('agreement', {valuePropName: 'checked',})
            (<Checkbox>
                Receive information and promotions of <a href > EZGroup </a> via email
             </Checkbox>,)}
          </Form.Item>

          {/* NÚT SUMIT */}  
          <Form.Item >
            <Button block style={{backgroundColor: 'rgb(253, 216, 53)'}} htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  export default WrappedRegistrationForm;