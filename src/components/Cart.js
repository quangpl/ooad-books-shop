import React,{Component} from 'react'
import {Row, Col, Button, Input} from 'antd'
import '../assets/css/Cart.css'
import BookCart from './BookCart'
class Cart extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div class="title">
                    <Row>
                        <Col span={24}>Giỏ hàng
                            <span> ({this.props.numberOfProduct} sản phẩm)</span>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col span={18}>
                        <div class="list_book_cart">    
                        
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                <BookCart name="Grace change Everything" link_image="https://www.gracethread.com/wp-content/uploads/2016/08/GCE-book-3D-600x600.jpg" author="Janna Wright" price="112.800" discount="40" originalPrice="188.00" numberOfBook="7"></BookCart>
                                
                        </div>
                    </Col>

                    <Col span={6}>
                        <div class="box_bill_cart">
                            <div class="box_money_cart">
                                <span>Tạm tính: </span>
                                <span >{this.props.price} đ</span>
                            </div> 
                            <div class="box_money_cart">
                                <span>Thành tiền: </span>
                                <span class="bill_cart_money">{this.props.price} đ</span>
                            </div>
                            <div class="proceed_to_order">
                                <Button type="danger" size="large">Tiến hành đặt hàng</Button>
                            </div>
                            <div>
                                <Input
                                    placeholder="Nhập mã giảm giá..."
                                    enterButton="Search"
                                    size="large"
                                    onSearch={value => console.log(value)}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Cart