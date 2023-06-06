import React from 'react'
import { Button } from "@mui/material";


const Navbar = ({ activeCategory, onCategoryClick }) => {

    const categories = ["batsman", "bowler"];

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
                        padding: "12px 3px",
                        marginLeft: "25px",
                        width: "140px",
                        borderRadius:"10px",
                        fontSize:"17px",
                        textShadow:"0.7px 0.7px #008AFC"
                    }}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default Navbar