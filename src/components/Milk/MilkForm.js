import React, { Component } from 'react'

import '../Milk/MilkForm.css'
import '../Styles/css/main.css'

import cart1 from '../assets/images/milk/milk1.png'
import cart2 from '../assets/images/milk/milk4.png'


export default class MilkForm extends Component {
    render() {
        return (
<div className="milk_cart">
    <h6>Monthly Subscription</h6>
    <ul>
        <li>
            <img src={cart1} alt="Image Description" />
            <div className="col-5 sl-dropdown__cart__description">
                <a className="sl-cart-title" href="javascript:void(0);">Cow Milk 1kg</a>
                <span className="sl-cart-price">Rs. 110.00</span>
            </div>
            <div className="col-3 total-price">
                <div className="heade">Total:</div>
                <div className="price-heade">Rs. 110</div>
            </div>
            <form className="col-2 sl-vlaue-btn">
                <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                <a href="javascript:void(0);" className="sl-input-increment">+</a>
            </form>
        </li>
        <li>
            <img src={cart2} alt="Image Description" />
            <div className="col-5 sl-dropdown__cart__description">
                <a className="sl-cart-title" href="javascript:void(0);">Buffalo Milk 1kg</a>
                <span className="sl-cart-price">Rs. 130.00</span>
            </div>
            <div className="col-3 total-price">
                <div className="heade">Total:</div>
                <div className="price-heade">Rs. 130</div>
            </div>
            <form className="col-2 sl-vlaue-btn">
                <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                <a href="javascript:void(0);" className="sl-input-increment">+</a>
            </form>
        </li>
        
    </ul>
</div>
    
        )
    }
}