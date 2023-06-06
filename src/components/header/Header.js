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

                <Link color="inherit" to="http://localhost:3000/">
                    <Button
                        className="buttonStyle"
                        color="inherit"
                        sx={{
                            fontSize: "25px",
                            marginTop: "12px",
                            marginLeft: "50px",
                            backgroundColor: "#0f0b2c",
                            color: "white",
                        }}
                    >
                        T-20 Blocks
                    </Button>
                </Link>
                <Link color="inherit" to="http://localhost:3000/" style={{ marginLeft: "52vw"}}>
                    <Button
                        className="buttonStyle"
                        color="inherit"
                        sx={{
                            fontSize: "20px",
                            marginTop: "12px",
                            backgroundColor: "#0f0b2c",
                            color: "white",
                           
                        }}
                    >
                        Home
                    </Button>
                </Link>
                <Link color="inherit" to="http://localhost:3000/create-team" >
                    <Button
                        className="buttonStyle"
                        color="inherit"
                        sx={{
                            fontSize: "20px",
                            marginTop: "12px",
                            marginLeft: "20px",
                            backgroundColor: "#0f0b2c",
                            color: "white",
                           
                        }}
                    >
                        Create
                    </Button>
                </Link>
                <Link color="inherit" to="http://localhost:3000/predict-player-rating" >
                    <Button
                        className="buttonStyle"
                        color="inherit"
                        sx={{
                            fontSize: "20px",
                            marginTop: "12px",
                            marginLeft: "20px",
                            backgroundColor: "#0f0b2c",
                            color: "white",
                           
                        }}
                    >
                        Predict
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
