import React from "react";
import HorizontalMenu from "./HorizontalMenu"
import Book from "./Book"
import CustomerService from "../services/customer"
import { Layout, Menu, Button, Icon, Avatar, Row, Col,Spin } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MenuItem } from "rc-menu";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data:[],
      dataSale:[],
      isLoad: true
    }
  }
async componentDidMount(){
  const customerService = new CustomerService();
  const books = await customerService.getBooks();
  const sales = await customerService.getBooksSale();
  await this.setState({
    data: books,
    dataSale: sales
  });

  this.setState({
    isLoad: false
  })
}
  render() {
    
   return (
     <>
       <span className="category">SÁCH MỚI</span>
       {this.state.isLoad ? (
         <Spin size="large" />
       ) : (
         <Row className="stack-book">
           {this.state.data.map(e => {
             return (
               <Col xs={24} sm={8} md={6} lg={4}>
                 <Book
                   id={e._id}
                   image={e.image}
                   name={e.name}
                   discount="0"
                   price={e.unitPrice}
                   originalPrice="0"
                   isFavorite="1"
                 />
               </Col>
             );
           })}
         </Row>
       )}

       <span className="category">TOP KHUYẾN MÃI</span>
       {this.state.isLoad ? (
         <Spin size="large" />
       ) : (
         <Row className="stack-book">
           {this.state.dataSale.map(e => {
             return (
               <Col xs={24} sm={8} md={6} lg={4}>
                 <Book
                   id={e._id}
                   image={e.image}
                   name={e.name}
                   discount="0"
                   price={e.unitPrice}
                   originalPrice="0"
                   isFavorite="1"
                 />
               </Col>
             );
           })}
         </Row>
       )}
     </>
   );
  }
}
