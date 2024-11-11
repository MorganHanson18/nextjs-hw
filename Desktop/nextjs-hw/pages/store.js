import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

export default function Store() {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        setProductsState(productsArray.slice(0, 20));
      });
  }, []);

  return (
    <>
      <div>
        <h1 style={{ paddingLeft: "1rem" }}>Fake Store</h1>
        <p style={{ paddingLeft: "1rem" }}>Welcome to the Fake Store!</p>
        <SearchBar products={productsState} />
      </div>
    </>
  );
}
