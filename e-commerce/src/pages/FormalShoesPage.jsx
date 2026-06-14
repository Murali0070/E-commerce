import React from "react";
import FormalShoesList from "../components/FormalShoesList";

const FormalShoesPage = () => {
  return (
    <div>
      <h2 style={headingStyle}>Formal Shoes</h2>
      <FormalShoesList />
    </div>
  );
};

const headingStyle = {
  textAlign: "center",
  marginTop: "20px",
  color: "#333"
};

export default FormalShoesPage;
