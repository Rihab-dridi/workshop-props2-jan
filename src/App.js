import "./App.css";
import { Card, Button } from "react-bootstrap";
import ProductList from "./components/productList";
function App() {
  //the fake data
  const products = [
    {
      image:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      name: "orange",
      price: "500 $",
    },
    {
      image:
        "https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png",
      name: "head Phone",
      price: "1000 $",
    },
    {
      image:
        "https://resource.logitechg.com/e_trim/w_600,h_550,c_limit,q_auto,f_auto,dpr_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-white-gallery-1.png?v=1",
      name: "head Phone",
      price: "1000 $",
    },
    {
      image:
        "https://img.creative.com/images/products/large/pdt_23668.png?width=400&height=400",
      name: "head Phone",
      price: "22$",
    },
  ];
  //send the data 
  //receive 
  //mapping the products

  return (
    <div className="App">
      <h1>Gamers SHOP</h1>
      <ProductList produits={products}   />
      {/* {products.map((product) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title> {product.name} </Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary"> buy</Button>
          </Card.Body>
        </Card>
      ))} */}
    </div>
  );
}

export default App;
