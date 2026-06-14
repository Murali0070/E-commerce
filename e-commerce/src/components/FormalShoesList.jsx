import React from "react";
import ShoesCard from "./ShoesCard";
import formalShoes from "../data/formalShoes";

const FormalShoesList = () => {
  return (
    <div style={listStyle}>
      {formalShoes.map((shoe) => (
        <ShoesCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "20px"
};

export default FormalShoesList;
