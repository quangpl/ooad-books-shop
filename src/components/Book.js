import React,{Component} from 'react'
import '../assets/css/Book.css'
import { Button } from 'antd'

import {
    
    Link
  } from "react-router-dom";
import _default from 'antd/lib/date-picker';

class Book extends React.Component {
    constructor(props){
        super(props)
    }
    
  render(){
      return (
        <Link to="/detail">
          <div class="book">
            <span class="discount"> -{this.props.discount}% </span>
            <img src={this.props.image} class="image_book"></img>

            <h3 class="title_book">{this.props.name}</h3>

            <div class="book_info">
              <div className="price-info">
                <b class="price">
                  {this.props.price} đ 
                </b>

                <p className="original-price">
                  <strike>{this.props.originalPrice} đ</strike>
                </p>
              </div>
              <Button shape="circle" icon="heart" />
            </div>
          </div>
        </Link>
      );
  }
}

export default Book;