import React from "react";
import ViewProductButton from "./button"; // Import button component

const Productcard = () => {
  // Static product details
  const productName = "Smartphone XYZ";
  const productPrice = "$499";
  const productImage = "https://via.placeholder.com/150";

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
      <img src={productImage} alt={productName} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
