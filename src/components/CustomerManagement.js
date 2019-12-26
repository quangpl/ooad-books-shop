import React from 'react';
import {
  Table,
  Input,
  message,
  InputNumber,
  Popconfirm,
  Form,
  Button,
  Radio,
  Spin,
  Layout,
  Select,
  Icon
} from "antd";
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
//import { Responsive } from "react-responsive";
import moment from "moment";
import CustomerService from "../services/admin/customer"

const customerService = new CustomerService();
class CustomerManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      selectedRow: "",
      isLoad: true,
      isEdit: false,
      importDate: "",
      publishAt: ""
    };
  }

  async componentDidMount() {
    await this.setState({
      dataSource: await customerService.getAll()
    });

    this.setState({
      isLoad: false
    });
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields(async (err, values) => {
  //     if (!err) {
  //       console.log("Received values of form: ", values);

       
  //       try {
  //         await customerService.add(Object.assign(values));
  //         message.success("Add book successfully");
  //         window.location.reload();
  //       } catch (e) {
  //         message.error("ERROR!");
  //       }
  //     }
  //   });
  // };
  handleEdit =async()=> {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("update");
        await customerService.update({
          id: this.state.selectedRow._id,
          name: values.name,
          password: values.password,
          phone: values.phone,
          address: values.address,
          email: values.email
        });
        // window.location.reload();
      }else{
        message.error("Có lỗi xảy ra");
        return ;
      }
    });
  }
  handleDelete = async data => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.id !== data) });
    await customerService.delete(data);
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
        render: () => {
          return (
            <div className="action">
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(this.state.selectedRow._id)}
              >
                <Button type="danger" icon="delete" />
              </Popconfirm>
              <Button type="primary" style={{ marginLeft: 5 }} icon="edit" />
            </div>
          );
        }
      }
    ];


    return (
      <div>
        <h1>Quản Lý Khách Hàng</h1>
        <div>
          <Form
            onSubmit={this.handleEdit}
            wrapperCol={{ span: 23 }}
            labelCol={{ span: 5 }}
          >
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Tên khách hàng" labelAlign="left">
                  {getFieldDecorator("name", {
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
                  })(<InputNumber />)}
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
                  })(<InputNumber />)}
                </Form.Item>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Button type="primary" htmlType="submit">
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

const WrappedCustomerManagement = Form.create({ name: "customer_management" })(
    CustomerManagement
  );

export default WrappedCustomerManagement;