import React from "react";
import ProductCard from "./ProductCard";
import Specials from "../specials/Specials";

//pass the cards to app.js
function Product(props) {
  return (
    <React.Fragment>
      <Specials />
      {props.products.map((item) => {
        return (
          <ProductCard
            key={item.product_id}
            name={item.product_name}
            image={item.img}
            description={item.product_description}
            price={item.price} />
        )
      })}
    </React.Fragment>
  )
}

export default Product;
