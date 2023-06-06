import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar
            position="static"
            className="navbarStyle"
            sx={{ backgroundColor: "#0f0b2c" }}
        >
            <Toolbar>
                <Link color="inherit" to="http://localhost:3000/">
                    <Button
                        className="buttonStyle"
                        color="inherit"
                        sx={{
                            fontSize: "25px",
                            marginTop: "25px",
                            marginLeft: "20px",
                            backgroundColor: "#0f0b2c",
                            color: "white",
                        }}
                    >
                        T-20 Blocks
                    </Button>
                </Link>
                <Link color="inherit" to="http://localhost:3000/create-team" style={{ marginLeft: "130vh",}}>
                    <Button
                        className="buttonStyle"
                        color="inherit"
                        sx={{
                            fontSize: "20px",
                            marginTop: "25px",
                            marginLeft: "20px",
                            backgroundColor: "#0f0b2c",
                            color: "white",
                           
                        }}
                    >
                        Create Team
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
