import React from "react";
import NavigateCard from "../components/NavigateCard";
import ShoesList from "../components/ShoesList"; // ✅ import component

function Home() {
    return (
        <div style={{ paddingTop: "120px", backgroundColor: "#e5d5c4", minHeight: "100vh" }}>
            {/* Offers Section */}
            <div style={{
                backgroundColor: "#fff0e0",
                textAlign: "center",
                padding: "40px 20px",
                margin: "0 auto 60px auto",
                maxWidth: "1000px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
                <h1 style={{ color: "#a45b3e", fontSize: "32px", marginBottom: "10px" }}>
                    🔥 Exclusive Offers Just for You!
                </h1>
                <p style={{ color: "#333", fontSize: "18px" }}>
                    Get the best deals on stylish footwear only for a limited time.
                </p>
            </div>

            {/* Navigation Cards */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                paddingBottom: "60px"
            }}>
                <NavigateCard title="Casual Shoes" description="Explore trendy casual footwear" route="/shoes" />
                <NavigateCard title="Formal Shoes" description="Checkout our elegant formal shoes" route="/formal-shoes" />
                <NavigateCard title="Formal Shoes (Local)" description="View formal shoes from local data" route="/formal-api" />
            </div>

            {/* ✅ Reused ShoesList Section */}
            <div
                style={{
                    padding: "30px 20px",
                    backgroundColor: "#e5d5c4", // ✅ Applied your desired background
                    borderTop: "2px solid #ddd",
                    borderBottom: "2px solid #ddd",
                    boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
                    marginTop: "40px",
                }}
            >
                <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontSize: "28px" }}>
                    👟 Popular Shoes Collection
                </h2>

                <div style={{
                    backgroundColor: "#e5d5c4", // ✅ Matching background again
                    paddingBottom: "30px"
                }}>
                    <ShoesList />
                </div>
            </div>
        </div>
    );
}

export default Home;
