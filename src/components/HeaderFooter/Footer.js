import React, { Component } from 'react'

import flag1 from '../assets/images/index/footer/flags/img-01.jpg'
import flag2 from '../assets/images/index/footer/flags/img-02.jpg'
import flag3 from '../assets/images/index/footer/flags/img-03.jpg'
import flag4 from '../assets/images/index/footer/flags/img-04.jpg'
import flag5 from '../assets/images/index/footer/flags/img-05.jpg'

import app1 from '../assets/images/index/footer/app/img-01.jpg'
import app2 from '../assets/images/index/footer/app/img-02.jpg'

import pay1 from '../assets/images/index/footer/payments/img-01.jpg'
import pay2 from '../assets/images/index/footer/payments/img-02.jpg'
import pay3 from '../assets/images/index/footer/payments/img-03.jpg'
import pay4 from '../assets/images/index/footer/payments/img-04.jpg'
import pay5 from '../assets/images/index/footer/payments/img-05.jpg'
import pay6 from '../assets/images/index/footer/payments/img-06.jpg'

import FootLogo from '../assets/images/index/footer/footer-logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer>
                    <section className="sl-footer-section sl-footerUpper">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <ul>
                            <li>
                                <h6>Listings By Skills</h6>
                                <a href="javascript:void(0);">Show All</a>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Art &amp; Design</a></p>
                                <span>(58553)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Web &amp; Development</a></p>
                                <span>(85651)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Search Engine Optimazation</a></p>
                                <span>(45324)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Law and Finance</a></p>
                                <span>(3255688)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Marketing &amp; Management</a></p>
                                <span>(12456)</span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <ul className="sl-footerUpper__flags">
                            <li>
                                <h6>Listings By Location</h6>
                                <a href="javascript:void(0);">Show All</a>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);"><img src={flag1} alt="Image Description" />New York</a></p>
                                <span>(58553)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);"><img src={flag2} alt="Image Description" />United Emirated</a></p>
                                <span>(85651)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);"><img src={flag3} alt="Image Description" />Rome</a></p>
                                <span>(45324)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);"><img src={flag4} alt="Image Description" />United Kingdom</a></p>
                                <span>(3255688)</span>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);"><img src={flag5} alt="Image Description" />Canada</a></p>
                                <span>(12456)</span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <ul className="sl-footerUpper__links">
                            <li>
                                <h6>For Vendors</h6>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Users Testimonial<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">How To Use - User Manual<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Donate Us<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Download Vendor Catalog<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Vendor Regitration Process<i className="fa fa-angle-right" /></a></p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <ul className="sl-footerUpper__links">
                            <li>
                                <h6>Useful Links</h6>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Read More About us<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Frequent asked Questions<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Support Help Desk<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">My Account<i className="fa fa-angle-right" /></a></p>
                            </li>
                            <li>
                                <p><a href="javascript:void(0);">Create New Account<i className="fa fa-angle-right" /></a></p>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="sl-footer-section sl-footerCenter">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="sl-footerCenter__logoSection">
                            <a href="javascript:void(0);"><img src={FootLogo} alt="Image Description" /></a>
                            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore etolore magna aliqua enim adena minim veniam quistane nostrud catate ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className="sl-brands">
                                <li><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="javascript:void(0);"><i className="fab fa-facebook-messenger" /></a></li>
                                <li><a href="javascript:void(0);"><i className="fab fa-dribbble" /></a></li>
                                <li><a href="javascript:void(0);"><i className="fab fa-pinterest-p" /></a></li>
                                <li><a href="javascript:void(0);"><i className="fab fa-quora" /></a></li>
                                <li><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <ul className="sl-footerCenter__contact">
                            <li>
                                <i className="fas fa-headphones-alt" />
                                <div className="sl-footerCenter__contact__description">
                                <p>24/7 Support:</p>
                                <h6><a href="javascript:void(0);">0800 12345 678</a></h6>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-envelope" />
                                <div className="sl-footerCenter__contact__description">
                                <p>Say Hello To Us</p>
                                <h6><a href="javascript:void(0);">Click Here to Contact Us</a></h6>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt" />
                                <div className="sl-footerCenter__contact__description">
                                <p>Our Active Location</p>
                                <h6><a href="javascript:void(0);">167 Airline Suite, 456GA3, UK</a></h6>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="sl-footerCenter__newsletter">
                            <h6>Signup Newsletter</h6>
                            <form>
                                <div className="sl-input-group">
                                <input className="form-control sl-form-control sl-prepend" type="email" placeholder="Enter Your Email" required />
                                <button type="submit" className="btn sl-btn sl-btn-active sl-append"><i className="fa fa-angle-right" /></button>
                                </div>
                            </form>
                            <h6>Download Mobile App</h6>
                            <div className="sl-app">
                                <a href="javascript:void(0);"><img src={app1} alt="Image Description" /></a>
                                <a href="javascript:void(0);"><img src={app2} alt="Image Description" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <div className="sl-footerLower">
                        <div className="container">
                            <div className="sl-footerLower__content">
                            <p>Copyrights © 2019. All Rights Reserved by <a href="javascript:void(0);">Amentotech</a>.</p>
                            <ul className="sl-payments">
                                <li><a href="javascript:void(0);"><img src={pay1} alt="Image Description" /></a></li>
                                <li><a href="javascript:void(0);"><img src={pay2} alt="Image Description" /></a></li>
                                <li><a href="javascript:void(0);"><img src={pay3} alt="Image Description" /></a></li>
                                <li><a href="javascript:void(0);"><img src={pay4} alt="Image Description" /></a></li>
                                <li><a href="javascript:void(0);"><img src={pay5} alt="Image Description" /></a></li>
                                <li><a href="javascript:void(0);"><img src={pay6} alt="Image Description" /></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
