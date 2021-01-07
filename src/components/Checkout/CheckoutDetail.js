import React, { Component } from 'react'

import '../Checkout/Checkout.css'

export default class CheckoutDetail extends Component {
    render() {
        return (
<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
    <div className="col-12">
        <div>
        <div className="row col-12 invoice-head">
            <div className="alignleft">
            <h3>INVOICE</h3>
            </div>
            <div className="alignright">
            <h3>ORDER # 1234578</h3>
            <span>14 April 2014</span>
            </div>
        </div>
        <hr />
        <div className="row col-12 ship-adre">
            <div className="alignleft">
                <h5>Billing Info:</h5>
                <p>350 Rhode Island Street</p>
                <p>Suite 240, San Francisco</p>
                <p>California, 94103</p>
                <p><strong>Phone:</strong> 415-767-3600</p>
                <p><strong>Email:</strong> contact@dynofy.com</p>
            </div>
            <div className="alignright">
                <h5>Shipping Info:</h5>
                <p>425 Market Street</p>
                <p>Suite 2200, San Francisco</p>
                <p>California, 94105</p>
                <p><strong>Phone:</strong> 415-676-3600</p>
                <p><strong>Email:</strong> john@doe.com</p>
            </div>
        </div>      
        
        </div>

        <div className="invoice">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Men Pant Coat Dry Clean</td>
                        <td>2</td>
                        <td>100</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Men Suit Dry Clean</td>
                        <td>2</td>
                        <td>150</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Women Suit Dry Clean</td>
                        <td>1</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="4">Subtotal :</th>
                        <td>Rs. 1019</td>
                    </tr>               
                    <tr>
                        <th colspan="4">Discount (10%) :</th>
                        <td>Rs. 101</td>
                    </tr>
                    <tr>
                        <th colspan="4">Total :</th>
                        <td>Rs. 991</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        
        <div className="col-12 row authorty">
            <div className="col-md-7 col-sm-6 bttns">
                <div className="row">
                    <button className="btn btn-success"><i class="fa fa-print"></i> Print Invoice</button>
                    <button className="btn btn-danger"><i class="fa fa-envelope"></i> Mail Invoice</button>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 alignright">
                <p><strong>Ahmed Ali</strong></p>
                <p>Developer</p>
                <h5>THANK YOU!</h5>
            </div>
        </div>

    </div>
</div>
        )
    }
}
