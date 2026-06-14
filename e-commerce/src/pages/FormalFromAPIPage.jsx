import React from "react";
import APIShoesList from "../components/APIShoesList";

function FormalFromAPIPage() {
    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "20px" }}>Formal Shoes</h2>
            <APIShoesList filterType="formal" limit={10} />
        </div>
    );
}

export default FormalFromAPIPage;
