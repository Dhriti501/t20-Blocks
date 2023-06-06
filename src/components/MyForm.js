import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import "./css/style.css";
import Header from "./header/Header";

const MyForm = () => {
    const [formData, setFormData] = useState({
        matches: "",
        innings: "",
        runs: "",
        highScore: "",
        average: "",
        ballsFaced: "",
        strikeRate: "",
        hundreds: "",
        fifties: "",
        fours: "",
        sixes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            prevData[name] = value;
            return prevData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(true);
    };

    return (
        <div>
            <Header />
            <Container
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ color: "#008afc", width: "60vh"}}>
                    <h1 style={{ fontSize: "60px" }}>Predicting Rating</h1>
                    <h1>{showText && <p>Rating:</p>}</h1>
                </Box>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundColor: "#ffffff",
                        width: "80vh",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        borderRadius: "10px",
                        margin: "2vh",
                    }}
                >
                    <div style={{ display: "flex", padding: "20px" }}>
                        <div style={{ margin: "40px" }}>
                            <TextField
                                label="Matches"
                                name="matches"
                                value={formData.matches}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Player Name"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Innings"
                                name="innings"
                                value={formData.innings}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Runs"
                                name="runs"
                                value={formData.runs}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="High Score"
                                name="highScore"
                                value={formData.highScore}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Average"
                                name="average"
                                value={formData.average}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </div>
                        <div style={{ padding: "40px" }}>
                            <TextField
                                label="Balls Faced"
                                name="ballsFaced"
                                value={formData.ballsFaced}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Strike Rate"
                                name="strikeRate"
                                value={formData.strikeRate}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="100 (Count)"
                                name="hundreds"
                                value={formData.hundreds}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="50 (Count)"
                                name="fifties"
                                value={formData.fifties}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="4s"
                                name="fours"
                                value={formData.fours}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="6s"
                                name="sixes"
                                value={formData.sixes}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginBottom: "20px", marginLeft: "60px" }}
                        onClick={handleClick}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default MyForm;
