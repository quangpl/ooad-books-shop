import React,{Component} from 'react'
import { Row, Col } from 'antd';
import Book from './Book.js'
import PostData from '../../src/list_book.json'
import '../assets/css/ListBook.css'

var books=[];
var lastBookRow=[];
class ListBook extends React.Component{
    
    constructor(props){
        super(props)
        this.state={currentIndex: 0};
        this.RowBook=this.RowBook.bind(this);
        //this.BookPerRow=this.BookPerRow.bind(this);
    }
    
    RowBook(){
        let rowNumber=PostData.length/4;
        let remainder=(PostData.length%4);
        //rowNumber+=(remainder==0);
        

        for(let index=0; index<rowNumber-1; ++index){
            this.state.currentIndex=index*4;
            books.push(<Row>
                <Col span={6}>
                    <Book image={PostData[this.state.currentIndex].image} name={PostData[this.state.currentIndex].title} author={PostData[this.state.currentIndex].author} price={PostData[this.state.currentIndex].price} salePricePercent={PostData[this.state.currentIndex].discount} originalPrice={PostData[this.state.currentIndex].originalPrice}></Book>
                </Col>
                <Col span={6}>
                    <Book image={PostData[this.state.currentIndex+1].image} name={PostData[this.state.currentIndex+1].title} author={PostData[this.state.currentIndex+1].author} price={PostData[this.state.currentIndex+1].price} salePricePercent={PostData[this.state.currentIndex+1].discount} originalPrice={PostData[this.state.currentIndex+1].originalPrice}></Book>
                </Col>
                <Col span={6}>
                    <Book image={PostData[this.state.currentIndex+2].image} name={PostData[this.state.currentIndex+2].title} author={PostData[this.state.currentIndex+2].author} price={PostData[this.state.currentIndex+2].price} salePricePercent={PostData[this.state.currentIndex+2].discount} originalPrice={PostData[this.state.currentIndex+2].originalPrice}></Book>
                </Col>
                <Col span={6}>
                    <Book image={PostData[this.state.currentIndex+3].image} name={PostData[this.state.currentIndex+3].title} author={PostData[this.state.currentIndex+3].author} price={PostData[this.state.currentIndex+3].price} salePricePercent={PostData[this.state.currentIndex+3].discount} originalPrice={PostData[this.state.currentIndex+3].originalPrice}></Book>
                </Col>
            </Row>)

        }

        if(remainder != 0)
        {
            let index=this.state.currentIndex+4;
            for(let i=0; i<remainder; ++i){
                lastBookRow.push(
                    <Col span={6}>
                        <Book image={PostData[index].image} name={PostData[index].title} author={PostData[index].author} price={PostData[index].price} salePricePercent={PostData[index].discount} originalPrice={PostData[index].originalPrice}></Book>
                    </Col>
                );
                
                ++index;
            }

            console.log(lastBookRow)
            
            books.push(<Row>{this.lastBookRow}</Row>);
            console.log(books)
        }
        return books;
        // for (let index = 0; index < 4; index++) {
        //     return(
        //         <p>hello</p>
        //     )
            
        //}

        

        // for (let index = 0; index < (PostData.length / 4) ; ++index){
        //     this.state.currentIndex=index*4
        //         <Row>
        //             {this.BookPerRow()}
        //         </Row>
            
        // }
        // for (let index = 0; index < PostData.length%4; ++index) {
        //     return(
        //         <>
        //             <Col span={6}>
        //                 <Book image={PostData[index].image} name={PostData[index].title} author={PostData[index].author} price={PostData[index].price} salePricePercent={PostData[index].discount} originalPrice={PostData[index].originalPrice}></Book>
        //             </Col>
                
        //         </>
        //     )
        // }
    }

    //  BookPerRow(bookNumber){

    //     for(let index=this.state.currentIndex; index<bookNumber; ++index){
    //         books.push(<Col span={6}><Book image={PostData[index].image} name={PostData[index].title} author={PostData[index].author} price={PostData[index].price} salePricePercent={PostData[index].discount} originalPrice={PostData[index].originalPrice}></Book></Col>)
    //             // <Col span={6}>
    //             //     <Book image={PostData[index].image} name={PostData[index].title} author={PostData[index].author} price={PostData[index].price} salePricePercent={PostData[index].discount} originalPrice={PostData[index].originalPrice}></Book>
    //             // </Col>
    //     }

    //     // for (let index = this.state.currentIndex; index < this.state.currentIndex + 4; ++index) {
    //     //     this.state.currentIndex=index;
    //     //     console.log(PostData[index].title);
    //     //     return(
    //     //         <>
    //     //             <Col span={6}>
    //     //                 <Book image={PostData[index].image} name={PostData[index].title} author={PostData[index].author} price={PostData[index].price} salePricePercent={PostData[index].discount} originalPrice={PostData[index].originalPrice}></Book>
    //     //             </Col>
                
    //     //         </>
    //     //     )
            
    //     // }
    //  }
    render(){
        return(
            <div>
                {this.RowBook()}
            </div>
        )
    }
}

export default ListBook
