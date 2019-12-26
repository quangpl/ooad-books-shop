import React, { Component } from "react";
import { Row, Col, Button, Input, message } from "antd";
import "../assets/css/Cart.css";
import BookCart from "./BookCart";
import BillService from "../services/admin/bill";
import CustomerService from "../services/admin/customer"
const billService = new BillService();
const customerService = new CustomerService();


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: 0
    };
  }

  async componentDidMount() {
    let listProduct = localStorage.getItem("products");
    listProduct = JSON.parse(listProduct);
    await this.setState({
      data: listProduct
    });
    await this.setState({
        value: this.getValue(listProduct)
    })
  }

  getValue = data => {
    let value=0;
    for(let i=0;i<data.length;i++){
        value+= data[i].unitPrice * (100-data[i].discount_rate)/100;
    }
    return value;
  };

  onSubmit = async () =>{
    console.log(this.state.data);
    const bookIds = this.state.data.map(e=>e.id);
    console.log(bookIds);
    const customer = await customerService.getByToken();
    console.log({
      customerId: customer._id,
      employeeId: "system",
      books: bookIds,
      value: this.state.value
    });
    await billService.add({
      customerId: customer._id,
      employeeId: "system",
      books: bookIds,
      value: this.state.value
    });
    message.success("Bạn đã đặt hàng thành công!");
  }
  render() {
    return (
      <div>
        <div className="title">Giỏ Hàng</div>

        <Row>
          <Col xs={24} sm={12} md={16} lg={20}>
            <div className="list_book_cart">
              {this.state.data.map(e => (
                <BookCart
                  key={e.id}
                  name={e.name}
                  link_image={e.image}
                  price={e.unitPrice}
                  discount_rate={e.discount_rate}
                  numberOfBook={e.quantity}
                ></BookCart>
              ))}
            </div>
          </Col>

          <Col xs={24} sm={12} md={8} lg={4}>
            <div className="box_bill_cart">
              <div className="box_money_cart">
                <span>Thành tiền: </span>
              <span className="bill_cart_money">{this.state.value}đ</span>
              </div>
              <div className="proceed_to_order">
                <Button type="danger" onClick={this.onSubmit}>Tiến hành đặt hàng</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cart;
