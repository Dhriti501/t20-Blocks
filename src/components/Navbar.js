import React from 'react'
import { Button } from "@mui/material";


const Navbar = ({ activeCategory, onCategoryClick }) => {

    const categories = ["BATSMAN", "BOWLER"];

    return (
        <div className="navbar">
            {categories.map((category) => (
                <Button
                    key={category}
                    className={`nav-item ${
                        activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => onCategoryClick(category)}
                    sx={{
                        backgroundColor: "white",
                        "&:hover": {
                            backgroundColor: "#008AFC",
                            color: "white",
                        },
                        padding: "20px",
                        marginLeft: "5px",
                        width: "190px",
                    }}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default Navbar