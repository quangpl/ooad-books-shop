import React from 'react';
import NumericInput from './NumericInput';
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Spin,
  Form,
  Button,
  message,
  Radio,
  Layout,
  Select,
  Icon,
  AutoComplete
} from "antd";
import { Row, Col } from 'antd';
import moment from "moment"
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import AdminService from "../services/admin"
const adminService = new AdminService();
const format = ["DD/MM/YYYY", "DD/MM/YYYY"];
class BookManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      selectedRow: "",
      isLoad: true,
      isEdit: false
    };
  }

  
  async componentDidMount() {
    await this.setState({
      dataSource: await adminService.getBooks()
    });

    this.setState({
      isLoad: false
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        const adminService = new AdminService();
        try {
          await adminService.addBook(
            Object.assign(values, {
              importDate: moment(values.importDate).unix(),
              publicAt: moment(values.publish).unix()
            })
          );
          message.success("Add book successfully");
          window.location.reload();
        } catch (e) {
          message.error("ERROR!");
        }
      }
    });
  };
  async handleEdit(){
    console.log("edit");
    // console.log(this.state.selectedRow);

 this.props.form.validateFields(async (err, values) => {
   if (!err) {
     console.log("Received values of form: ", values);
await adminService.updateBook({
  _id: this.state.selectedRow._id,
  typeId: values.typeId,
  name: values.name,
  author: values.author,
  numberOf: values.numberOf,
  unitPrice: values.unitPrice,
  publishBy: values.publishBy,
  image: values.image,
  description: values.description
});
   }
 });
  }
  handleDelete = async data => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.id !== data) });
    await adminService.deleteBooks(data);
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
        width: "25%",
        editable: true
      },
      {
        title: "Author",
        dataIndex: "author",
        width: "10%",
        editable: true
      },
      {
        title: "Publisher",
        dataIndex: "publishBy",
        width: "15%",
        editable: true
      },
      {
        title: "Category",
        dataIndex: "typeId",
        width: "10%",
        editable: true
      },
      {
        title: "Price",
        dataIndex: "unitPrice",
        width: "10%",
        editable: true
      },
      {
        title: "Import Date",
        dataIndex: "importDate",
        width: "10%",
        editable: true
      },
      {
        title: "Amount",
        dataIndex: "numberOf",
        width: "10%",
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
        <h1>Quản Lý Sách</h1>
        <div>
          <Form
            onSubmit={this.handleSubmit}
            wrapperCol={{ span: 23 }}
            labelCol={{ span: 5 }}
          >
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Tên sách" labelAlign="left">
                  {getFieldDecorator("name", {
                    setFieldsValue: this.state.selectedRow.name,
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
                <Form.Item label="Tên tác giả" labelAlign="left">
                  {getFieldDecorator("author", {
                    setFieldsValue: this.state.selectedRow.author,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input placeholder="Tên tác giả" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Thể loại" labelAlign="left">
                  {getFieldDecorator("typeId", {
                    setFieldsValue: this.state.selectedRow.typeId,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(
                    <Input
                     
                      placeholder="Thể loại"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Số lượng" labelAlign="left">
                  {getFieldDecorator("numberOf", {
                    setFieldsValue: this.state.selectedRow.numberOf,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(
                    <NumericInput
                     
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Nhà xuất bản " labelAlign="left">
                  {getFieldDecorator("publishBy", {
                    setFieldsValue: this.state.selectedRow.publishBy,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input placeholder="Nhà xuất bản" />)}
                </Form.Item>
              </Col>
              <Col xs={24} md={8} sm={12} lg={8}>
                <Form.Item label="Giá" labelAlign="left">
                  {getFieldDecorator("unitPrice", {
                    setFieldsValue: this.state.selectedRow.unitPrice,

                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(
                    <NumericInput
                    
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Miêu tả" labelAlign="left">
                  {getFieldDecorator("description", {
                    setFieldsValue: this.state.selectedRow.description,

                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input placeholder="Miêu tả" />)}
                </Form.Item>
              </Col>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Hình ảnh" labelAlign="left">
                  {getFieldDecorator("image", {
                    setFieldsValue: this.state.selectedRow.image,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input placeholder="Hình ảnh" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row></Row>
            <Row type="flex" justify="center">
              <Button
                type="primary"
                htmlType="submit"
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

const WrappedBookManagement = Form.create({ name: "book_management" })(
    BookManagement
  );

export default WrappedBookManagement;