import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import "./css/style.css";
import Header from "./header/Header";

const MyForm = () => {
  
    const [matches, setMatches] = useState("");
    const [innings, setInnings] = useState("");
    const [runs, setRuns] = useState("");
    const [highScore, setHighScore] = useState("");
    const [average, setAverage] = useState("");
    const [ballsFaced, setBallsFaced] = useState("");
    const [strikeRate, setStrikeRate] = useState("");
    const [hundreds, setHundreds] = useState("");
    const [fifties, setFifties] = useState("");
    const [fours, setFours] = useState("");
    const [sixes, setSixes] = useState("");
    const [rating, setRating] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        
        console.log(name);

        if (name === "matches")
            setMatches(value)
        else if (name === "innings")
            setInnings(value)
        else if (name === "runs")
            setRuns(value)
        else if (name === "highScore")
            setHighScore(value)
        else if (name === "average")
            setAverage(value)
        else if (name === "ballsFaced")
            setBallsFaced(value)
        else if (name === "strikeRate")
            setStrikeRate(value)
        else if (name === "hundreds")
            setHundreds(value)
        else if (name === "fifties")
            setFifties(value)
        else if (name === "fours")
            setFours(value)
        else if (name === "sixes")
            setSixes(value)
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        fetch(`http://127.0.0.1:8000/view-team/?matches=${matches}&innings=${innings}&runs=${runs}&highscore=${highScore}&avg=${average}&ballsfaced=${ballsFaced}&strikerate=${strikeRate}&hundreds=${hundreds}&fifties=${fifties}&fours=${fours}&sixes=${sixes}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setShowText(true);
                setRating(Math.round(data.prediction * 100) / 100)

  })
  .catch(error => {
    console.error('Error:', error);
  });

    };

    const [showText, setShowText] = useState(false);

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
                    <h1>{showText && <p>Rating:{ rating}</p>}</h1>
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
                                label="Player Name"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Matches"
                                name="matches"
                                value={matches}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Innings"
                                name="innings"
                                value={innings}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Runs"
                                name="runs"
                                value={runs}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="High Score"
                                name="highScore"
                                value={highScore}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Average"
                                name="average"
                                value={average}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </div>
                        <div style={{ padding: "40px" }}>
                            <TextField
                                label="Balls Faced"
                                name="ballsFaced"
                                value={ballsFaced}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Strike Rate"
                                name="strikeRate"
                                value={strikeRate}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="100 (Count)"
                                name="hundreds"
                                value={hundreds}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="50 (Count)"
                                name="fifties"
                                value={fifties}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="4s"
                                name="fours"
                                value={fours}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="6s"
                                name="sixes"
                                value={sixes}
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
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default MyForm;
