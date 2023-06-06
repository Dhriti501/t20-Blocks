import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import "./css/style.css";
import Header from "./header/Header";
// import ipl from './img/ipl.jpg';
import { Link } from "react-router-dom";

const Home = () => {
//   const players = [
//     { name: "Player 1", image: ipl },
//     { name: "Player 2", image: "player2.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     { name: "Player 3", image: "player3.jpg" },
//     // Add more players as needed
//   ];

    return (
        <div className="pageStyle">
            <Header />

            <div className="HomePageContent">
                <div className="leftContainer">
                    <div className="smallTextStyle">Team Selection Made Easy!</div>
                    <div className="bigHeadingStyle">Discover the Perfect </div>
                    <div className="smallTextStyleblue">Fit for Your Cricket Team!</div>
                    <div className="buttonsContainer">
                        <Link color="inherit" to='http://localhost:3000/create-team'>
                            <Button
                            variant="contained"
                            color="primary"
                            className="buttonStyle"
                            sx={{
                                marginTop: "25px",
                                backgroundColor: "#008afc",
                            }}>
                                Create Your Team
                            </Button>
                        </Link>
                        <Link color="inherit" to='http://localhost:3000/view-team'>
                            <Button
                            className="buttonStyle"
                            variant="contained"
                            color="secondary"
                            sx={{
                                marginTop: "25px",
                                marginLeft: "20px",
                                backgroundColor: "white",
                                color: "#0F0B2C",
                            }}>
                                View Team
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="rightContainer">
                    <Box
                        sx={{
                        backgroundColor: "white",
                        height: "80vh",
                        width: "80vh",
                        marginLeft: "20vh",
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Home;