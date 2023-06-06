import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static" className="navbarStyle" sx={{ backgroundColor: "#0f0b2c"}}>
            <Toolbar>
                <Typography variant="h6" component="div" className="companyNameStyle">
                    T-20 Blocks
                </Typography>
                <Link color="inherit" to='http://localhost:3000/'>
                    <Button className="buttonStyle"
                    color="inherit"
                    sx={{
                        // marginTop: "25px",
                        marginLeft: "20px",
                        backgroundColor: "#0f0b2c",
                        color: "white",
                    }}>
                        Home
                    </Button>
                </Link>
                <Link color="inherit" to='http://localhost:3000/create-team'>
                    <Button className="buttonStyle"
                    color="inherit"
                    sx={{
                        // marginTop: "25px",
                        marginLeft: "20px",
                        backgroundColor: "#0f0b2c",
                        color: "white",
                    }}>
                        Create Team
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
