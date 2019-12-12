import React from 'react';
import NumericInput from './NumericInput';
import EditableTable from './EditableTable';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';

class CustomerManagement extends React.Component {

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
                title: 'ID',
                dataIndex: 'id',
                width: '5%',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'Date Of Birth',
                dataIndex: 'birthDate',
                width: '15%',
                editable: true,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                width: '20%',
                editable: true,
            },
            {
                title: 'Phone',
                dataIndex: 'phoneNumber',
                width: '15%',
                editable: true,
            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '15%',
                editable: true,
            },
        ];

            var dataSource = [
                {
                    id: '1',
                    name: 'abc',
                    birthDate: '1/1/1',
                    address: 'abc',
                    phoneNumber: '1000',
                    email: 'abc@abc.com',
                    importDate: '1/1/1',
                },
                {
                    id: '2',
                    name: 'abc',
                    birthDate: '1/1/1',
                    address: 'abc',
                    phoneNumber: '1000',
                    email: 'abc@abc.com',
                    importDate: '1/1/1',
                },
            ];

            return (
            <div>
                <h1>Quản Lý Sách</h1>
                <div>
                    <Form onSubmit={this.handleSubmit} wrapperCol={{ span: 23 }} labelCol={{ span: 5 }}>
                        <Row>
                            {/* <Col span={12}>
                                <Form.Item label='ID' labelAlign='left'>
                                    {getFieldDecorator("customerID", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Tên sách'/>
                                    )}
                                </Form.Item>
                            </Col> */}
                            <Col span={12}>
                                <Form.Item label='Tên Khách Hàng' labelAlign='left'>
                                    {getFieldDecorator("customerName", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Tên Khách Hàng'/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='Ngày Sinh' labelAlign='left'>
                                    {getFieldDecorator("birthDate", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <DatePicker placeholder='Ngày Sinh'/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Địa Chỉ' labelAlign='left'>
                                    {getFieldDecorator("address", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Địa Chỉ' />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='Số Điện Thoại' labelAlign='left'>
                                    {getFieldDecorator("phone", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Số Điện Thoại'/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label='Email' labelAlign='left'>
                                    {getFieldDecorator("email", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Email' />
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

const WrappedCustomerManagement = Form.create({ name: "customer_management" })(
    CustomerManagement
  );

export default WrappedCustomerManagement;