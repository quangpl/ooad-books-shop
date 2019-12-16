import React from "react";
import HorizontalMenu from "./HorizontalMenu"
import Book from "./Book"
import { Layout, Menu, Button, Icon, Avatar, Row, Col } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MenuItem } from "rc-menu";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Home extends React.Component {

  render() {
   return (
     <>
       <span className="category">SÁCH BÁN CHẠY</span>
       <Row className="stack-book">
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Button
           type="ommited"
           className="btn-load"
           shape="round"
           icon="down"
           size={128}
         >
           LOAD MORE
         </Button>
       </Row>

       <span className="category">TOP KHUYẾN MÃI</span>
       <Row className="stack-book">
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Button
           type="ommited"
           className="btn-load"
           shape="round"
           icon="down"
           size={128}
         >
           LOAD MORE
         </Button>
       </Row>
       <span className="category">TOP SÁCH KINH DOANH</span>
       <Row className="stack-book">
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Button
           type="ommited"
           className="btn-load"
           shape="round"
           icon="down"
           size={128}
         >
           LOAD MORE
         </Button>
       </Row>
       <span className="category">TOP TRUYỆN</span>
       <Row className="stack-book">
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Button
           type="ommited"
           className="btn-load"
           shape="round"
           icon="down"
           size={128}
         >
           LOAD MORE
         </Button>
       </Row>
       <span className="category">SÁCH ĐÃ XEM</span>
       <Row className="stack-book">
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Col xs={24} sm={8} md={6} lg={4}>
           <Book
             id="1"
             image="https://salt.tikicdn.com/cache/200x200/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg"
             name="Đừng Lựa Chọn An Nhàn Khi Còn Trẻ"
             discount="27"
             price="59000"
             originalPrice="81000"
             isFavorite="0"
           />
         </Col>
         <Button
           type="ommited"
           className="btn-load"
           shape="round"
           icon="down"
           size={128}
         >
           LOAD MORE
         </Button>
       </Row>
     </>
   );
  }
}
