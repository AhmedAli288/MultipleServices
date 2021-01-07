import React, { Component } from 'react'
import MainLogo from '../assets/images/main-logo.png'
import '../Styles/css/home.css'

import cart1 from '../assets/images/index/cart/img-01.png'
import cart2 from '../assets/images/index/cart/img-02.png'
import cart3 from '../assets/images/index/cart/img-03.png'
import cart4 from '../assets/images/index/cart/img-04.png'
import cart5 from '../assets/images/index/cart/img-05.png'
import cart6 from '../assets/images/index/cart/img-06.png'


import InsImg from '../assets/images/insight/user-img.jpg'

import HeadImg1 from '../assets/images/img-01.jpg'
import HeadImg2 from '../assets/images/img-02.jpg'


export default class Header extends Component {
    render() {
        return (
            <div>
                  <header>
                    <div className="sl-main-header">
                    <strong className="sl-main-header__logo">
                        <a href="index-2.html"><img src={MainLogo} alt="Logo" /></a>
                    </strong>
                    <div className="sl-main-header__content">
                        <div className="sl-main-header__upper">
                        <form className="sl-main-form">
                            <div className="sl-form-group sl-main-form__input1 sl-loading">
                            <input className="form-control sl-form-control" type="text" placeholder="Search anything you want" />
                            </div>
                            <div className="sl-form-group sl-main-form__input2">
                            <input className="form-control sl-form-control" type="text" placeholder="Detect my location" />
                            <a href="javascript:void(0);" className="sl-right-icon sl-arrow-icon"><i className="fas fa-angle-down" /></a>
                            <a href="javascript:void(0);" className="sl-right-icon"><i className="fa fa-bullseye" /></a>
                            <div className="sl-distance">
                                <div className="sl-distance__description">
                                <label htmlFor="amountfour">Distance:</label>
                                <input type="text" id="amountfour" readOnly />
                                </div>                                           
                                <div id="slider-range-min" />
                            </div>
                            </div>
                            <div className="sl-form-group sl-main-form__input3">
                            <div className="sl-select">
                                <select>
                                <option hidden>Service Providers</option>
                                <option>type 1</option>
                                <option>type 2</option>
                                <option>type 3</option>
                                </select>
                            </div>
                            </div>
                        </form>
                        <div className="sl-input-group">
                            <a href="javascript:void(0);" className="btn sl-btn sl-btn-active sl-advance-btn">
                            <span>Search Now</span>
                            <span>
                                <em className="sl-advance-icon">
                                <i />
                                <i />
                                <i />
                                </em>
                            </span>
                            </a>
                        </div>
                        <div className="sl-main-form__btn">
                            <a href="javascript:void(0);" className="btn sl-btn sl-btn-active"><i className="fa fa-search" /></a>
                        </div>
                        <div className="sl-topbar-notify">
                            <div className="sl-topbar-notify__icons dropdown sl-dropdown">
                            <a href="javascript:void(0);" className="sl-topbar-notify__anchor" id="slMessages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-envelope" />
                                <span className="sl-topbar-notify__circle">
                                <em className="sl-bg-green">0</em>
                                </span>
                            </a>
                            <ul className="dropdown-menu sl-dropdown__menu sl-dropdown__notify" aria-labelledby="slMessages">
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-unread-messages sl-dropdown__notify__text">
                                    <i className="fa fa-envelope" /><span>Adipisicing elit sed doiusmod tempor incide sed doiusmod</span>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-unread-messages sl-dropdown__notify__text">
                                    <i className="fa fa-envelope" /><span>Consectetur adipisice elitsed eiusmod temp</span>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-unread-messages sl-dropdown__notify__text">
                                    <i className="fa fa-envelope-o" /><span>Incididunt ut labore et dolore magna aliqua</span>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-dropdown__notify__text">
                                    <i className="fa fa-envelope" /><span>Enim ad minim veniam quis nostrud</span>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-dropdown__notify__text">
                                    <i className="fa fa-envelope" /><span>Exercitation ullamco laboris nisi ut aliquip</span>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-dropdown__notify__showall">Show All</a>
                                </li>
                            </ul>
                            </div>
                            <div className="sl-topbar-notify__icons dropdown sl-dropdown">
                            <a href="javascript:void(0);" className="sl-topbar-notify__anchor" id="slNotifications" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-info-circle" />
                                <span className="sl-topbar-notify__circle">
                                <em className="sl-bg-red-orange">04</em>
                                </span>
                            </a>
                            <ul className="dropdown-menu sl-dropdown__menu sl-dropdown__notify" aria-labelledby="slMessages">
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-unread-messages">Consectetur adipisicing elit, sed do eiusmod tem por incididunt ut labore et dolore magna</a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-unread-messages">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);">Commodo consequat duis aute irure dolor intae reprehenderit in voluptate velit esse cillum</a>
                                </li>
                                <li className="nav-item">
                                <a href="javascript:void(0);" className="sl-dropdown__notify__showall">Show All</a>
                                </li>
                            </ul>
                            </div>
                            <div className="sl-topbar-notify__icons dropdown">
                            <a href="javascript:void(0);" className="sl-topbar-notify__anchor" id="slCart" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-shopping-cart" />
                                <span className="sl-topbar-notify__circle">
                                <em className="sl-bg-blue">12</em>
                                </span>
                            </a>
                            <div className="dropdown-menu sl-dropdown__cart" aria-labelledby="slCart">
                                <h6>Shopping Cart</h6>
                                <ul>
                                    <li>
                                        <img src={cart1} alt="Image Description" />
                                        <div className="sl-dropdown__cart__description">
                                        <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                        <span className="sl-cart-price">$11.19</span>
                                        <a className="sl-cart-delete" href="javascript:void(0);">Delete Item</a>
                                        </div>
                                        <form className="sl-vlaue-btn">
                                        <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                                        <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                                        <a href="javascript:void(0);" className="sl-input-increment">+</a>
                                        </form>
                                    </li>
                                    <li>
                                        <img src={cart2} alt="Image Description" />
                                        <div className="sl-dropdown__cart__description">
                                        <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                        <span className="sl-cart-price">$13.50</span>
                                        <a className="sl-cart-delete" href="javascript:void(0);">Delete Item</a>
                                        </div>
                                        <form className="sl-vlaue-btn">
                                        <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                                        <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                                        <a href="javascript:void(0);" className="sl-input-increment">+</a>
                                        </form>
                                    </li>
                                    <li>
                                    <img src={cart3} alt="Image Description" />
                                    <div className="sl-dropdown__cart__description">
                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                    <span className="sl-cart-price">$8.30</span>
                                    <a className="sl-cart-delete" href="javascript:void(0);">Delete Item</a>
                                    </div>
                                    <form className="sl-vlaue-btn">
                                    <a href="javascript:void(0);" className="sl-input-decrement">-</a>
                                    <input className="sl-input-number" type="number" defaultValue={1} min={0} max={1000} />
                                    <a href="javascript:void(0);" className="sl-input-increment">+</a>
                                    </form>
                                </li>
                                </ul>
                                <div className="sl-cart-footer">
                                <div className="sl-cart-footer__total">
                                    <span>Subtotal</span>
                                    <em>$32.99</em>
                                </div>
                                <div className="sl-cart-footer__btn">
                                    <a className="btn sl-btn" href="javascript:void(0);">Proceed To Checkout</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="sl-user sl-userdropdown">
                            <a href="javascript:void(0);">
                            <img src={InsImg} alt="Image Description" />
                            <span className="sl-user__description"><em className="d-block">Evening!</em>Stephnie</span>
                            <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="sl-usermenu">
                            <li>
                                <a href="dashboard-insight.html">
                                <i className="fa fa-tachometer" /><span>Insights</span>
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-vendor.html">
                                <i className="fa fa-shopping-cart" /><span>Vendors</span>
                                </a>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                                <a href="javascript:void(0);" className="sl-notification sl-noticolor1">
                                <i className="fa fa-star" /><span>Manage Appointments</span>
                                </a>
                                <ul className="sub-menu">
                                <li><a href="dashboard-appointment-single.html">Appointment Single</a></li>
                                <li><a href="dashboard-all-appointment.html">All Appointment</a></li>
                                <li><a href="dashboard-manage-time-slots.html">Manage Time Slots</a></li>
                                <li><a href="dashboard-manage-services.html">Manage Services &amp; Prices</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="dashboard-profile-settings.html">
                                <i className="fa fa-user" /><span>Profile Settings</span>
                                </a>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                                <a href="javascript:void(0);">
                                <i className="fa fa-bookmark" /><span>Manage Articles</span>
                                </a>
                                <ul className="sub-menu">
                                <li><a href="dashboard-article-list.html">Articles List</a></li>
                                <li><a href="dashboard-add-new-article.html">Add New Articles</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="dashboard-inbox.html">
                                <i className="fa fa-envelope" /><span>inbox</span>
                                </a>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                                <a href="javascript:void(0);">
                                <i className="fas fa-layer-group" /><span>Packages &amp; Payouts</span>
                                </a>
                                <ul className="sub-menu">
                                <li><a href="dashboard-buy-package.html">Packages</a></li>
                                <li><a href="dashboard-all-payouts.html">Payouts</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="dashboard-my-favorites.html">
                                <i className="fa fa-heart" /><span>My Favorites</span>
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-notifications.html">
                                <i className="fa fa-bell" /><span>Notifications</span>
                                </a>
                            </li>
                            <li className="sl-active">
                                <a href="dashboard-accountprivacy.html">
                                <i className="fa fa-lock" /><span>Account &amp; Privacy</span>
                                </a>
                            </li>
                            <li>
                                <a href="index-2.html">
                                <i className="fa fa-key" /><span>Logout</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="sl-main-upperBackbtn">
                            <a href="javascript:void(0);"><i className="fa fa-close" /></a>
                        </div>
                        </div>
                        <div className="sl-main-header__lower">
                        <nav className="navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#slMainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse sl-navigation" id="slMainNavbar">
                            <ul className="navbar-nav mr-auto sl-navbar-nav">
                                <li className="nav-item sl-navactive menu-item-has-mega-menu">
                                <a className="nav-link" href="javascript:void(0);">Home</a>
                                <div className="mega-menu nav">
                                    <ul className="mega-menu-row">
                                    <li className="mega-menu-col mega-menu-nav">
                                        <ul className="nav nav-tabs">
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#smartphones" className="active">Smartphones &amp; Gadgets</a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#jewelry">Jewelry and Watches</a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#camera">Camera And Photo</a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#clothing">Clothing and Shoes</a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#television">Audio and Television</a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#computers">Computers and IT</a>
                                        </li>
                                        <li className="nav-item nav-link">
                                            <a data-toggle="tab" href="#health">Health &amp; Beauty</a>
                                        </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col sl-viewproducts-holder tab-content">
                                        <div id="smartphones" className="tab-pane fade active show">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src={HeadImg2} alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Audio and Television</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src={cart1} alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={cart2} alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={cart3} alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={cart4} alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={cart5} alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={cart6} alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div id="jewelry" className="tab-pane fade">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src="images/img-02.jpg" alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Jewelry and Watches</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src="images/index/cart/img-01.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-02.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-03.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-04.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-05.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-06.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div id="camera" className="tab-pane fade">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src="images/img-02.jpg" alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Audio and Television</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src="images/index/cart/img-01.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-02.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-03.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-04.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-05.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-06.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div id="clothing" className="tab-pane fade">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src="images/img-02.jpg" alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Audio and Television</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src="images/index/cart/img-01.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-02.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-03.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-04.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-05.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-06.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div id="television" className="tab-pane fade ">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src="images/img-02.jpg" alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Audio and Television</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src="images/index/cart/img-01.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-02.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-03.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-04.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-05.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-06.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div id="computers" className="tab-pane fade">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src="images/img-02.jpg" alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Audio and Television</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src="images/index/cart/img-01.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-02.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-03.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-04.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-05.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-06.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div id="health" className="tab-pane fade">
                                        <div className="sl-productstab">
                                            <div className="sl-viewproducts">
                                            <figure className="sl-viewproducts__img">
                                                <img src="images/img-02.jpg" alt="img description" />
                                                <a href="javascript:void(0);" className="sl-sellertag"><em>Best Seller</em></a>
                                            </figure>
                                            <div className="sl-viewproducts__content">
                                                <h3>Office Mentor</h3>
                                                <div className="sl-featureRating">
                                                <span className="sl-featureRating__stars"><span /></span>
                                                <em>(1648 Feedback)</em>
                                                </div>
                                                <a href="vendor-single.html" className="btn sl-btn">View Products</a>
                                            </div>
                                            </div>
                                            <div className="sl-productsinfo">
                                            <div className="sl-dropdown__cart">
                                                <div className="sl-productsinfo__title">
                                                <h6>Audio and Television</h6>
                                                <a href="vendor-single.html">Show All</a>
                                                </div>
                                                <ul>
                                                <li>
                                                    <img src="images/index/cart/img-01.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-02.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Life Simplify</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-03.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-04.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Earbuds Earphones Stereo</a>
                                                    <span className="sl-cart-price">$11.19</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Ryan &amp; John</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-05.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Vintage Round Sunglasses</a>
                                                    <span className="sl-cart-price">$13.50</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="images/index/cart/img-06.png" alt="Image Description" />
                                                    <div className="sl-dropdown__cart__description">
                                                    <a className="sl-cart-title" href="javascript:void(0);">Phone Holder for Car</a>
                                                    <span className="sl-cart-price">$8.30</span>
                                                    <a className="sl-soldby" href="javascript:void(0);"><em>Sold by</em> Crown Lost Group</a>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="aboutus.html">About</a>
                                </li>
                                <li className="menu-item-has-mega-menu mega-menu-nav-pages">
                                <a href="javascript:void(0);">Service Providers</a>
                                <div className="mega-menu">
                                    <ul className="mega-menu-row">
                                    <li className="mega-menu-col">
                                        <ul>
                                        <li className="mega-menu-title"><h3>Graphic &amp; Design</h3></li>
                                        <li><a href="service-provider.html">Logo Design</a></li>
                                        <li><a href="service-provider.html">Brand Style Guides<i className="sl-menutag sl-menutagnew">NEW</i></a></li>
                                        <li><a href="service-provider.html">Game Design<i className="sl-menutag sl-menutagnew">NEW</i></a></li>
                                        <li><a href="service-provider.html">Graphics for Streamers</a></li>
                                        <li><a href="service-provider.html">Illustration</a></li>
                                        <li><a href="service-provider.html"><i className="sl-menutag sl-menutaghot">hot</i>Brochure Design</a></li>
                                        <li><a href="service-provider.html">Poster Design</a></li>
                                        <li><a href="service-provider.html">Flyer Design</a></li>
                                        <li><a href="service-provider.html">Book &amp; Album Covers</a></li>
                                        </ul>
                                        <ul>
                                        <li className="mega-menu-title"><h3>Business</h3></li>
                                        <li><a href="service-provider.html">Virtual Assistant</a></li>
                                        <li><a href="service-provider.html">Data Entry</a></li>
                                        <li><a href="service-provider.html">Market Research</a></li>
                                        <li><a href="service-provider.html">Product Research</a></li>
                                        <li><a href="service-provider.html">Presentations</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col">
                                        <ul>
                                        <li className="mega-menu-title"><h3>Digital Marketing</h3></li>
                                        <li><a href="service-provider.html">Social Media Marketing</a></li>
                                        <li><a href="service-provider.html">Content Marketing</a></li>
                                        <li><a href="service-provider.html">Video Marketing</a></li>
                                        <li><a href="service-provider.html">Email Marketing</a></li>
                                        <li><a href="service-provider.html">Crowdfunding</a></li>
                                        </ul>
                                        <ul>
                                        <li className="mega-menu-title"><h3>Writing &amp; Translation</h3></li>
                                        <li><a href="service-provider.html">Articles &amp; Blog Posts</a></li>
                                        <li><a href="service-provider.html">Resumes &amp; Cover Letters<i className="sl-menutag sl-menutaghot">hot</i></a></li>
                                        <li><a href="service-provider.html">Technical Writing</a></li>
                                        <li><a href="service-provider.html">Translation<i className="sl-menutag sl-menutagnew">New</i></a></li>
                                        </ul>
                                        <ul>
                                        <li className="mega-menu-title"><h3>Lifestyle</h3></li>
                                        <li><a href="service-provider.html">Online Lessons</a></li>
                                        <li><a href="service-provider.html">Arts &amp; Crafts</a></li>
                                        <li><a href="service-provider.html">Relationship Advice</a></li>
                                        <li><a href="service-provider.html">Health, Nutrition &amp; Fitness</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col">
                                        <ul>
                                        <li className="mega-menu-title"><h3>Video &amp; Animation</h3></li>
                                        <li><a href="service-provider.html">Animated Explainers</a></li>
                                        <li><a href="service-provider.html">Video Editing<i className="sl-menutag sl-menutagnew">NEW</i></a></li>
                                        <li><a href="service-provider.html">Short Video Ads</a></li>
                                        <li><a href="service-provider.html">Animated GIFs</a></li>
                                        <li><a href="service-provider.html">Logo Animation</a></li>
                                        <li><a href="service-provider.html">Intros &amp; Outros</a></li>
                                        <li><a href="service-provider.html">Live Action Explainers</a></li>
                                        <li><a href="service-provider.html">Character Animation</a></li>
                                        <li><a href="service-provider.html">3D Product Animation</a></li>
                                        <li><a href="service-provider.html">Lyric &amp; Music Videos</a></li>
                                        <li><a href="service-provider.html">Spokespersons Videos</a></li>
                                        </ul>
                                        <ul>
                                        <li className="mega-menu-title"><h3>Marketplace Listing</h3></li>
                                        <li><a href="service-provider.html">Product Descriptions<i className="sl-menutag sl-menutaghot">hot</i></a></li>
                                        <li><a href="service-provider.html">Product Photography</a></li>
                                        <li><a href="service-provider.html">Product Research</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col">
                                        <ul>
                                        <li className="mega-menu-title"><h3>Programming &amp; Tech</h3></li>
                                        <li><a href="service-provider.html">WordPress</a></li>
                                        <li><a href="service-provider.html">Website Builders &amp; CMS</a></li>
                                        <li><a href="service-provider.html">Game Development</a></li>
                                        <li><a href="service-provider.html">Web Programming</a></li>
                                        <li><a href="service-provider.html">E-Commerce Development</a></li>
                                        <li><a href="service-provider.html"><i className="sl-menutag sl-menutaghot">hot</i>Mobile Apps &amp; Web</a></li>
                                        <li><a href="service-provider.html">Desktop applications</a></li>
                                        <li><a href="service-provider.html">Support &amp; IT</a></li>
                                        <li><a href="service-provider.html">Chatbots</a></li>
                                        <li><a href="service-provider.html">Data Analysis &amp; Reports</a></li>
                                        <li><a href="service-provider.html">Convert Files</a></li>
                                        <li><a href="service-provider.html">Databases</a></li>
                                        </ul>
                                        <ul>
                                        <li className="mega-menu-title"><h3>Game Creation</h3></li>
                                        <li><a href="service-provider.html">Game Development</a></li>
                                        <li><a href="service-provider.html">Producers &amp; Composers</a></li>
                                        </ul>
                                    </li>
                                    </ul>
                                </div>
                                </li>
                                <li className="nav-item">
                                <a href="vendor-single.html">Vendor Products</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                                <li className="nav-item sl-dropdown">
                                <a href="javascript:void(0);">Page</a>
                                <ul className="sl-dropdown__menu">
                                    <li className="nav-item">
                                    <a href="legalprivacy.html">legal Privacy</a>
                                    </li>
                                    <li className="menu-item-has-children page_item_has_children">
                                    <a href="javascript:void(0);">Product</a>
                                    <ul className="sub-menu">
                                        <li>
                                        <a href="product-single.html">Product Single</a>
                                        </li>
                                        <li className="current-menu-item">
                                        <a href="search-result-products.html">Search Result Products</a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="menu-item-has-children page_item_has_children">
                                    <a href="javascript:void(0);">Blog</a>
                                    <ul className="sub-menu">
                                        <li>
                                        <a href="blog-list.html">Blog list</a>
                                        </li>
                                        <li className="current-menu-item">
                                        <a href="blog-grid.html">Blog Grid</a>
                                        </li>
                                        <li>
                                        <a href="blog-single.html">Blog Single</a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="menu-item-has-children page_item_has_children">
                                    <a href="javascript:void(0);">Service</a>
                                    <ul className="sub-menu">
                                        <li>
                                        <a href="service-provider.html">Service Provider</a>
                                        </li>
                                        <li className="current-menu-item">
                                        <a href="service-provider-single.html">Service Provider Single</a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <a href="vendor-become.html">Vendor Become</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="register.html">Register</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="comingsoon.html">Comingsoon</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="404.html">404 Error</a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            </div>  
                        </nav>
                        <div className="sl-lower-right">
                            <div className="sl-lower-right__content">
                            <i className="fas fa-mobile-alt" />
                            <p>Expreience our mobile app - <a href="javascript:void(0);">Download Now</a></p>
                            </div>
                            <div className="sl-lower-right__content">
                            <i className="fas fa-plane" />
                            <p>Free shipping over 2M locations</p>
                            <i className="fa fa-info-circle toltip-content" data-tipso="Location" />
                            </div>
                            <div className="sl-lower-right__content sl-dropdown">
                            <a href="javascript:void(0);">
                                <i className="fas fa-headphones-alt" />Help<i className="fas fa-caret-down" />
                            </a>
                            <ul className="sl-dropdown__menu">
                                <li className="nav-item">
                                <a href="vendor-single.html">Author/Vendor Detail Page</a>
                                </li>
                                <li className="nav-item">
                                <a href="register.html">Register as Customer</a>
                                </li>
                                <li className="nav-item">
                                <a href="register.html">Register as Service Provider</a>
                                </li>
                                <li className="nav-item">
                                <a href="vendor-become.html">Become Vendor</a>
                                </li>
                                <li className="nav-item">
                                <a href="product-single.html">Shipping &amp; Refund Policy</a>
                                </li>
                                <li className="nav-item">
                                <a href="404.html">404 Error</a>
                                </li>
                                <li className="nav-item">
                                <a href="comingsoon.html">Coming Soon</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="sl-main-header__lower--btn">
                            <a href="javascript:void(0);" className="btn sl-btn sl-btn-active">More Info</a>
                        </div>
                        <div className="sl-main-lowerBackbtn">
                            <a href="javascript:void(0);"><i className="fa fa-close" /></a>
                        </div>
                        </div>
                    </div>
                    {/* Login Popup Start*/}
                    <div className="modal fade sl-loginpopup" tabIndex={-1} role="dialog" id="loginpopup" data-backdrop="static">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="sl-modalcontent modal-content">
                            <div className="sl-popuptitle">
                            <h4>Login</h4>
                            <a href="javascript:void(0);" className="sl-closebtn close"><i className="lnr lnr-cross" data-dismiss="modal" /></a>
                            </div>
                            <div className="modal-body">
                            <form className="sl-formtheme sl-formlogin">
                                <fieldset>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control sl-form-control" placeholder="Your Email*" defaultValue="user@domain.com" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control sl-form-control" placeholder="Password*" defaultValue="user@domain.com" />
                                </div>
                                <div className="form-group sl-btnarea">
                                    <a href="dashboard-insight.html" className="btn sl-btn">login</a>
                                    <div className="sl-checkbox">
                                    <input id="remember" type="checkbox" />
                                    <label htmlFor="remember">Remember me here</label>
                                    </div>
                                </div>
                                </fieldset>
                            </form>
                            <span className="sl-optionsbar"><em>or</em></span>
                            <div className="sl-loginicon">
                                <ul>
                                <li><a href="javascript:void(0);" className="sl-facebookbox"><i className="fab fa-facebook-f" />Via facebook</a></li>
                                <li><a href="javascript:void(0);" className="sl-googlebox"><i className="fab fa-google" />Via google</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="modal-footer">
                            <div className="sl-popup-footerterms">
                                <span>By signing in  you agree to these <a href="legalprivacy.html"> Terms &amp; Conditions</a> &amp; consent to<a href="legalprivacy.html"> Cookie Policy &amp; Privacy Policy.</a></span>
                            </div>
                            <div className="sl-loginfooterinfo">
                                <a href="javascript:void(0);"><em>Not a member?</em> Signup Now</a>
                                <a href="javascript:;" className="sl-forgot-password">Forgot password?</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Login Popup End*/}
                    </div>
                </header>
            </div>
        )
    }
}
