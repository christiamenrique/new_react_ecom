import React from "react";
import ProductCard from "./ProductCard";
import Specials from "../specials/Specials";


function Product(props) {
  return (
    <React.Fragment>
      <Specials />
      {props.products.map((item) => {
        return (
          <ProductCard
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price} />
        )
      })}
    </React.Fragment>
  )
}

export default Product;