import React from 'react';
import NumericInput from './NumericInput';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';

class BookManagement extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
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
            dataIndex: "publisher",
            width: "15%",
            editable: true
          },
          {
            title: "Price",
            dataIndex: "price",
            width: "10%",
            editable: true
          },
          {
            title: "Import Date",
            dataIndex: "importDate",
            width: "15%",
            editable: true
          },
          {
            title: "Amount",
            dataIndex: "importDate",
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
              <Button type="danger" icon="delete"/> 
              <Button type="primary" style={{marginLeft:5}} icon="edit"/> 
            </div>
           )

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
                          {getFieldDecorator("bookname", {
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
                          {getFieldDecorator("userName", {
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
                          {getFieldDecorator("bookGenre", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Thể loại" />)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Số lượng" labelAlign="left">
                          {getFieldDecorator("realeaseYear", {
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
                        <Form.Item label="Nhà xuất bản " labelAlign="left">
                          {getFieldDecorator("publisher", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Nhà xuất bản" />)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Giá" labelAlign="left">
                          {getFieldDecorator("price", {
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
                        <Form.Item label="Ngày nhập" labelAlign="left">
                          {getFieldDecorator("importDate", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<DatePicker placeholder="Ngày nhập" />)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Ngày xuất bản" labelAlign="left">
                          {getFieldDecorator("postAt", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<DatePicker placeholder="Ngày nhập" />)}
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
                  />
              </div>
            );
    }
}

const WrappedBookManagement = Form.create({ name: "book_management" })(
    BookManagement
  );

export default WrappedBookManagement;