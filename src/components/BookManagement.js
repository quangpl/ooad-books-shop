import React from 'react';
import NumericInput from './NumericInput'
import { Table, Input, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                >
                    {children}
                </div>
            );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                        children
                    )}
            </td>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = props.columns;
        this.columns.push(
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            }
        );

        var count = 0;
        for (var i in props.dataSource) {
            ++count;
        }

        this.state = {
            dataSource: props.dataSource,
            count: { count },
        }
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = this.state.dataSource[0];
        // generate new id

        // for(var i in newData){
        //     if(newData.hasOwnProperty(i)){
        //         newData[i]='';
        //     }
        // }
        // const newData = {
        //   key: count,
        //   name: `Edward King ${count}`,
        //   age: 32,
        //   address: `London, Park Lane no. ${count}`,
        // };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

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
                    name: 'abc',
                    genre: 'abc',
                    author: 'abc',
                    realeaseYear: '1000',
                    publisher: 'abc',
                    price: '20.000',
                    importDate: '1/1/1',
                }
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
                        <Row style={{display: 'flex', justifyContents:'center'}}>
                            <Button>Thêm</Button>
                        </Row>
                    </Form>
                </div>
                <Row>
                    <EditableTable dataSource={dataSource} columns={columns} />
                </Row>
            </div>
        );
    }
}

const WrappedBookManagement = Form.create({ name: "normal_login" })(
    BookManagement
  );

export default WrappedBookManagement;