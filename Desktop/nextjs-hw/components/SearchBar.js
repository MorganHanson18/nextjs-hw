import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filteredProducts = props.products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div style={{ paddingLeft: "1rem" }}>
      <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        {shouldDisplayButton && (
          <button onClick={handleClearClick}>clear</button>
        )}
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
              textAlign: "center",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "80px" }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
