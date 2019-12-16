import React from 'react';
import NumericInput from './NumericInput';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import { Checkbox } from 'antd';

//import { Responsive } from "react-responsive";
// function onChange(e) {
//     console.log(`checked = ${e.target.checked}`);
// }

class BookManagement extends React.Component {
    constructor(props){
        super(props);

        // this.state={
        //   dataSource: props.dataSource,
        //   selectedRow: '',
        // }

        this.state={
            dataSource:[
                {
                    id: '1',
                    username: '1',
                    password: '2',
                    token: '3',
                    fullName: '4',
                    phone: '5',
                    address: '123',
                    isAdmin: '1',
                    employedTime: '123',
                },
            ],
            selectedRow: '',
        };
    }

    onClick = (data) => {
        console.log(data);
    }

    onChange = e => {
        this.setState((state, e) => {
            state.isAdmin=e.target.checked; 
        });
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

    onEdit = (data) => {
      console.log(data.username);
      if(data!==null){
        
      }
  }

    render() {
        const { getFieldDecorator } = this.props.form;

        var columns = [
          {
            title: "User Name",
            dataIndex: 'username',
            width: "15%"   
          },
          {
            title: "Name",
            dataIndex: "fullName",
            width: "18%",
            editable: true
          },
          {
            title: "Phone Number",
            dataIndex: "phone",
            width: "15%",
            editable: true
          },
          {
            title: "Address",
            dataIndex: "address",
            width: "15%",
            editable: true
          },
          {
            title: "Is Admin",
            dataIndex: "isAdmin",
            width: "8%",
            editable: true
          },
          {
            title: "Employed Time",
            dataIndex: "employedTime",
            width: "15%",
            editable: true
          },
          {
            title: "Change Password",
            render: ()=>{
                return(
                    <Button type="primary" icon="lock" />
                )
            }
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
                        <Button type="primary" style={{marginLeft:5}} icon="edit" onClick={this.onEdit(this.state.selectedRow)}/> 
                    </div>
                )
            }
          }
        ];

            return (
              <div>
                <h1>Quản Lý Nhân Viên</h1>
                <div>
                  <Form
                    onSubmit={this.handleSubmit}
                    wrapperCol={{ span: 23 }}
                    labelCol={{ span: 5 }}
                  >
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Tên nhân viên" labelAlign="left">
                          {getFieldDecorator("staffname", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Tên nhân viên" id='staffname'/>)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Tên đăng nhập" labelAlign="left">
                          {getFieldDecorator("username", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Tên đăng nhập" id='username'/>)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Mật khẩu" labelAlign="left">
                          {getFieldDecorator("password", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Mật khẩu" id='password'/>)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Điện thoại" labelAlign="left">
                          {getFieldDecorator("phone", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Điện thoại" id='phone'/>)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Địa chỉ" labelAlign="left">
                          {getFieldDecorator("address", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Địa chỉ" id='address'/>)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Là admin" labelAlign="left">
                          {getFieldDecorator("isadmin", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Checkbox onChange={this.onChange} id='isadmin'/>)}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Thời gian làm" labelAlign="left">
                          {getFieldDecorator("employedtime", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Ngày bắt đầu" id='startat'/>)}
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
                    dataSource={this.state.dataSource}
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