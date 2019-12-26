import React from 'react';
import NumericInput from './NumericInput';
import { Table, Input,message,Spin, InputNumber, Popconfirm, Form, Button, Radio, Layout, Select, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import { number } from 'prop-types';
import { Checkbox } from 'antd';
import BookTypeService from "../services/admin/book_type"
const bookTypeService = new BookTypeService();
class GenreManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      selectedRow: "",
      isLoad: true,
      isEdit: false,
      importDate: "",
      publishAt: ""
    };
  }

  async componentDidMount() {
    await this.setState({
      dataSource: await bookTypeService.getAll()
    });
console.log(await bookTypeService.getAll());
    this.setState({
      isLoad: false
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

       
        try {
          await bookTypeService.add(
           {name: values.name, slug: values.slug  }
          );
          message.success("Add book successfully");
          window.location.reload();
        } catch (e) {
          message.error("ERROR!");
        }
      }
    });
  };
   handleEdit = async()=> {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("update");
        await bookTypeService.update({
          id: this.state.selectedRow._id,
          name: values.name,
          slug: values.slug
        });
        console.log({
          _id: this.state.selectedRow._id,
          name: values.name,
          slug: values.slug
        });
        window.location.reload();
      }
    });
  }
  handleDelete = async data => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.id !== data) });
    await bookTypeService.delete(data);
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
        title: "Genre",
        dataIndex: "name",
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
        render: () => {
          return (
            <div className="action">
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(this.state.selectedRow._id)}
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
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "Không bỏ trống trường này!"
                      }
                    ]
                  })(<Input />)}
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
                  })(<Input />)}
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

const WrappedGenreManagement = Form.create({ name: "genre_management" })(
    GenreManagement
  );

export default WrappedGenreManagement;