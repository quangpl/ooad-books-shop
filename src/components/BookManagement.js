import React from 'react';
import NumericInput from './NumericInput';
import EditableTable from './EditableTable';
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
                    title: 'Name',
                    dataIndex: 'name',
                    width: '25%',
                    editable: true,
            },
            {
                    title: 'Author',
                    dataIndex: 'author',
                    width: '15%',
                    editable: true,
            },
            {
                title: 'Realease Year',
                dataIndex: 'realeaseYear',
                width: '15%',
                editable: true,
            },
            {
                title: 'Publisher',
                dataIndex: 'publisher',
                width: '15%',
                editable: true,
            },
            {
                title: 'Price',
                dataIndex: 'price',
                width: '15%',
                editable: true,
            },
            {
                title: 'Import Date',
                dataIndex: 'importDate',
                width: '15%',
                editable: true,
            },
        ];

            var dataSource = [
                {
                    id: '1',
                    name: 'abc',
                    genre: 'abc',
                    author: 'abc',
                    realeaseYear: '1000',
                    publisher: 'abc',
                    price: '20.000',
                    importDate: '1/1/1',
                },
                {
                    id: '2',
                    name: 'abc',
                    genre: 'abc',
                    author: 'abc',
                    realeaseYear: '1000',
                    publisher: 'abc',
                    price: '20.000',
                    importDate: '1/1/1',
                },
            ];

            return (
            <div>
                <h1>Quản Lý Sách</h1>
                <div>
                    <Form onSubmit={this.handleSubmit} wrapperCol={{ span: 23 }} labelCol={{ span: 5 }}>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Tên sách' labelAlign='left'>
                                    {getFieldDecorator("bookname", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Tên sách'/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='Tên tác giả' labelAlign='left'>
                                    {getFieldDecorator("userName", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Tên tác giả'/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Thể loại' labelAlign='left'>
                                    {getFieldDecorator("bookGenre", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Thể loại'/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='Năm xuất bản' labelAlign='left'>
                                    {getFieldDecorator("realeaseYear", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <NumericInput />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Nhà xuất bản ' labelAlign='left'>
                                    {getFieldDecorator("publisher", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Nhà xuất bản'/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='Giá' labelAlign='left'>
                                    {getFieldDecorator("price", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <NumericInput />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Ngày nhập' labelAlign='left'>
                                    {getFieldDecorator("importDate", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <DatePicker placeholder='Ngày nhập' />
                                    )}
                                </Form.Item>  
                            </Col>
                        </Row>
                        <Row type='flex' justify='center'>
                            <Button type='primary' htmlType="submit">Thêm</Button>
                        </Row>
                    </Form>
                </div>
                <Row style={{marginTop: '2%'}}>
                    <EditableTable dataSource={dataSource} columns={columns} />
                </Row>
            </div>
        );
    }
}

const WrappedBookManagement = Form.create({ name: "book_management" })(
    BookManagement
  );

export default WrappedBookManagement;