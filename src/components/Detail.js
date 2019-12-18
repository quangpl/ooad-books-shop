import React from "react";
import DetailDescription from "./DetailDescription";
import DetailComment from "./DetailComment";
import _ from "lodash";
import CustomerService from "../services/customer"
import { Row, Col, Divider, Typography, InputNumber, Button } from "antd";
import { Layout, Menu, Breadcrumb, Icon, Avatar, Rate } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
export default class Detail extends React.Component {
  constructor(props){
super(props);
this.state = {
  data :{}
}
  }
  async componentDidMount(){
const customerService = new CustomerService();
this.setState({
  data: await customerService.getById(this.props.match.params.id)
});
console.log(await customerService.getById(this.props.match.params.id));
  }
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
                  {" "}
                  {this.state.data.unitPrice} đ
                </b>
                <span className="detail-info--discount">(-22%)</span>
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
              <InputNumber min={1} max={10} defaultValue={3} />
              <Button
                type="danger"
                shape="round"
                icon="shopping-cart"
                size="large"
                onClick={()=>{
                  //  let list = localStorage.getItem("cart");
                  //  if(!list){
                  //    list = new Array(10);
                  //  }
                  //  list.push(this.props.match.params.id);
                  //  list = _.uniq(list);
                  // localStorage.setItem("cart", list);
                  alert("Add to cart");
                }}
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
