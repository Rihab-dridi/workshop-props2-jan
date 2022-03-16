import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
  console.log(props);
  const products = props.produits;
  return (
    <div className="prodctListContainer" >
      {products.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
}
