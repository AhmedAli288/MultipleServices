import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/css/main.css'
import '../Styles/css/home.css'
// import '../Styles/css/dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import '../../App.css'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

/*Images Start */
import ban1 from '../assets/images/index/main-banner/img-01.jpg'
import ban2 from '../assets/images/index/main-banner/img-02.jpg'
import ban3 from '../assets/images/index/main-banner/img-03.jpg'
import ban4 from '../assets/images/index/main-banner/img-04.jpg'
import ban5 from '../assets/images/index/main-banner/img-05.jpg'
import ban6 from '../assets/images/index/main-banner/img-06.jpg'
import ban7 from '../assets/images/index/main-banner/img-07.jpg'
import ban8 from '../assets/images/index/main-banner/img-08.jpg'
import banpng from '../assets/images/index/main-banner/img-01.png'

import cat1 from '../assets/images/index/category/img-01.jpg'
import cat2 from '../assets/images/index/category/img-02.jpg'
import cat3 from '../assets/images/index/category/img-03.jpg'
import cat4 from '../assets/images/index/category/img-04.jpg'
import cat5 from '../assets/images/index/category/img-05.jpg'
import cat6 from '../assets/images/index/category/img-06.jpg'
import cat7 from '../assets/images/index/category/img-07.jpg'
import cat8 from '../assets/images/index/category/img-08.jpg'
import cat9 from '../assets/images/index/category/img-09.jpg'
import cat10 from '../assets/images/index/category/img-10.jpg'


import ServImg1 from '../assets/images/index/service-provider/img-01.jpg'
import ServImg2 from '../assets/images/index/service-provider/img-02.jpg'
import ServImg3 from '../assets/images/index/service-provider/img-03.jpg'
import ServImg4 from '../assets/images/index/service-provider/img-04.jpg'
import ServImg5 from '../assets/images/index/service-provider/img-05.jpg'
import ServImg6 from '../assets/images/index/service-provider/img-06.jpg'

import ServIcon1 from '../assets/images/index/service-provider/user-icon/img-01.jpg'
import ServIcon2 from '../assets/images/index/service-provider/user-icon/img-02.jpg'
import ServIcon3 from '../assets/images/index/service-provider/user-icon/img-03.jpg'
import ServIcon4 from '../assets/images/index/service-provider/user-icon/img-04.jpg'
import ServIcon5 from '../assets/images/index/service-provider/user-icon/img-05.jpg'
import ServIcon6 from '../assets/images/index/service-provider/user-icon/img-06.jpg'


import Pakg1 from '../assets/images/index/packages/img-01.jpg'
import Pakg2 from '../assets/images/index/packages/img-02.jpg'

import feature1 from '../assets/images/index/featured-products/img-01.jpg'
import feature2 from '../assets/images/index/featured-products/img-02.jpg'
import feature3 from '../assets/images/index/featured-products/img-03.jpg'
import feature4 from '../assets/images/index/featured-products/img-04.jpg'
import feature5 from '../assets/images/index/featured-products/img-05.jpg'
import feature6 from '../assets/images/index/featured-products/img-06.jpg'
import feature7 from '../assets/images/index/featured-products/img-07.jpg'
import feature8 from '../assets/images/index/featured-products/img-08.jpg'


import FeedUser1 from '../assets/images/index/feedback/user-icon/img-01.jpg'
import FeedUser2 from '../assets/images/index/feedback/user-icon/img-02.jpg'


/*Images End */


SwiperCore.use([Autoplay, Navigation]);


class Home extends Component {
    render() {
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        return (
   <div className="sl-home">
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

  {/* BANNER START */}
  <div className="sl-main-banner">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban1} alt="Image Description" 
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban2} alt="Image Description"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban3} alt="Image Description"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban4} alt="Image Description"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban5} alt="Image Description"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban6} alt="Image Description"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

    <div className="sl-main-banner__content">
      <h1><span>Search more than 10 million</span>Trendy Service Providers</h1>
      <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exercite.</p>
      <div className="sl-main-banner__btn">
        <a href="javascript:void(0);" className="btn sl-btn">Show All</a>
        <a href="javascript:void(0);" className="btn sl-btn sl-btn-active">Buy Now</a>
      </div>
      <img src={banpng} alt="Image Description" />
    </div>
  </div>
  {/* BANNER END */}
  {/* MAIN START */}
  <main className="sl-main">
    {/* CATEGORY START */}
    <section className="sl-main-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Most Visited Categories</h2>
              </div>
              <div className="sl-sectionHead__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sl-category sl-row">
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat1} alt="image Description" />
              <div className="sl-category__description">
                <h5>Accounts &amp; Audit</h5>
                <span>12,568 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              
              <img src={cat2} alt="image Description"/>
              <div className="sl-category__description">
                <h5>IT Services</h5>
                <span>11,756 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat3} alt="image Description" />
              <div className="sl-category__description">
                <h5>Networking</h5>
                <span>11,125 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat4} alt="image Description" />
              <div className="sl-category__description">
                <h5>Plumbing</h5>
                <span>10,045 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat5} alt="image Description" />
              <div className="sl-category__description">
                <h5>Learning &amp; Driver</h5>
                <span>10,575 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat6} alt="image Description" />
              <div className="sl-category__description">
                <h5>Law &amp; Finance</h5>
                <span>9,245 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat7} alt="image Description" />
              <div className="sl-category__description">
                <h5>Medical</h5>
                <span>9,421 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat8} alt="image Description" />
              <div className="sl-category__description">
                <h5>Handyman Services</h5>
                <span>7,123 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat9} alt="image Description" />
              <div className="sl-category__description">
                <h5>Print &amp; Publishing</h5>
                <span>5,058 Providers</span>
              </div>
              <a href="javascript:void(0);" className="sl-category__icon"><i className="fa fa-arrow-right" /></a> 
            </div>
          </div>
          <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
            <div className="sl-category__service">
              <img src={cat10} alt="image Description" />
              <div className="sl-category__description">
                <h5>House Cleaning</h5>
                <span>4,982 Providers</span>
              </div>
              <Link to={"/laundry"} className="sl-category__icon"><i className="fa fa-arrow-right" /></Link> 
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CATEGORY END */}

    {/* COMMUNITY START */}
    <section>
      <div className="sl-community">
        <div className="sl-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="sl-community__content sl-main-section">
                  <div className="sl-community__description">
                    <h5>We’re Spreading Day by Day</h5>
                    <h2>Join Our Friendy Community</h2>
                    <p>Consectetur adipisicing elit sed dotiane eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exerciteon ullamco.</p>
                  </div>
                  <div className="sl-community__btn">
                    <a href="javascript:void(0);" className="btn sl-btn sl-btn-active">Register Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* COMMUNITY END */}

    {/* SERVICE PROVIDER START */}
    <section className="sl-main-section"> 
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Top Service Provider</h2>
              </div>
              <div className="sl-sectionHead__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="owl-carousel owl-theme sl-owl-nav"> */}
            
        <div className="container text-center my-3">
              <Slider {...settings}>
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                
                <div className="col-12 float-left">
                  <div className="item" >
                    <div className="sl-slider">
                      <figure>
                        <a href="javascript:void(0)"><img src={ServImg3} alt="Image Description" /></a>
                        <a href="javascript:void(0)"><img src={ServIcon3} alt="Image Description" /></a>
                        <a href="javascript:void(0);" className="sl-like sl-liked"><i className="far fa-heart" /></a>
                      </figure>
                      <div className="sl-slider__content">
                        <div className="sl-slider__header">
                          <div className="sl-slider__tags">
                            <a href="javascript:void(0);" className="sl-bg-red-orange">Featured</a><a href="javascript:void(0);" className="sl-bg-green">Verified</a>
                          </div>
                          <a href="javascript:void(0);">IT Services</a>
                          <h5><a href="javascript:void(0)">We Plan, Manage and Enjoy</a></h5>
                          <div className="sl-featureRating">
                            <span className="fa fa-star"><span /></span>
                            <em>(1586  Feedback)</em>
                          </div>
                          <em>By: <a href="javascript:void(0);">New York Conference Dude</a></em>
                        </div>
                        <div className="sl-slider__footer">
                          <em>Birmingham, UK (<a href="javascript:void(0);">Directions</a>)</em>
                          <div className="sl-shareHolder">
                            <a href="javascript:void(0);" className="slShareHolder"><i className="fa fa-ellipsis-h" /></a>
                            <div className="sl-shareHolder__option">
                              <span>Share:</span>
                              <ul className="sl-socialicons">
                                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                                <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                                <li className="sl-youtube"><a href="javascript:void(0);"><i className="fab fa-youtube" /></a></li>
                                <li className="sl-instagram"><a href="javascript:void(0);"><i className="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              
              </Slider>
        </div>
      {/* </div> */}
    </section>
    
    
    {/* SERVICE PROVIDER END */}

    {/* STATS START */}
    <section>
      <div className="sl-statsBanner">
        <div className="sl-overlay">
          <div className="container">
            <div id="counter" className="sl-stats sl-main-section">
              <div className="sl-stats__content">
                <i className="fa fa-smile" />
                <div className="sl-stats__description">
                  <h3 data-from={0} data-to={35125} data-speed={8000} data-refresh-interval={50}>35,125</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="sl-stats__content">
                <i className="fa fa-user" />
                <div className="sl-stats__description">
                  <h3 data-from={0} data-to={12556} data-speed={8000} data-refresh-interval={50}>12,556</h3>
                  <p>Active Members</p>
                </div>
              </div>
              <div className="sl-stats__content">
                <i className="fa fa-shopping-cart" />
                <div className="sl-stats__description">
                  <h3 data-from={0} data-to={41856} data-speed={8000} data-refresh-interval={50}>41,856</h3>
                  <p>Products For Sale</p>
                </div>
              </div>
              <div className="sl-stats__content">
                <i className="fa fa-trophy" />
                <div className="sl-stats__description">
                  <h3 data-from={0} data-to={14753} data-speed={8000} data-refresh-interval={50}>14,753</h3>
                  <p>Cup Of Coffee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* STATS END */}

    {/* PACKAGES START */}
    <section className="sl-main-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Price You Can Afford</h2>
              </div>
              <div className="sl-sectionHead__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sl-packagePlan">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="sl-package">
                <div className="sl-package__title">
                  <img src={Pakg1} alt="Image Description" />
                  <h3>Basic Plan</h3>
                  <em>Starter Plan For Newbie</em>
                </div>
                <div className="sl-package__deal sl-bg-blue">
                  <div className="sl-package__price">
                    <h3><sup>$</sup>37</h3>
                    <p>\ Month</p>
                  </div>
                  <em>Includes all taxes*</em>
                </div>
                <div className="sl-package__footer">
                  <ul className="sl-package__details">
                    <li>
                      <p>No. Of Offer To Post</p>
                      <p>10</p>
                    </li>
                    <li>
                      <p>No. Of Featured Jobs</p>
                      <p className="sl-red-orange"><i className="fa fa-ban" /></p>
                    </li>
                    <li>
                      <p>Package Duration</p>
                      <p>30 Days</p>
                    </li>
                    <li>
                      <p>Best Freelancer Search</p>
                      <p>Yes</p>
                    </li>
                    <li>
                      <p>Professional Offer Template</p>
                      <p className="sl-red-orange"><i className="fa fa-ban" /></p>
                    </li>
                    <li>
                      <p>Free 07 Days Extension</p>
                      <p className="sl-red-orange"><i className="fa fa-ban" /></p>
                    </li>
                  </ul>
                  <a href="javascript:void(0)" className="btn sl-btn">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="sl-package">
                <div className="sl-package__title">
                  <img src={Pakg2} alt="Image Description" />
                  <h3>Standard</h3>
                  <em>Populor Plan For Professionals</em>
                  <div className="sl-tag"><h6>Best Deal</h6></div>
                </div>
                <div className="sl-package__deal sl-bg-green">
                  <div className="sl-package__price">
                    <h3><sup>$</sup>79</h3>
                    <p>\ Month</p>
                  </div>
                  <em>Includes all taxes*</em>
                </div>
                <div className="sl-package__footer">
                  <ul className="sl-package__details">
                    <li>
                      <p>No. Of Offer To Post</p>
                      <p>10</p>
                    </li>
                    <li>
                      <p>No. Of Featured Jobs</p>
                      <p className="sl-green"><i className="fa fa-check" /></p>
                    </li>
                    <li>
                      <p>Package Duration</p>
                      <p>30 Days</p>
                    </li>
                    <li>
                      <p>Best Freelancer Search</p>
                      <p>Yes</p>
                    </li>
                    <li>
                      <p>Professional Offer Template</p>
                      <p className="sl-red-orange"><i className="fa fa-ban" /></p>
                    </li>
                    <li>
                      <p>Free 07 Days Extension</p>
                      <p className="sl-green"><i className="fa fa-check" /></p>
                    </li>
                  </ul>
                  <a href="javascript:void(0)" className="btn sl-btn">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="sl-package">
                <div className="sl-package__title">
                  <img src={Pakg1} alt="Image Description" />
                  <h3>Extended</h3>
                  <em>Extended Plan For Managerial</em>
                </div>
                <div className="sl-package__deal sl-bg-red-orange">
                  <div className="sl-package__price">
                    <h3><sup>$</sup>199</h3>
                    <p>\ Month</p>
                  </div>
                  <em>Includes all taxes*</em>
                </div>
                <div className="sl-package__footer">
                  <ul className="sl-package__details">
                    <li>
                      <p>No. Of Offer To Post</p>
                      <p>10</p>
                    </li>
                    <li>
                      <p>No. Of Featured Jobs</p>
                      <p className="sl-green"><i className="fa fa-check" /></p>
                    </li>
                    <li>
                      <p>Package Duration</p>
                      <p>30 Days</p>
                    </li>
                    <li>
                      <p>Best Freelancer Search</p>
                      <p>Yes</p>
                    </li>
                    <li>
                      <p>Professional Offer Template</p>
                      <p className="sl-green"><i className="fa fa-check" /></p>
                    </li>
                    <li>
                      <p>Free 07 Days Extension</p>
                      <p className="sl-green"><i className="fa fa-check" /></p>
                    </li>
                  </ul>
                  <a href="javascript:void(0)" className="btn sl-btn">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PACKAGES END */}

    {/* FEEDBACK START */}
    <section className="sl-feedbackBanner">
      <div className="sl-overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <div className="sl-sectionHead">
                <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                  <h2>Feedback That Matters</h2>
                </div>
                <div className="sl-sectionHead__description">
                  <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
              </div>
            </div>
           </div>
          <div id="slFeedbackOwl" className="owl-carousel owl-theme">

            <Swiper
              spaceBetween={30}
            
              slidesPerView={2}
              loop={true}
              autoplay={{
                  delay: 3000,
                  disableOnInteraction: "true"
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              >

              <SwiperSlide>
                
              <div className="item">
                  <div className="sl-feedback">
                    <div className="sl-feedback__title">
                      <img src={FeedUser1} alt="Image Description" />
                      <div className="sl-feedback__title__text">
                        <h5>Amenda Wigh</h5>
                        <p><em>United Arab Emirates</em></p>
                      </div>
                    </div>
                    <div className="sl-feedback__description">
                      <p><em>“Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud”</em></p>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>

              <SwiperSlide>

              <div className="item">
                  <div className="sl-feedback">
                    <div className="sl-feedback__title">
                      <img src={FeedUser2} alt="Image Description" />
                      <div className="sl-feedback__title__text">
                        <h5>Stuart Loney</h5>
                        <p><em>New york</em></p>
                      </div>
                    </div>
                    <div className="sl-feedback__description">
                      <p><em>“Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud”</em></p>
                    </div>
                  </div>
                </div>
              
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
      </div>
    </section>
    {/* FEEDBACK END */}

    {/* FEATURED PRODUCTS START */}
    <section className="sl-main-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Featured Products</h2>
              </div>
              <div className="sl-sectionHead__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sl-featuredProducts">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature1} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">25% OFF</span>
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
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature2} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">10% OFF</span>
                    </div>
                    <a href="javascript:void(0);" className="sl-liked"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Linkwow 3 Outlet Power Strip</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$12.19</h5>
                    <h6>$19.99</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Techsol Bros.</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature3} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">50% OFF</span>
                    </div>
                    <a href="javascript:void(0);" className="sl-liked"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Nub's Adventures Jailbreak</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$26.40</h5>
                    <h6>$30.50</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Catepilar Fleet</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature4} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">12% OFF</span>
                    </div>
                    <a href="javascript:void(0);"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Kensington Contour 2.0 Backpack</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$12.19</h5>
                    <h6>$19.99</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Bags &amp; Bags Co.</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature5} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">25% OFF</span>
                    </div>
                    <a href="javascript:void(0);"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Digitus USB2.0 Serial Adapter</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$8.50</h5>
                    <h6>$19.99</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Connecto Zolio</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature6} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">25% OFF</span>
                    </div>
                    <a href="javascript:void(0);"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Poppin Mouse Pad - Lime Green</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$19.79</h5>
                    <h6>$30.50</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Office Mentor</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature7} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">50% OFF</span>
                    </div>
                    <a href="javascript:void(0);"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Fractal Design Define R6 PC Case</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$171.51</h5>
                    <h6>$180.99</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Die Hard Gaming</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={feature8} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <span className="sl-bg-red-orange">12% OFF</span>
                    </div>
                    <a href="javascript:void(0);" className="sl-liked"><i className="far fa-heart" /></a>
                  </figcaption>
                </figure>
                <div className="sl-featuredProducts--post__content">
                  <div className="sl-featuredProducts--post__title">
                    <h6>Thermaltake Pure ARGB Sync Case</h6>
                  </div>
                  <div className="sl-featuredProducts--post__price">
                    <h5>$44.36</h5>
                    <h6>$19.99</h6>
                  </div>
                  <div className="sl-featureRating">
                    <span className="sl-featureRating__stars"><span /></span>
                    <em>(1887 Feedback)</em>
                  </div>
                  <em>By: <a href="javascript:void(0);">Infloz Corporation</a></em>
                  <button className="btn sl-btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
    {/* FEATURED PRODUCTS END */}

  </main>
  {/* MAIN END */}

  {/* FOOTER START */}
  <Footer />
  {/*FOOTER END */}
</div>


        )
    }
}

export default Home