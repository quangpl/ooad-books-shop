import React from 'react';
import NumericInput from './NumericInput';
import {
  Table,
  Input,
  InputNumber,
  Spin,message,
  Popconfirm,
  Form,
  Button,
  Radio,
  Layout,
  Select,
  Icon
} from "antd";
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import { Checkbox } from 'antd';
import ReceiptService from "../services/admin/bill"
const receiptService = new ReceiptService();

class ReceiptManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      selectedRow: "",
      isLoad: true,
      isEdit: false,
    };
  }

  async componentDidMount() {
    await this.setState({
      dataSource: await receiptService.getAll()
    });

    this.setState({
      isLoad: false
    });
  }

  handleEdit = async () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("update");
        await receiptService.update({
          id: this.state.selectedRow._id,
          customerId: values.customerId,
          employeeId: values.employeeId,
          value: values.value
        });
        window.location.reload();
      } else {
        message.error("Có lỗi xảy ra");
        return;
      }
    });
  };
  handleDelete = async data => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.id !== data) });
    await receiptService.delete(data);
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
        title: "Customer",
        dataIndex: "customerId",
        width: "15%"
      },
      {
        title: "Staff",
        dataIndex: "employeeId",
        width: "18%",
        editable: true
      },
      {
        title: "Value",
        dataIndex: "value",
        width: "15%",
        editable: true
      },
      {
        title: "Is Paid",
        dataIndex: "isPaid",
        width: "8%",
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
                onConfirm={() => this.handleDelete(this.state.selectedRow.id)}
              >
                <Button type="danger" icon="delete" />
              </Popconfirm>
              <Button
                type="primary"
                style={{ marginLeft: 5 }}
                icon="edit"
                onClick={this.onEdit(this.state.selectedRow)}
              />
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <h1>Quản Lý Hóa Đơn</h1>
        <div>
          <Form
            onSubmit={this.handleSubmit}
            wrapperCol={{ span: 23 }}
            labelCol={{ span: 5 }}
          >
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Tên người lập" labelAlign="left">
                  {getFieldDecorator("staffname", {
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
                <Form.Item label="Tên khách hàng" labelAlign="left">
                  {getFieldDecorator("customername", {
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input placeholder="Tên khách hàng" id="customername" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Thành tiền" labelAlign="left">
                  {getFieldDecorator("value", {
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<NumericInput placeholder="Thành tiền" id="value" />)}
                </Form.Item>
              </Col>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Đã thanh toán" labelAlign="left">
                  {getFieldDecorator("ispaid", {
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Checkbox id="ispaid" />)}
                </Form.Item>
              </Col>
            </Row>

            <Row type="flex" justify="center">
              <Button type="primary" htmlType="submit">
                Save
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

const WrappedReceiptManagement = Form.create({ name: "receipt_management" })(
    ReceiptManagement
  );

export default WrappedReceiptManagement;