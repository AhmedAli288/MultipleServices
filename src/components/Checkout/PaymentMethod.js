import React, { Component } from 'react'

import '../Checkout/Checkout.css'
import '../Styles/css/main.css'
import '../Styles/css/dashboard.css'

import Paypal1 from '../assets/images/all-payouts/img-01.jpg'
import BankTransfer from '../assets/images/all-payouts/img-02.jpg'
import Cash from '../assets/images/all-payouts/img-03.jpg'



export default class PaymentMethod extends Component {
    render() {
        return (
  <div className="col-lg-8 col-xl-9">
  <div className="sl-dashboardbox">
    <div className="sl-dashboardbox__title">
      <h2>Select Payment Method</h2>
    </div>
    <div className="sl-dashboardbox__content">
      <div id="sl-payment-accordion" className="sl-payment-method accordion">
        
        <div className="sl-payment-method__content">
          <div className="sl-bank" data-toggle="collapse" role="list" data-target="#collapse1" aria-expanded="false">
            <div className="sl-payment-method__bank">
              <div className="sl-payment-method__radio">
                <img src={Paypal1} alt="Image Description" />
              </div>
              <div className="sl-payment-method__description">
                <h5>Paypal</h5>
                <p>All earnings will be sent direct to your paypal account</p>
              </div>
              <div className="sl-payment-method__btn">
                <a href="javascript:void(0);" className="btn sl-btn">Select</a>
              </div>
            </div>
          </div>
          <div id="collapse1" className="collapse at-class" data-parent="#sl-payment-accordion">
            <div className="sl-payment-method__dropdown">
              <input className="form-control sl-form-control" type="text" placeholder="Enter Your Paypal ID*" />
              <p>* You need to add your paypal ID above field. For more about <a href="javascript:void(0);">Paypal</a><a href="javascript:void(0);">Create an account</a></p>
            </div>
          </div>
        </div>
        

        <div className="sl-payment-method__content">
          <div className="sl-bank" data-toggle="collapse" role="list" data-target="#collapse2" aria-expanded="false">
            <div className="sl-payment-method__bank">
              <div className="sl-payment-method__radio">
                <img src={BankTransfer} alt="Image Description" />
              </div>
              <div className="sl-payment-method__description">
                <h5>Bank Transfer</h5>
                <p>All earnings will be sent direct to your bank account</p>
              </div>
              <div className="sl-payment-method__btn">
                <a href="javascript:void(0);" className="btn sl-btn">Select</a>
              </div>
            </div>
          </div>
          <div id="collapse2" className="collapse at-class" data-parent="#sl-payment-accordion">
            <div className="sl-payment-method__dropdown">
              <input className="form-control sl-form-control" type="text" placeholder="Enter Your Bank Account*" />
              <p>* You need to add your Bank Account above field.</p>
            </div>
          </div>
        </div>
      

        <div className="sl-payment-method__content">
          <div className="sl-bank" data-toggle="collapse" role="list" data-target="#collapse3" aria-expanded="false">
            <div className="sl-payment-method__bank">
              <div className="sl-payment-method__radio">
                <img src={Cash} alt="Image Description" />
              </div>
              <div className="sl-payment-method__description">
                <h5>Cash On Delivery</h5>
                <p>Payment will be collected on delivery.</p>
              </div>
              <div className="sl-payment-method__btn">
                <a href="javascript:void(0);" className="btn sl-btn">Select</a>
              </div>
            </div>
          </div>
          <div id="collapse3" className="collapse at-class" data-parent="#sl-payment-accordion">
            
            <div className="sl-payment-method__dropdown">
              <input className="form-control sl-form-control" type="text" placeholder="Enter Your Shipping Address*" />
              <p>* Above provided address will be your delivery address.</p>
            </div>
          
          </div>
        </div>
        

      </div>
    </div>
  </div>
  
</div>

        )
    }
}
