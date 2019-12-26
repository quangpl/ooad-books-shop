import React from "react";
import DetailDescription from "./DetailDescription";
import DetailComment from "./DetailComment";
import _ from "lodash";
import CustomerService from "../services/customer";
import { Row, Col, Divider, Typography, InputNumber, Button } from "antd";
import { Layout, Menu, Breadcrumb, Icon, Avatar, Rate, message } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      quantity: 0
    };
  }
  async componentDidMount() {
    const customerService = new CustomerService();
    this.setState({
      data: await customerService.getById(this.props.match.params.id)
    });
    console.log(await customerService.getById(this.props.match.params.id));
  }

  onSelect = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("Vui lòng đăng nhập để sử dụng chức năng này");
      return false;
    }
  };

  onSelectPay = () => {
    console.log("dasW")
    let products = localStorage.getItem("products");
    let data;
    if (!products) {
      const newProduct = {
        id: this.props.match.params.id,
        name: this.state.data.name,
        image: this.state.data.image,
        quantity: this.state.quantity,
        unitPrice: this.state.data.unitPrice,
        discount_rate: this.state.data.discount_rate
      };
      data =[newProduct]
      
        localStorage.setItem("products", JSON.stringify(data));
    } else {
        let listProduct = localStorage.getItem("products");
        listProduct = JSON.parse(listProduct);
        listProduct = listProduct.filter(e => e.id !== this.props.match.params.id);
        listProduct.push({
          id: this.props.match.params.id,
          name: this.state.data.name,
          image: this.state.data.image,
          quantity: this.state.quantity,
          unitPrice: this.state.data.unitPrice,
          discount_rate: this.state.data.discount_rate
        });
         console.log(listProduct);
         localStorage.setItem("products", JSON.stringify(listProduct));
    }
    //  localStorage.setItem("products", JSON.stringify({ products }));
     message.success("Thêm vào giỏ hàng thành công!");
  };
  render() {
    return (
      <>
        <Row className="detail mt-1">
          <Col md={12} lg={12} sm={6} xs={24} className="detail-thumbnail">
            <img width="60%" src={`${this.state.data.image}`} />
          </Col>
          <Col md={12} lg={12} sm={18} xs={24} className="detail-info">
            <div className="detail-info--text">
              <h2>{this.state.data.name}</h2>
              <p>
                <b>Tác giả :</b> {this.state.data.author}
              </p>
              <p>
                <b>Lượt xem : </b> {this.state.data.viewCount}
              </p>
            </div>
            <Divider />
            <div className="detail-info--text">
              <span>
                <b>Giá :</b>
                <b className="detail-info--price">
                  {this.state.data.unitPrice} đ
                </b>
                <span className="detail-info--discount">
                  (-{this.state.data.discount_rate}%)
                </span>
              </span>

              <p>
                <b>Giá gốc : </b>{" "}
                <s className="detail-info--discount">
                  {this.state.data.unitPrice} đ
                </s>
              </p>
            </div>
            <Divider />
            <div className="detail-info--action">
              <b>Số lượng:</b>
              <InputNumber
                min={1}
                max={10}
                defaultValue={0}
                onChange={e => {
                  console.log(e);
                  this.setState({
                    quantity: e
                  });
                }}
              />
              <Button
                type="danger"
                shape="round"
                icon="shopping-cart"
                onClick={this.onSelectPay}
              >
                Chọn mua
              </Button>
              <Button shape="circle" icon="heart" />
            </div>
          </Col>
        </Row>
        <Title level={3} className="mt-1">
          Miêu tả sản phẩm
        </Title>
        {this.state.data.description}
        <Title level={3} className="mt-1">
          Đánh giá
        </Title>
        <DetailComment />
      </>
    );
  }
}
