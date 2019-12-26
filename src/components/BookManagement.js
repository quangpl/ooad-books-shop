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
import AdminService from "../services/admin/book"
const adminService = new AdminService();
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];


class BookManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      selectedRow: "",
      isLoad: true,
      isEdit: false,
      importDate:"",
      publishAt:""
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
              importDate: this.state.importDate,
              publishAt: this.state.publishAt
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

 this.props.form.validateFields(async (err, values) => {
   if (!err) {
     console.log("update")
await adminService.updateBook({
  _id: this.state.selectedRow._id,
  typeId: values.typeId,
  name: values.name,
  author: values.author,
  numberOf: values.numberOf,
  unitPrice: values.unitPrice,
  publishBy: values.publishBy,
  image: values.image,
  description: values.description,
  publishAt: this.state.publishAt,
  importDate
  : this.state.importDate
});
  window.location.reload();
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
        editable: true,
        render:(d)=>{
          return moment.unix(d).format("DD/MM/YYYY");
        }
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
              <Col xs={24} md={8} sm={8} lg={8}>
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
                  })(<Input placeholder="Thể loại" />)}
                </Form.Item>
              </Col>
              <Col xs={24} md={6} sm={6} lg={6}>
                <Form.Item label="% khuyến mãi" labelAlign="right">
                  {getFieldDecorator("discount_rate", {
                    setFieldsValue: this.state.selectedRow.discount_rate,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!",
                        type: "number"
                      }
                    ]
                  })(<InputNumber placeholder="Số lượng" />)}
                </Form.Item>
              </Col>
              <Col xs={24} md={6} sm={6} lg={6}>
                <Form.Item label="Số lượng" labelAlign="center">
                  {getFieldDecorator("numberOf", {
                    setFieldsValue: this.state.selectedRow.numberOf,
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!",
                        type: "number"
                      }
                    ]
                  })(<InputNumber placeholder="Số lượng" />)}
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
                        message: "Không bỏ trống trường này!",
                        type: "number"
                      }
                    ]
                  })(<InputNumber typ placeholder="Giá" />)}
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
            <Row>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Ngày xuất bản" labelAlign="left">
                    <DatePicker
                      defaultValue={moment()}
                      format={dateFormatList}
                      onChange={(e)=>{
                         this.setState({
                           publishAt: e.unix()
                         });
                      }}
                    />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} sm={12} lg={12}>
                <Form.Item label="Ngày nhập hàng" labelAlign="left">
                    <DatePicker
                      defaultValue={moment()}
                      format={dateFormatList}
                      onChange={(value,date)=>
                      {
                        console.log(value.unix());
                        this.setState({
                          importDate: value.unix()
                        });
                      }
                    }
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
                onClick={this.handleEdit}
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