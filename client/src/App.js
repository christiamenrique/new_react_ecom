import React from "react";
import Product from "./components/product/Product";
import Contact from "./components/contact-info/Contact";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/Wrapper/index";
// import products from "./products.json";
import "./App.scss";
import Navegation from "./components/navegation/Nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./components/main-page/MainPage"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  //mount products from db 
  componentDidMount() {
    fetch('/products')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        })
      })
  }
  //dropBox filter
  dropboxChange = (event) => {
    console.log(event.target.value)
    if (event.target.value !== 'Select Category') {
      fetch(`/producttypefilter/${event.target.value}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            products: data
          })
        })
    } else {
      fetch('/products')
        .then(response => response.json())
        .then(data => {
          this.setState({
            products: data
          })
        })
    }
  }
  //price filter
  priceChange = (event) => {
    if (event.target.value === 'lessthan400') {
      fetch('/productpricefilter/less')
        .then(response => response.json())
        .then(data => {
          this.setState({
            products: data
          })
        })
    } else if (event.target.value === 'morethan400') {
      fetch('/productpricefilter/more')
        .then(response => response.json())
        .then(data => {
          this.setState({
            products: data
          })
        })
    } else {
      fetch('/products')
        .then(response => response.json())
        .then(data => {
          this.setState({
            products: data
          })
        })
    }
  }

  render() {
    console.log(this.state.products)
    return (
      <Wrapper>
        <Router>
        <React.Fragment>
          <Navegation
            dropboxChange={this.dropboxChange}
            priceChange={this.priceChange} />
          <Switch>
            <Route exact path="/" render={() => <MainPage />} />
            <Route path="/products" render={() => <Product products={this.state.products} />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
          <Footer />
          </React.Fragment>
        </Router>
      </Wrapper>
    );
  }
}

export default App;



