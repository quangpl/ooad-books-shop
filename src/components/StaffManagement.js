import React from 'react';
import { Table, Input,Spin, InputNumber, Popconfirm, message,Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import { Checkbox } from 'antd';
import moment from "moment";

import StaffService from "../services/admin/staff"
const staffService = new StaffService();

//import { Responsive } from "react-responsive";
// function onChange(e) {
//     console.log(`checked = ${e.target.checked}`);
// }

class StaffManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      selectedRow: "",
      isLoad: true,
      isEdit: false,
      startAt:""
    };
  }

  async componentDidMount() {
    await this.setState({
      dataSource: await staffService.getAll(),
      isLoad: false
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        
        try {
          await staffService.add(
            Object.assign(values, {
              startAt: this.state.startAt,
            })
          );
          message.success("Add staff successfully");
          window.location.reload();
        } catch (e) {
          message.error("ERROR!");
        }
      }
    });
  };
  async handleEdit() {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("update");
        await staffService.update({
          id:this.state.selectedRow._id,
          username:values.username,
          password:values.password,
          fullName: values.values,
          phone: values.phone,
          address: values.address,
          employedTime: values.employedTime
        });
        window.location.reload();
      }
    });
  }
  handleDelete = async data => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.id !== data) });
    await staffService.delete(data);
    window.location.reload();
  };

  onClickRow = data => {
    return {
      onClick: () => {
        this.setState({
          selectedRow: data
        });
        this.props.form.setFieldsValue(data);
        console.log(data);
        this.setState({
          isEdit: true,
          selectedRow: data
        });
      }
    };
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    var columns = [
      {
        title: "User Name",
        dataIndex: "username",
        width: "15%"
      },
      {
        title: "Name",
        dataIndex: "fullName",
        width: "18%"
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        width: "15%"
      },
      {
        title: "Address",
        dataIndex: "address",
        width: "15%"
      },
      {
        title: "Employed Time",
        dataIndex: "startAt",
        width: "15%"
      },
      {
        title: "Action",
        dataIndex: "action",
        width: "20%",
        render: () => {
          return (
            <div className="action">
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(this.state.selectedRow._id)}
              >
                <Button type="danger" icon="delete" />
              </Popconfirm>
              <Button
                type="primary"
                style={{ marginLeft: 5 }}
                icon="edit"
              />
            </div>
          );
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
                  {getFieldDecorator("fullName", {
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input />)}
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
                  })(<Input placeholder="Tên đăng nhập" id="username" />)}
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
                  })(<Input placeholder="Mật khẩu" id="password" />)}
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
                  })(<InputNumber />)}
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
                  })(<Input placeholder="Địa chỉ" id="address" />)}
                </Form.Item>
              </Col>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Ngày vào làm" labelAlign="left">
                  <DatePicker
                    defaultValue={moment()}
                    format="DD/MM/YYYY"
                    onChange={(value, date) => {
                      console.log(value.unix());
                      this.setState({
                        startAt: value.unix()
                      });
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row type="flex" justify="center">
              <Button
                type="primary"
                htmlType="submit"
                disabled={this.state.isEdit}
                style={{ marginBottom: 10, marginRight: 9 }}
              >
                Save
              </Button>

              <Button
                type="primary"
                disabled={!this.state.isEdit}
                onClick={() => this.handleEdit()}
                style={{ marginBottom: 10, marginRight: 9 }}
              >
                Edit
              </Button>
            </Row>
          </Form>
        </div>
        {this.state.isLoad ? (
          <Spin size="large" />
        ) : (
          <Table
            rowKey={row => row._id}
            dataSource={this.state.dataSource}
            columns={columns}
            onRow={this.onClickRow}
          />
        )}
      </div>
    );
  }
}

const WrappedStaffManagement = Form.create({ name: "staff_management" })(
    StaffManagement
  );

export default WrappedStaffManagement;