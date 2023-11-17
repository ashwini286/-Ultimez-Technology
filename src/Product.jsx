import React from 'react'
import { useState } from "react";

const Product = () => {
    const [product, setProduct] = useState([]);
  const [newproduct, setNewProduct] = useState("");
  const [price, setPrice] = useState([]);
  const [newPrice, setNewPrice] = useState("");

  function handleSubmit() {
    if (newproduct.trim() !== "") {
      setProduct([...product, newproduct]);
      setNewProduct("");
    }
    if (newPrice.trim() !== "") {
      setPrice([...price, parseFloat(newPrice)]); // Use parseFloat to convert newPrice to a number
      setNewPrice("");
    }
  }

  const totalPrice = price.reduce((acc, currentPrice) => acc + currentPrice, 0);

  return (
    <div className="App">
    product name{" "}
    <input
      type="text"
      placeholder="enter product name "
      value={newproduct}
      onChange={(e) => setNewProduct(e.target.value)}
    />
    <br />
    <br />
    Price:{" "}
    <input
      placeholder="enter price name"
      value={newPrice}
      onChange={(e) => setNewPrice(e.target.value)}
    />
    <br />
    <br />
    <button onClick={handleSubmit}>Submit</button>
    {product.map((addpro, index) => (
      <ol key={index}>
        <p>
          product Name: {addpro} 
        </p>
      </ol>
    ))}
    {price.map((addprice, index) => (
      <ol key={index}>
        <p>
          price: {addprice}
        </p>
      </ol>
    ))}
    <p>Total Price: {totalPrice}</p>
  </div>
  )
}

export default Product