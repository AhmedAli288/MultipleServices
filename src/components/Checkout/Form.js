import React, { Component } from 'react'

import '../Checkout/Checkout.css'

export default class Form extends Component {
    render() {
        return (


<div className="col-lg-8 col-xl-9">
    <div className="sl-dashboardbox">
        <div className="sl-dashboardbox__title">
            <h2>Enter Details</h2>
        </div>
        <div className="sl-dashboardbox__content">

            <form>
                <div className="row">
                    <div className="col-50">
                        <label htmlFor="fname">
                            <i className="fa fa-user" /> Full Name
                        </label>     
                        <input className="form-control sl-form-control" type="text" placeholder="Ex: John Smith" />

                        <label htmlFor="email">
                            <i className="fa fa-envelope" /> Email
                        </label>
                        <input className="form-control sl-form-control" type="text"  id="email" name="email" placeholder="Ex: john@example.com" />

                        <label htmlFor="adr">
                            <i className="fa fa-address-card" /> Address
                        </label>
                        <input className="form-control sl-form-control" type="text"  id="adr" name="address" placeholder="Ex: 542 W. 15th Street" />

                        <label htmlFor="city">
                            <i className="fa fa-university" /> City
                        </label>
                        <input className="form-control sl-form-control" type="text"  id="city" name="city" placeholder="Ex: New York" />

                        <div className="row ">
                            <div className="col-50">
                                <label htmlFor="state">
                                    <i className="fa fa-city" /> State
                                </label>
                                <input className="form-control sl-form-control" type="text"  id="state" name="state" placeholder="Ex: NY" />
                            </div>
                            <div className="col-50">
                                <label htmlFor="zip">
                                    <i className="fa fa-address-card" /> Zip
                                </label>
                                <input className="form-control sl-form-control" type="text" id="zip" name="zip" placeholder="Ex: 10001" />
                            </div>
                        </div>
                    </div>
                </div>
                <label className="sl-payment-method__btn info-bttn">
                    <p>
                        <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                    </p>
                    {/* <a href="javascript:void(0);" className="btn sl-btn reset-bttn">Reset</a>        
                    <a href="javascript:void(0);" className="btn sl-btn">Submit</a> */}
                </label>
            </form>

        </div>
    </div>

</div>
          



// <div className="row payment_method">
//   <div className="col-75">
    
  
  
  
//   </div>
//   </div>


        )
    }
}
