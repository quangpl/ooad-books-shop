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

class GenreManagement extends React.Component {
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
            title: "Genre",
            dataIndex: 'name',
            width: "40%"   
          },
          {
            title: "Slug",
            dataIndex: "slug",
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
                <h1>Quản Lý Thể Loại</h1>
                <div>
                  <Form
                    onSubmit={this.handleSubmit}
                    wrapperCol={{ span: 23 }}
                    labelCol={{ span: 5 }}
                  >
                    <Row>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Tên thể loại" labelAlign="left">
                          {getFieldDecorator("gernename", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Tên thể loại" id='gernename'/>)}
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} sm={12} lg={12}>
                        <Form.Item label="Slug" labelAlign="left">
                          {getFieldDecorator("slug", {
                            rules: [
                              {
                                required: true,
                                message: "Không bỏ trống trường này!"
                              }
                            ]
                          })(<Input placeholder="Slug" id='slug'/>)}
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

const WrappedGenreManagement = Form.create({ name: "genre_management" })(
    GenreManagement
  );

export default WrappedGenreManagement;