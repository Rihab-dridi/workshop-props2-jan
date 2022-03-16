import React from "react";
import { Card, Button } from "react-bootstrap";
export default function ProductCard({product}) {
    console.log(product);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          {product.price}
          </Card.Text>
          <Button variant="primary">Buy </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
