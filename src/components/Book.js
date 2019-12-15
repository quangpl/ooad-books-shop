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
      return(
        <div class="book">
                <Link>  
                    <span class="discount"> -{this.props.salePricePercent}%  </span>
                    <img src={this.props.image} class="image_book"></img>
                </Link>

                <h3 class="title_book">{this.props.name}</h3>
                
                <div class="book_info">
                    <strong class="price">{this.props.price}</strong>
                    <span class="origin_price"><strike>{this.props.originalPrice}</strike></span> 
                    
                    <Button size="small" shape="circle" icon="heart" />
                </div>
        </div>   

      )
  }
}

export default Book;