import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Styles/css/main.css'
import '../Styles/css/home.css'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

/*Images Start */

import Vendor1 from '../assets/images/vendor/img-01.jpg'
import Vendor2 from '../assets/images/vendor/img-02.jpg'
import Vendor3 from '../assets/images/vendor/img-03.jpg'
import VendorLogo from '../assets/images/vendor/logo.png'

import Product1 from '../assets/images/vendor/products/img-01.jpg'
import Product2 from '../assets/images/vendor/products/img-02.jpg'
import Product3 from '../assets/images/vendor/products/img-03.jpg'
import Product4 from '../assets/images/vendor/products/img-04.jpg'
import Product5 from '../assets/images/vendor/products/img-05.jpg'
import Product6 from '../assets/images/vendor/products/img-06.jpg'
import Product7 from '../assets/images/vendor/products/img-07.jpg'
import Product8 from '../assets/images/vendor/products/img-08.jpg'
import Product9 from '../assets/images/vendor/products/img-09.jpg'
import Product10 from '../assets/images/vendor/products/img-10.jpg'
import Product11 from '../assets/images/vendor/products/img-11.jpg'
import Product12 from '../assets/images/vendor/products/img-12.jpg'





/*Images End */


export default class Products extends Component {
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
  
  {/* BANNER START */}
  <div className="sl-venderBanner-holder">
    <div id="slVendorSingleOwl" className="owl-carousel owl-theme">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Vendor1} alt="Image Description" 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Vendor2} alt="Image Description" 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Vendor3} alt="Image Description" 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div> 
    <div className="sl-venderBanner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-4 col-xl-5">
            <div className="sl-venderSearch">
              <div className="sl-venderSearch__logoarea">
                <strong><a href="javascript:void(0);"><img src={VendorLogo} alt="img description" /></a></strong>
              </div>
              <div className="sl-venderSearch__searcharea">
                <div className="sl-input-group">
                  <input className="form-control sl-form-control sl-prepend" type="text" placeholder="Search Inside Store" />
                  <button className="sl-searcharea-btn"><i className="lnr lnr-magnifier" /></button>
                </div>
              </div>
              <nav className="sl-venderSearch__nav">
                <ul>
                  <li>
                    <a href="javascript:void(0);">Products</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);">Sale Items</a>
                    <ul className="sub-menu">
                      <li><a href="javascript:void(0);">Sale Items 1</a></li>
                      <li><a href="javascript:void(0);">Sale Items 2</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);">Hot Products</a>
                    <ul className="sub-menu">
                      <li><a href="javascript:void(0);">Product Items 1</a></li>
                      <li><a href="javascript:void(0);">Product Items 2</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">New Arrivals</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Feedback</a>
                  </li>
                </ul>
              </nav>
              <div className="sl-venderSearch__btnarea">
                <a href="javascript:void(0);" className="btn sl-btn sl-btn-active">View As A Service Provider</a>
              </div>
              <ul className="sl-socialicons">
                <li className="sl-facebook"><a href="javascript:void(0);"><i className="fab fa-facebook-f" /></a></li>
                <li className="sl-facebook-messenger"><a href="javascript:void(0);"><i className="fab fa-facebook-messenger" /></a></li>
                <li className="sl-dribbble"><a href="javascript:void(0);"><i className="fab fa-dribbble" /></a></li>
                <li className="sl-pinterest"><a href="javascript:void(0);"><i className="fab fa-pinterest-p" /></a></li>
                <li className="sl-quora"><a href="javascript:void(0);"><i className="fab fa-quora" /></a></li>
                <li className="sl-googleplus"><a href="javascript:void(0);"><i className="fab fa-google-plus-g" /></a></li>
              </ul>
            </div>
          </div>
          <div className="sl-md-none col-lg-8 col-xl-7">
            <div className="sl-venderBannerContent">
              <div className="sl-venderBannerContent__title">
                <h1><span>Introducing Gaming Experience</span> Realistic VR EYE Kit 2.0</h1>
              </div>
              <div className="sl-venderBannerContent__description">
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exercite.</p>
              </div>
              <div className="sl-venderBannerContent__btnarea">
                <a href="javascript:void(0);" className="btn sl-btn">Show All</a>
                <a href="javascript:void(0);" className="btn sl-btn sl-btn-active">Hot Products</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* BANNER END */}

  {/* MAIN START */}
  <main className="sl-main">

    {/* FEATURED PRODUCTS START */}
    <section className="sl-main-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="sl-sectionHead">
              <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                <h2>Products You'll Love</h2>
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
                  <img src={Product1} alt="Image Description" />
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
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={Product2} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">10% OFF</a>
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
                  <img src={Product3} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">50% OFF</a>
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
                  <img src={Product4} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">12% OFF</a>
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
                  <img src={Product5} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">25% OFF</a>
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
                  <img src={Product6} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">25% OFF</a>
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
                  <img src={Product7} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">50% OFF</a>
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
                  <img src={Product8} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">12% OFF</a>
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
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={Product9} alt="Image Description" />
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
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="sl-featuredProducts--post">
                <figure>
                  <img src={Product10} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">10% OFF</a>
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
                  <img src={Product11} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">50% OFF</a>
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
                  <img src={Product12} alt="Image Description" />
                  <figcaption>
                    <div className="sl-slider__tags">
                      <a href="javascript:void(0);" className="sl-bg-red-orange">12% OFF</a>
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
          </div>
        </div>
      </div>  
    </section>
    {/* FEATURED PRODUCTS END */}

  </main>
  {/* MAIN END */}

  {/* FOOTER START */}
    <Footer />
  {/* FOOTER END */}
</div>

        )
    }
}
