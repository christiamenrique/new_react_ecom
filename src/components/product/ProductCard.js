import React from "react";
import "./style.css";


function ProductsCard(props) {
  return (
    <div className="card-cont">
      <div className="img-cont">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="text-content">
        <h2>{props.name}</h2>
        <h3 className="price-modify">{props.price}</h3>
        <p>{props.description}</p>
        <button type="button" class="btn btn-success">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductsCard;
