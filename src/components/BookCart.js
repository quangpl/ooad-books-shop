import React,{Component} from 'react'
import {Row, Col, InputNumber, Button} from 'antd'
import '../assets/css/BookCart.css'

class BookCart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="book_cart">
                <Row>
                    <Col span={6}>
                        <img src={this.props.link_image} class="image_book_cart"></img>
                    </Col>

                    <Col span={16}>
                        <div class="book_cart_info">
                            <p class="name_book_cart">{this.props.name}</p>
                            <p>Nhà xuất bản: <span class="author_book_cart">{this.props.author}</span></p>
                            <p><span class="price_book_cart">{this.props.price}đ</span></p>
                            <div class="action_book_cart">
                                <Row>
                                    <Col span={4}>
                                        <Button class="btn">Xoá</Button>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Col>

                    
                    <Col span={2}>
                        <div class="input_number">
                            <InputNumber min={1} max={1000} defaultValue={this.props.numberOfBook}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default BookCart