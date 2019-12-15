import React from 'react';
import NumericInput from './NumericInput';
import EditableTable from './EditableTable';
import dataSource from '../Receipts.json';
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

    handleClick = key => {
        //const dataSource=[...this.state.dataSource];
        window.open('https://www.geeksforgeeks.org', '_blank');
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        var columns = [
            {
                title: 'Receipt No.',
                dataIndex: 'id',
                width: '10%',
            },
            {
                title: 'Customer Name',
                dataIndex: 'customerName',
                width: '35%',
                editable: true,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                width: '30%',
                editable: true,
            },
            {
                title: 'Date',
                dataIndex: 'date',
                width: '15%',
                editable: true,
            },
            {
                title: 'Fee Paid',
                dataIndex: 'feePaid',
                width: '10%',
                editable: true,
            },
            {
                title: 'Receipt',
                dataIndex: 'receipt',
                align: 'center',
                render: () =>
                    <Button type='primary' icon='file' theme='twoTone' onClick={this.handleClick} />
            },
        ];

        return (
            <div>
                <h1>Quản Lý Sách</h1>
                
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