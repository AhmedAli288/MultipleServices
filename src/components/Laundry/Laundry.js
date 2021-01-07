import React, { Component } from 'react'


import '../Styles/css/main.css'
import '../Styles/css/home.css'
import '../Laundry/Laundry.css'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

import Men from '../assets/images/men.jpg'
import feature1 from '../assets/images/index/featured-products/img-01.jpg'

import Form from '../Laundry/form'



export default class Laundry extends Component {
    render() {
        return (
        <div>
  {/* Preloader Start */}
  {/* <div className="preloader-outer">
    <div className="sl-preloader-holder">
      <img src="images/loader.png" alt="loader img" />
      <div className="sl-loader" />
    </div>
  </div> */}
  {/* Preloader End */}
  {/* HEADER START */}

      <Header />

  {/* HEADER END */}
  {/* INNER BANNER START */}
  <div className="sl-inner-banner">

  </div>
  {/* INNER BANNER END */}
  {/* MAIN START */}
  <main className="sl-main">
    <div className="container">

      <div className="sl-main-section">
        <div className="row">
          <div className="col-lg-4 col-xl-3">
            <aside id="sl-asidebar" className="sl-asidebar">
              <div className="sl-asideholder">
                <a href="javascript:void(0);" id="sl-closeasidebar" className="sl-closeasidebar">
                  <i className="lnr lnr-layers" />
                </a>           
                <div className="sl-asidescrollbar">
                  <div className="sl-contactDetail">
                    <div className="sl-contactDetail__content">
                        <h5>Contact Details</h5>
                        <ul className="sl-contactDetail__descripton"> 
                          <li><i className="fa fa-envelope" /><a href="javascript:void(0);">john@company.com</a></li>
                          <li><i className="fa fa-map-marker" /><address>Roundhouse Ln, London, UK</address></li>
                          <li><i className="fa fa-mobile" /><a href="javascript:void(0);">202-555-0160</a></li>
                        </ul>
                        <ul className="sl-contactDetail__brands">
                          <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                          <li className="sl-facebook-messenger"><a href="javascript:void(0);"><i className="fab fa-facebook-messenger" /></a></li>
                          <li className="sl-dribbble"><a href="javascript:void(0);"><i className="fab fa-dribbble" /></a></li>
                          <li className="sl-pinterestp"><a href="javascript:void(0);"><i className="fab fa-pinterest-p" /></a></li>
                          <li className="sl-quora"><a href="javascript:void(0);"><i className="fab fa-quora" /></a></li>
                          <li className="sl-googleplus"><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
                        </ul>
                        <a href="javascript:void(0);" className="btn sl-btn" data-toggle="modal" data-target="#contactpopup">Contact Provider</a>
                      </div>
                  
                </div>
                  <div className="sl-product-provider">
                    <div className="sl-product-provider__title">
                      <h6>Products By This Provider</h6>
                    </div>
                    <div id="slProductProviderOwl" className="owl-carousel owl-theme sl-owl-dot">
                      
                      <div className="item">
                        <div className="sl-featuredProducts--post">
                          <figure>
                            <img src={feature1} alt="Image Description" />
                            <figcaption>
                              <div className="sl-slider__tags">
                                <a href="javascript:void(0);" className="sl-bg-red-orange">25% OFF</a>
                              </div>
                              <a href="javascript:void(0);"><i className="far fa-heart" /></a>
                            </figcaption>
                          </figure>
                          <div className="sl-featuredProducts--post__content">
                            <div className="sl-featuredProducts--post__title">
                              <h6>Phanteks 614LTG special edition</h6>
                            </div>
                            <div className="sl-featuredProducts--post__price">
                              <h5>$212.30</h5>
                              <h6>$220.30</h6>
                            </div>
                            <div className="sl-featureRating">
                              <span className="sl-featureRating__stars"><span /></span>
                              <em>(1887 Feedback)</em>
                            </div>
                            <em>By: <a href="javascript:void(0);">Onfleek Gaming Zone</a></em>
                            <button className="btn sl-btn">Add To Cart</button>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-8 col-xl-9">
        
        <div className="LaundryCategory row container-fluid col-12">
            
            <a href="#" className="laundry-card col-lg-3 col-md-6 col-sm-12">
                <div className="card LaundryCardMen">
                    <div className="LaundryCardMenTitle">
                        <h3>
                        Men Laundry
                        </h3>
                    </div>
                    <div className="overlay"></div>    
                </div>
            </a>
            
            <a href="#" className="col-lg-3 col-md-6 col-sm-12">
                <div id="Women" className="card LaundryCardWomen">
                
                    <div className="LaundryCardWomenTitle">
                        <h3>
                        Women Laundry
                        </h3>
                    </div>
                    <div className="overlay"></div>    
                
                </div>
            </a>
            
            <a href="#" className="col-lg-3 col-md-6 col-sm-12">
                <div id="House" className="card LaundryCardHouse">
                
                    <div className="LaundryCardHouseTitle">
                        <h3>
                        HouseHold Laundry
                        </h3>
                    </div>
                    <div className="overlay"></div>     
                
                </div>
            </a>
            
            <a href="#" className="col-lg-3 col-md-6 col-sm-12">
                <div className="card LaundryCardCommercial">
                
                    <div className="LaundryCardCommercialTitle">
                        <h3>
                        Commercial Laundry
                        </h3>
                    </div>
                    <div className="overlay"></div>     
                
                </div>
            </a>

        </div>
        
        <Form/>

        <div className="sl-customerReviews">
              <div className="sl-title">
                <h4>Customer Reviews</h4>
              </div>
              <div className="sl-posts">
                <div className="sl-post">
                  <div className="sl-post__content">
                    <div className="sl-round"><h4>AK</h4></div>
                    <div className="sl-post__title">
                      <span className="sl-featureRating__stars"><span /></span>
                      <h5>Great Service Of Its Own Category</h5>
                      <span>10 min ago</span>
                    </div>
                  </div>
                  <div className="sl-post__description">
                    <p>Dolor sit amet consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore dolore magna aliquau ut enim ad minim veniam, quis nrud exercitation ullamco laboris.</p>
                  </div>
                </div>
                <div className="sl-post">
                  <div className="sl-post__content">
                    <div className="sl-round"><h4>RU</h4></div>
                    <div className="sl-post__title">
                      <span className="sl-featureRating__stars"><span /></span>
                      <h5>Great Quality But Loose Focus At The End</h5>
                      <span>02 hrs ago</span>
                    </div>
                  </div>
                  <div className="sl-post__description">
                    <p>Dolor sit amet consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore dolore magna aliquau ut enim ad minim veniam, quis nrud exercitation ullamco laboris.</p>
                  </div>
                </div>
                <div className="sl-post">
                  <div className="sl-post__content">
                    <div className="sl-round"><h4>UI</h4></div>
                    <div className="sl-post__title">
                      <span className="sl-featureRating__stars"><span /></span>
                      <h5>Used Old Approach But Yes Acceptable</h5>
                      <span>03 years ago</span>
                    </div>
                  </div>
                  <div className="sl-post__description">
                    <p>Dolor sit amet consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore dolore magna aliquau ut enim ad minim veniam, quis nrud exercitation ullamco laboris.</p>
                  </div>
                </div>
              </div>
              <div className="sl-customerReviews__btn">
                <a href="javascript:void(0);" className="btn sl-btn">Load More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </main>
  {/* MAIN END */}
  {/* FOOTER START */}
  <Footer />
  {/* FOOTER END */}
</div>
        )
    }
}