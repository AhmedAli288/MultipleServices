import React, { Component } from 'react'

import '../Laundry/form.css'
import '../Styles/css/main.css'

import Plus from '../assets/images/plus.svg'
import Minus from '../assets/images/minus.svg'
import WomenImg from '../assets/images/women.jpg'
import MenImg from '../assets/images/men.jpg'

import cart1 from '../assets/images/index/cart/img-01.png'
import cart2 from '../assets/images/index/cart/img-02.png'
import cart3 from '../assets/images/index/cart/img-03.png'


export default class form extends Component {
    render() {
        return (
<div>
<div className="laundry_cart">
                    <h6>Men Laundry</h6>
                    <ul>
                        <li>
                            <img src={cart1} alt="Image Description" />
                            <div className="col-5 sl-dropdown__cart__description">
                                <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                <span className="sl-cart-price">Rs. 11.19</span>
                            </div>
                            <div className="col-3 total-price">
                                <div className="heade">Total:</div>
                                <div className="price-heade">Rs. 780</div>
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
                                <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                <span className="sl-cart-price">Rs. 13.50</span>
                            </div>
                            <div className="col-3 total-price">
                                <div className="heade">Total:</div>
                                <div className="price-heade">Rs. 920</div>
                            </div>
                            <form className="col-2 sl-vlaue-btn">
                                <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                                <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                                <a href="javascript:void(0);" className="sl-input-increment">+</a>
                            </form>
                        </li>
                        <li>
                            <img src={cart3} alt="Image Description" />
                            <div className="col-5 sl-dropdown__cart__description">
                                <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                <span className="sl-cart-price">Rs. 8.30</span>
                            </div>
                            <div className="col-3 total-price">
                                <div className="heade">Total:</div>
                                <div className="price-heade">Rs. 650</div>
                            </div>
                            <form className="col-2 sl-vlaue-btn">
                                <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                                <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                                <a href="javascript:void(0);" className="sl-input-increment">+</a>
                            </form>
                        </li>
                    </ul>
                </div>



            {/* <div className="shopping-cart col-8">
                
                <div className="title">
                    Book Your Laundry
                </div>

                
                <div className="item_cart">
                    <div className="image">
                        <img src={MenImg} alt />
                    </div>
                    
                    <div className="quantity">
                        <h5 className="description">
                            Men Suit (Dry Clean)
                        </h5>
                        <div className="bttns">
                            <button className="minus-btn" type="button" name="button">
                                <img src={Minus} alt />
                            </button>
                                <input type="text" name="name" defaultValue={1} />
                            <button className="plus-btn" type="button" name="button">
                                <img src={Plus} alt />
                            </button>
                        </div>
                        <p className="description">
                           <span> Add to Cart </span>
                        </p>
                    </div>
                    <div className="total-price">Rs. 549</div>
                </div>
                
                <div className="item_cart">
                    <div className="image">
                        <img src={MenImg} alt />
                    </div>
                    <div className="quantity">
                        <h5 className="description">
                            Men Suit (Washing)
                        </h5>
                        <div className="bttns">
                            <button className="minus-btn" type="button" name="button">
                                <img src={Minus} alt />
                            </button>
                                <input type="text" name="name" defaultValue={1} />
                            <button className="plus-btn" type="button" name="button">
                                <img src={Plus} alt />
                            </button>
                        </div>
                        <p className="description">
                           <span> Add to Cart </span>
                        </p>
                    </div>
                    <div className="total-price">Rs. 870</div>
                </div>     
            </div> */}
</div>
        )
    }
}