import React, { useEffect, useState } from "react";
import APIShoesCard from "./APIShoesCard";

const APIShoesList = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // మీ API URL ఇక్కడ ఇవ్వండి, example URL ఇచ్చాను
        fetch("http://localhost:5261/api/Shoes")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch shoes");
                return res.json();
            })
            .then((data) => {
                setShoes(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading shoes...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Shoes from API</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {shoes.map((shoe) => (
                    <APIShoesCard key={shoe.id} shoe={shoe} />
                ))}
            </div>
        </div>
    );
};

export default APIShoesList;
