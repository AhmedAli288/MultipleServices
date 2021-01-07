import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Contact from "./components/ContactUs/ContactUs"
import Products from "./components/Products/Products"
import Laundry from "./components/Laundry/Laundry"
import Checkout from "./components/Checkout/Checkout"
import Milk from "./components/Milk/Milk"
import './App.css';

 class App extends Component {
  render() {
    return (

      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />


        {/* Laudry Services START */}
        <Route exact path="/laundry" component={Laundry} />

        {/* Laudry Services END*/}

        {/* Laudry Services START */}
        <Route exact path="/milk" component={Milk} />

        {/* Laudry Services END*/}

      </Router>

    )
  }
}

export default App