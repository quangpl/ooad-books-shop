import React,{Component} from 'react'
import Book from './Book.js'
class ListBook extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div class="list_book">
                <Book image="https://salt.tikicdn.com/cache/550x550/ts/product/35/7e/51/5456c62294cb1f0abdaac4a611a00004.jpg" name="Tại sao thầy nói đúng" author="Richard Wiseman" price="73.261" salePricePercent="30" originalPrice="190.500"></Book>
                <Book image="https://salt.tikicdn.com/cache/550x550/ts/product/35/7e/51/5456c62294cb1f0abdaac4a611a00004.jpg" name="Tại sao thầy nói đúng" author="Richard Wiseman" price="73.261" salePricePercent="30" originalPrice="190.500"></Book>
                <Book image="https://salt.tikicdn.com/cache/550x550/ts/product/35/7e/51/5456c62294cb1f0abdaac4a611a00004.jpg" name="Tại sao thầy nói đúng" author="Richard Wiseman" price="73.261" salePricePercent="30" originalPrice="190.500"></Book>
                <Book image="https://salt.tikicdn.com/cache/550x550/ts/product/35/7e/51/5456c62294cb1f0abdaac4a611a00004.jpg" name="Tại sao thầy nói đúng" author="Richard Wiseman" price="73.261" salePricePercent="30" originalPrice="190.500"></Book>
                <Book image="https://salt.tikicdn.com/cache/550x550/ts/product/35/7e/51/5456c62294cb1f0abdaac4a611a00004.jpg" name="Tại sao thầy nói đúng" author="Richard Wiseman" price="73.261" salePricePercent="30" originalPrice="190.500"></Book>
                
            </div>

        )
    }
}

export default ListBook
