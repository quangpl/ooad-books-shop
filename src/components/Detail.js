import React from "react";
import DetailDescription from "./DetailDescription";
import DetailComment from "./DetailComment";

import { Row, Col, Divider, Typography, InputNumber, Button } from "antd";
import { Layout, Menu, Breadcrumb, Icon, Avatar, Rate } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export default class Detail extends React.Component {
  render() {
    return (
      <>
        <Row className="detail mt-1">
          <Col md={12} lg={12} sm={6} xs={24} className="detail-thumbnail">
            <img width="60%" src="https://i.imgur.com/k7mVcXD.jpg" />
          </Col>
          <Col md={12} lg={12} sm={18} xs={24} className="detail-info">
            <div className="detail-info--text">
              <h2>
                Màn Hình Dell U2419H 24inch FullHD 8ms 60Hz IPS - Hàng Chính
                Hãng
              </h2>
              <Rate allowHalf defaultValue={2.5} />
              <p>
                <b>Tác giả :</b> Richard Wiseman
              </p>
              <p>
                <b>Lượt xem : </b>2000
              </p>
            </div>
            <Divider />
            <div className="detail-info--text">
              <span>
                <b>Giá :</b>
                <b className="detail-info--price"> 3.000.000 đ</b>
                <span className="detail-info--discount">(-22%)</span>
              </span>

              <p>
                <b>Giá gốc : </b>{" "}
                <s className="detail-info--discount">3.200.000 đ</s>
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
        <DetailDescription />
        <Title level={3} className="mt-1">
          Đánh giá
        </Title>
        <DetailComment />
      </>
    );
  }
}
