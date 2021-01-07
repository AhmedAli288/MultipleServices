// import { Header } from 'antd/lib/layout/layout'
import React, { Component } from 'react'

import '../Styles/css/main.css'
import '../Styles/css/home.css'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'


/*Images Start */

import ContactImg from '../assets/images/contactimg/img-01.jpg'
import gMap from '../assets/images/gmap.jpg'

/*Images End */


export default class ContactUs extends Component {
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
  <Header/>
  {/* HEADER END */}

  {/* MAIN START */}
  <main>
    {/* Contact Start */}
    <section className="sl-contact-page">
      <div className="ourmap">
          <img
          src={gMap}
          />
      </div>
      <div className="sl-contactformmap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sl-contactfrm-container">
                <div className="sl-lg-none col-xl-5">
                  <div className="sl-contactformimg row">
                    <figure>
                      <img src={ContactImg} alt="image" />
                    </figure>
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <div className="sl-contactform row">
                    <div className="sl-contactform__details">
                      <h5>We’re More Than Happy To Serve </h5>
                      <h2>Share Your Query With Us</h2>
                      <p>Consectetur adipisicing elit sed dotiane eiusmod tempor incididunt utna labore etnalorale
                        magna aliqua enim adman minim</p>
                    </div>
                    <form className="sl-formtheme sl-formcontactus">
                      <fieldset>
                        <div className="sl-formhalf">
                          <div className="form-group form-group-half">
                            <input type="text" name="Your Name" className="form-control" placeholder="First Name" />
                          </div>
                          <div className="form-group form-group-half">
                            <input type="text" name="Your Email" className="form-control" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="email" name="Subject" className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Message" required defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn sl-btn">Send Message</button>
                        </div>
                      </fieldset>
                    </form>
                    <ul className="sl-contactusform">
                      <li>
                        <div className="sl-contactusform__description">
                          <p>
                            <a href="mailto:abc@example.com">info@domainurl.com</a>
                          </p>
                          <span>Say “Hello” to us</span>
                        </div>
                      </li>
                      <li>
                        <div className="sl-contactusform__description">
                          <p>0800-1234-567</p>
                          <span>Available support 24/7</span>
                        </div>
                      </li>
                      <li>
                        <div className="sl-contactusform__description">
                          <p>Manchester, UK</p>
                          <span>Our Location</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="sl-sociallisting">
                <li className="sl-contactsocialadress">
                  <div className="sl-facebook">
                    <a href="javascript:void(0);" className="fab fa-facebook-f">
                      <div className="sl-contactsocialadress__description">
                        <p>/Servizsell</p>
                        <span>Follow us on facebook</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="sl-contactsocialadress">
                  <div className="sl-youtube">
                    <a href="javascript:void(0);" className="fab fa-youtube">
                      <div className="sl-contactsocialadress__description">
                        <p>/Servizsell</p>
                        <span>Follow us on youtube</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="sl-contactsocialadress">
                  <div className="sl-twitter">
                    <a href="javascript:void(0);" className="fab fa-twitter">
                      <div className="sl-contactsocialadress__description">
                        <p>/Servizsell</p>
                        <span>Follow us on twitter</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="sl-contactsocialadress">
                  <div className="sl-instagram">
                    <a href="javascript:void(0);" className="fab fa-instagram">
                      <div className="sl-contactsocialadress__description">
                        <p>/Servizsell</p>
                        <span>Follow us on instagram</span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Contact End */}
  </main>
  {/* MAIN END */}

  {/* FOOTER START */}
  <Footer />
  {/* FOOTER END */}

</div>

        )
    }
}

