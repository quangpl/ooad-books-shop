import React,{Component} from 'react'
import {Row, Col, InputNumber, Button} from 'antd'
import '../assets/css/BookCart.css'

class BookCart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
          <div className="book_cart">
            <Row>
              <Col span={6}>
                <img src={this.props.link_image} className="image_book_cart"></img>
              </Col>

              <Col span={16}>
                <div className="book_cart_info">
                  <p className="name_book_cart">{this.props.name}</p>
                  <p
                    style={{
                      color: "red"
                    }}
                  >
                    -{this.props.discount_rate}%
                  </p>
                  <p>
                    <span className="price_book_cart">{this.props.price}đ</span>
                  </p>
                  <div className="action_book_cart">
                    <Row>
                      <Col span={4}>
                        <Button className="btn">Xoá</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col span={2}>
                <div className="input_number">
                  <InputNumber
                    min={1}
                    max={1000}
                    defaultValue={this.props.numberOfBook}
                  />
                </div>
              </Col>
            </Row>
          </div>
        );
    }
}
export default BookCart