import React, { Component } from 'react'

import '../Styles/css/main.css'
import '../Styles/css/home.css'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import SwiperCore, { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

/*Images Start */

import About1 from '../assets/images/aboutus/img-01.jpg'
import About2 from '../assets/images/aboutus/img-02.jpg'
import About3 from '../assets/images/aboutus/img-03.jpg'
import About4 from '../assets/images/aboutus/img-04.jpg'
import About5 from '../assets/images/aboutus/img-05.jpg'

import User1 from '../assets/images/index/feedback/user-icon/img-01.jpg'
import User2 from '../assets/images/index/feedback/user-icon/img-02.jpg'

/*Images End */


SwiperCore.use([Autoplay]);

export default class About extends Component {
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

  {/* MAIN START */}
  <main className="sl-main">

    {/* CATEGORY START */}
    <section className="sl-main-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Explore About Us</h2>
              </div>
              <div className="sl-sectionHead__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sl-aboutus">
          <div className="row">
            <div className="col-lg-6">
              <figure className="sl-aboutusimg">
                <img className="sl-aboutusimg__body" src={About1} alt="img description" />
              </figure>
            </div>
            <div className="col-lg-6">
              <div className="sl-aboutuscontent">
                <h4>We Care To Serve Best As We Can</h4>
                <div className="sl-aboutuscontent__description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sitame voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                </div>   
                <div className="sl-aboutuscontent__btns">
                  <a href="javascript:void(0)" className="btn sl-btn">Signup</a>
                  <a href="javascript:void(0)" className="btn sl-btn">Buy Now</a>
                </div>
              </div>
            </div>
          </div>                
        </div>
      </div>
    </section>
    {/* CATEGORY END */}

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
            spaceBetween={40}
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
                      <img src={User1} alt="Image Description" />
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
                      <img src={User2} alt="Image Description" />
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
    {/* TEAM START */}
    <section className="sl-main-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Great Team Behind</h2>
              </div>
              <div className="sl-sectionHead__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sl-greatTeam">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="sl-teamitems">
                <figure>
                  <img src={About2} alt="img description" />
                </figure>
                <div className="sl-teamitems__datails">
                  <h5>C.E.O, Founder</h5>
                  <a href="javascript:void(0);">Andrew Burchard</a>
                  <ul className="sl-teamitems__sl-brands">
                    <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                    <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                    <li className="sl-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in" /></a></li>
                    <li className="sl-googleplus"><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>                                
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="sl-teamitems">
                <figure>
                  <img src={About3} alt="img description" />
                </figure>
                <div className="sl-teamitems__datails">
                  <h5>C.E.O, Founder</h5>
                  <a href="javascript:void(0);">Andrew Burchard</a>
                  <ul className="sl-teamitems__sl-brands">
                    <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                    <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                    <li className="sl-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in" /></a></li>
                    <li className="sl-googleplus"><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>                                
                </div>
              </div>
            </div>                    
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="sl-teamitems">
                <figure>
                  <img src={About4} alt="img description" />
                </figure>
                <div className="sl-teamitems__datails">
                  <h5>C.E.O, Founder</h5>
                  <a href="javascript:void(0);">Andrew Burchard</a>
                  <ul className="sl-teamitems__sl-brands">
                    <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                    <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                    <li className="sl-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in" /></a></li>
                    <li className="sl-googleplus"><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>                                
                </div>
              </div>
            </div>                    
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="sl-teamitems">
                <figure>
                  <img src={About5} alt="img description" />
                </figure>
                <div className="sl-teamitems__datails">
                  <h5>C.E.O, Founder</h5>
                  <a href="javascript:void(0);">Andrew Burchard</a>
                  <ul className="sl-teamitems__sl-brands">
                    <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                    <li className="sl-twitter"><a href="javascript:void(0);"><i className="fab fa-twitter" /></a></li>
                    <li className="sl-linkedin"><a href="javascript:void(0);"><i className="fab fa-linkedin-in" /></a></li>
                    <li className="sl-googleplus"><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>                                
                </div>
              </div>
            </div>                                    
          </div>                
        </div>
      </div>
    </section>
    {/* TEAM START */}
  </main>
  {/* MAIN END */}
  {/* FOOTER START */}
  <Footer />
  {/* FOOTER END */}
</div>


        )
    }
}
