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
                title: 'Rule',
                dataIndex: 'rule',
                width: '45%',
                editable: true,
            },
            {
                title: 'Detail',
                dataIndex: 'detail',
                width: '45%',
                editable: true,
            },
        ];

            var dataSource = [
                {
                    id: '1',
                    rule: 'abc',
                    detail: '...',
                },
                {
                    id: '2',
                    rule: 'abc',
                    detail: '...',
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
                                <Form.Item label='Tên Quy Định' labelAlign='left'>
                                    {getFieldDecorator("ruleName", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Tên Quy Định'/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='Chi Tiết' labelAlign='left'>
                                    {getFieldDecorator("detail", {
                                        rules: [{ required: true, message: "Không bỏ trống trường này!" }]
                                    })(
                                        <Input placeholder='Chi Tiết'/>
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

const WrappedStaffManagement = Form.create({ name: "staff_management" })(
    CustomerManagement
  );

export default WrappedStaffManagement;