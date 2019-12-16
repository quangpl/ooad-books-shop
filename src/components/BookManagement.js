import React from 'react';
import NumericInput from './NumericInput';
import { Table, Input, InputNumber, Popconfirm, Spin,Form, Button, message,Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import moment from "moment"
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import AdminService from "../services/admin"
const adminService = new AdminService();

class BookManagement extends React.Component {

    constructor(props){
      super(props);


      this.state = {
        dataSource:[],
        selectedRow: "",
        isLoad: true,
      };
    }

    async componentDidMount(){
      await this.setState({
        dataSource:await adminService.getBooks(),
      })
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
        try{
                await adminService.addBook(
                  Object.assign(values, {
                    importDate: moment(values.importDate).unix(),
                    publicAt: moment(values.publicAt).unix()
                  })
                );
                message.success("Add book successfully");
        }
        catch(e){
          message.error("ERROR!")
        }
            }
        });
    }

    handleDelete = data =>{
      const dataSource = [...this.state.dataSource];
      this.setState({ dataSource: dataSource.filter(item => item.id !== data) });
    }

    onClickRow = (data) => {
      return {
          onClick: () => {
              this.setState({
                  selectedRow: data,
              });
              console.log(data);
          }
      }
    }

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
                    onConfirm={() =>
                      this.handleDelete(this.state.selectedRow.id)
                    }
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

            var dataSource = [
              {
                id: "1",
                name: "abc",
                genre: "abc",
                author: "abc",
                realeaseYear: "1000",
                publisher: "abc",
                price: "20.000",
                importDate: "1/1/1",
                amount: 1000,
              },
              {
                id: "2",
                name: "abc",
                genre: "abc",
                author: "abc",
                realeaseYear: "1000",
                publisher: "abc",
                price: "20.000",
                importDate: "1/1/1",
                amount: 500
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
                          })(
                            <Input
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      name: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Tên sách"
                            />
                          )}
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
                          })(
                            <Input
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      author: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Tên tác giả"
                            />
                          )}
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
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      typeId: e.target.value
                                    }
                                  )
                                });
                              }}
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
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      numberOf: e.target.value
                                    }
                                  )
                                });
                              }}
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
                          })(
                            <Input
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      publishBy: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Nhà xuất bản"
                            />
                          )}
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
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      unitPrice: e.target.value
                                    }
                                  )
                                });
                              }}
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Ngày nhập" labelAlign="left">
                          {getFieldDecorator("importDate", {
                            setFieldsValue: this.state.selectedRow.importDate,

                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(
                            <DatePicker
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      importDate: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Ngày nhập"
                            />
                          )}
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Ngày xuất bản" labelAlign="left">
                          {getFieldDecorator("publishAt", {
                            setFieldsValue: this.state.selectedRow.publishAt,

                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(
                            <DatePicker
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      publishAt: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Ngày xuất bản"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
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
                          })(
                            <Input
                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      image: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Hình ảnh"
                            />
                          )}
                        </Form.Item>
                      </Col>
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
                          })(
                            <Input

                              onChange={e => {
                                this.setState({
                                  selectedRow: Object.assign(
                                    this.state.selectedRow,
                                    {
                                      description: e.target.value
                                    }
                                  )
                                });
                              }}
                              placeholder="Miêu tả"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginBottom: 10 }}
                      >
                        Thêm
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