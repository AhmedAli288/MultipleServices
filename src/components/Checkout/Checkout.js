import React, { Component } from 'react'

import '../Checkout/Checkout.css'
import PaymentMethod from '../Checkout/PaymentMethod'
import Form from '../Checkout/Form'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

import Stepper from '../Stepper/Stepper'


export default class Checkout extends Component {
 
    render() {

        return (
          <div>
            <Header/>
            <Stepper/>
            <Footer/>
          </div>
        )
    }
}
