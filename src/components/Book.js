import React,{Component} from 'react'
import '../assets/css/Book.css'
import { Icon } from 'antd'
class Book extends React.Component {
    constructor(props){
        super(props)
    }
    
  render(){
      return(
        <span class="book">
            <a>
                <img src={this.props.image} class="image_book"></img>
            </a>
                
            <figure>
                <h3>{this.props.name}</h3>
                <p>{this.props.author}</p>
                <span>
                    <strong>{this.props.price}</strong>
                    <span> -{this.props.salePricePercent}%  </span>
                    <span class="alignment_right"><strike>{this.props.originalPrice}</strike></span>
                    <button class="save_button">
                        <Icon type="heart" class="alignment_left"></Icon>
                    </button>
                </span>
            </figure>   
        </span>   
      )
  }
}

export default Book;