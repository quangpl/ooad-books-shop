import React from 'react';
import NumericInput from './NumericInput';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
//import { Responsive } from "react-responsive";

class BookManagement extends React.Component {
    constructor(props){
      super(props);

      // //this.state={
      //   dataSource: props.dataSource,
      //   selectedRow: {},
      // }
      this.state={
        dataSource: {
          id: "2",
          name: "abc",
          password: "123",
          token: "sdf2",
          phone: "00000000000",
          address: "dfsaf",
          email: "sdafsdf@gmail.com",
          debtMoney: "2000",
          startAt: "2/2/2019",
        },
        selectedRow: {},
      }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    }

    handleDelete = key => {
      console.log(key);
      const dataSource = [...this.state.dataSource];
      this.setState({ dataSource: dataSource.filter(item => item.id !== key) });
    };

    onClickRow = (data) => {
      return {
          onClick: () => {
              //this.handleDelete(data.id);
              //console.log(data);
              this.setState({
                  selectedRow: data,
              });
              //console.log(this.state);
          }
      }
  }

    render() {
        const { getFieldDecorator } = this.props.form;

        var columns = [
          {
            title: "Name",
            dataIndex: "name",
            width: "18%",
            editable: true
          },
          {
            title: "Phone Number",
            dataIndex: "phone",
            width: "12%",
            editable: true
          },
          {
            title: "Address",
            dataIndex: "address",
            width: "15%",
            editable: true
          },
          {
            title: "Email",
            dataIndex: "email",
            width: "15%",
            editable: true
          },
          {
            title: "Debt Money",
            dataIndex: "debtMoney",
            width: "15%",
            editable: true
          },
          {
            title: "Start At",
            dataIndex: "startAt",
            width: "15%",
            editable: true
          },
          {
            title: "Action",
            dataIndex: "action",
            width: "20%",
            render:()=>{
           return(
                <div className="action">
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(this.state.selectedRow.id)}>
                  <Button type="danger" icon="delete" /> 
                </Popconfirm>
              <Button type="primary" style={{marginLeft:5}} icon="edit"/> 
            </div>
           )

            }
          }
        ];

            var dataSource = [
              {
                id: "2",
                name: "abc",
                password: "123",
                token: "sdf2",
                phone: "00000000000",
                address: "dfsaf",
                email: "sdafsdf@gmail.com",
                debtMoney: "2000",
                startAt: "2/2/2019",
              }
            ];

            return (
              <div>
                <h1>Quản Lý Khách Hàng</h1>
                <div>
                  <Form
                    onSubmit={this.handleSubmit}
                    wrapperCol={{ span: 23 }}
                    labelCol={{ span: 5 }}
                  >
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Tên khách hàng" labelAlign="left">
                          {getFieldDecorator("customername", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Tên sách" />)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Mật khẩu" labelAlign="left">
                          {getFieldDecorator("password", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Mật khẩu" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Số điện thoại" labelAlign="left">
                          {getFieldDecorator("phone", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Số điện thoại" />)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Địa chỉ" labelAlign="left">
                          {getFieldDecorator("address", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Địa chỉ" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Email" labelAlign="left">
                          {getFieldDecorator("email", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Email" />)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Tiền nợ" labelAlign="left">
                          {getFieldDecorator("debtmoney", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<NumericInput />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Ngày bắt đầu" labelAlign="left">
                          {getFieldDecorator("startat", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<DatePicker placeholder="Ngày bắt đầu" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Button type="primary" htmlType="submit">
                        Thêm
                      </Button>
                    </Row>
                  </Form>
                </div>
                  <Table
                    rowKey={row => row.id}
                    dataSource={dataSource}
                    columns={columns}
                    onRow={this.onClickRow}
                  />
                {/* <Responsive displayIn={["Mobile", "Tablet"]}>
                  This is a MOBILE/TABLET
                </Responsive>
                <Responsive displayIn={["Laptop"]}>
                  This is a LAPTOP or a Larger screen
                </Responsive> */}
              </div>
            );
    }
}

const WrappedBookManagement = Form.create({ name: "book_management" })(
    BookManagement
  );

export default WrappedBookManagement;