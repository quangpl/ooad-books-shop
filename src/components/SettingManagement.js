import React from 'react';
import NumericInput from './NumericInput';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import { Checkbox } from 'antd';

//import { Responsive } from "react-responsive";
// function onChange(e) {
//     console.log(`checked = ${e.target.checked}`);
// }

class SettingManagement extends React.Component {
    constructor(props){
        super(props);

        // this.state={
        //   dataSource: props.dataSource,
        //   selectedRow: '',
        // }

        this.state={
            dataSource:[
                {
                },
            ],
            selectedRow: '',
        };
    }

    onClick = (data) => {
        console.log(data);
    }

    // onChange = e => {
    //     this.setState((state, e) => {
    //         state.isAdmin=e.target.checked; 
    //     });
    // }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    }

    handleDelete = key => {
        console.log(key);
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.id !== key) });
    };

    onClickRow = (data) => {
        return {
            onClick: () => {
                //this.handleDelete(data.id);
                //console.log(data);
                this.setState({
                    selectedRow: data,
                });
                //console.log(this.state);
            }
        }
    }

    onEdit = (data) => {
      console.log(data.username);
      if(data!==null){

      }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        var columns = [
          {
            title: "Name",
            dataIndex: 'nameId',
            width: "40%"   
          },
          {
            title: "Value",
            dataIndex: "value",
            width: "40%",
            editable: true
          },
          {
            title: "Action",
            dataIndex: "action",
            width: "20%",
            render:()=>{
                return(
                    <div className="action">
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(this.state.selectedRow.id)}>
                            <Button type="danger" icon="delete" /> 
                        </Popconfirm>
                        <Button type="primary" style={{marginLeft:5}} icon="edit" onClick={this.onEdit(this.state.selectedRow)}/> 
                    </div>
                )
            }
          }
        ];

            return (
              <div>
                <h1>Quản Lý Cài Đặt Quy Định</h1>
                <div>
                  <Form
                    onSubmit={this.handleSubmit}
                    wrapperCol={{ span: 23 }}
                    labelCol={{ span: 5 }}
                  >
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Tên" labelAlign="left">
                          {getFieldDecorator("name", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Tên" id='name'/>)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Giá trị" labelAlign="left">
                          {getFieldDecorator("value", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Giá trị" id='value'/>)}
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </div>
                  <Table
                    rowKey={row => row.id}
                    dataSource={this.state.dataSource}
                    columns={columns}
                    onRow={this.onClickRow}
                  />
                {/* <Responsive displayIn={["Mobile", "Tablet"]}>
                  This is a MOBILE/TABLET
                </Responsive>
                <Responsive displayIn={["Laptop"]}>
                  This is a LAPTOP or a Larger screen
                </Responsive> */}
              </div>
            );
    }
}

const WrappedSettingManagement = Form.create({ name: "setting_management" })(
    SettingManagement
  );

export default WrappedSettingManagement;