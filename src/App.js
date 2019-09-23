import React from "react";
import Product from "./components/product/Product";
import Contact from "./components/contact-info/Contact";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/Wrapper/index";
import products from "./products.json";
import "./App.css";
import Navegation from "./components/navegation/Nav";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from "./components/main-page/MainPage"


class App extends React.Component{
  state = {
     searchProducts: products
}

filtering = (event) => {
  const nameSearch = products.filter(item => item.name.toLowerCase().search(event.target.value.toLowerCase(),
  ) !== -1);
  if(event.target.value !== ""){
    this.setState({searchProducts: nameSearch})
  } else {
    this.setState({searchProducts: products})
  }
}

dropboxChange = (event) => {
  console.log(event.target.value)
  const filter = products.filter(item => item.type.toLowerCase().search(event.target.value.toLowerCase())!== -1);
  if(event.target.value !== "All"){
    this.setState({searchProducts: filter})
  } else {
    this.setState({searchProducts: products})
  }
}
  
// showAll = (event) => {
//   const showAll = products.filter(function(a){return a.price >= 0})
//   this.setState ({
//     searchProducts: showAll
//   })


  render() {
    return (
    <Wrapper>
      <Router>
      <Navegation 
      dropboxChange={this.dropboxChange} 
      nameFilter={this.filtering}/>
      <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/products" render={() => <Product products={this.state.searchProducts}/>} />
          <Route path="/contact" render={() => <Contact/>}/>
        </Switch>       
      <Footer/>
      </Router>
    </Wrapper>
  );
}
}

export default App;
