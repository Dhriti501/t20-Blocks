import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import Header from "./header/Header";
import ipl from "./img/ipl.png";

//tabs button(batsman,bowler,wicketKeeper, AllRounder)
const NavBar = ({ activeCategory, onCategoryClick }) => {
    const categories = ["batsman", "bowler", "wicketkeeper", "all rounder"];

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

//list of the players
const Content = ({ activeCategory }) => {
    const playerMap = {
        batsman: [
            { name: "Player 1", details: "Player 1 details", rating: 4.5 },
            { name: "Player 2", details: "Player 2 details", rating: 4.2 },
            { name: "Player 3", details: "Player 3 details", rating: 4.8 },
            { name: "Player 4", details: "Player 4 details", rating: 4.3 },
            { name: "Player 5", details: "Player 5 details", rating: 4.1 },
            { name: "Player 6", details: "Player 6 details", rating: 4.6 },
            { name: "Player 7", details: "Player 7 details", rating: 4.4 },
            { name: "Player 8", details: "Player 8 details", rating: 4.9 },
            { name: "Player 9", details: "Player 9 details", rating: 4.7 },
        ],
        bowler: [
            { name: "Player A", details: "Player A details", rating: 4.6 },
            { name: "Player B", details: "Player B details", rating: 4.4 },
            { name: "Player C", details: "Player C details", rating: 4.2 },
            { name: "Player D", details: "Player D details", rating: 4.8 },
            { name: "Player E", details: "Player E details", rating: 4.7 },
            { name: "Player F", details: "Player F details", rating: 4.5 },
            { name: "Player G", details: "Player G details", rating: 4.3 },
            { name: "Player H", details: "Player H details", rating: 4.1 },
            { name: "Player I", details: "Player I details", rating: 4.9 },
        ],
        wicketkeeper: [
            { name: "Player X", details: "Player X details", rating: 4.7 },
            { name: "Player Y", details: "Player Y details", rating: 4.1 },
            { name: "Player Z", details: "Player Z details", rating: 4.5 },
            { name: "Player M", details: "Player M details", rating: 4.3 },
            { name: "Player N", details: "Player N details", rating: 4.2 },
            { name: "Player O", details: "Player O details", rating: 4.8 },
            { name: "Player P", details: "Player P details", rating: 4.6 },
            { name: "Player Q", details: "Player Q details", rating: 4.4 },
            { name: "Player R", details: "Player R details", rating: 4.9 },
        ],
        "all rounder": [
            { name: "Player I", details: "Player I details", rating: 4.3 },
            { name: "Player II", details: "Player II details", rating: 4.9 },
            { name: "Player III", details: "Player III details", rating: 4.7 },
            { name: "Player IV", details: "Player IV details", rating: 4.6 },
            { name: "Player V", details: "Player V details", rating: 4.4 },
            { name: "Player VI", details: "Player VI details", rating: 4.8 },
            { name: "Player VII", details: "Player VII details", rating: 4.5 },
            {
                name: "Player VIII",
                details: "Player VIII details",
                rating: 4.2,
            },
            { name: "Player IX", details: "Player IX details", rating: 4.1 },
        ],
    };

    //avatars of players
    const avatarImages = {
        batsman: {
            "Player 1": ipl,
            "Player 2": "batsman2.jpg",
            "Player 3": "batsman2.jpg",
            "Player 4": "batsman2.jpg",
            "Player 5": "batsman2.jpg",
            "Player 6": "batsman2.jpg",
            "Player 7": "batsman2.jpg",
        },
        bowler: {
            "Player A": "bowlerA.jpg",
            "Player B": "bowlerB.jpg",
        },
        wicketkeeper: {
            "Player X": "wicketkeeperX.jpg",
            "Player Y": "wicketkeeperY.jpg",
            // Add more images for wicketkeeper players here...
        },
        "all rounder": {
            "Player I": "allrounderI.jpg",
            "Player II": "allrounderII.jpg",
        },
    };

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [selectedPlayerDetails, setSelectedPlayerDetails] = useState(null);

    //only 11 players can be added
    const handleAddClick = (player) => {
        if (
            selectedPlayers.length < 11 &&
            !selectedPlayers.some(
                (selectedPlayer) => selectedPlayer.name === player.name
            )
        ) {
            setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
        }
    };

    //delete the player from the selected list
    const handleDeleteClick = (player) => {
        setSelectedPlayers((prevPlayers) =>
            prevPlayers.filter((p) => p !== player)
        );
    };

    const handlePlayerClick = (player) => {
        setSelectedPlayerDetails(player);
    };

    const handleCloseDetails = () => {
        setSelectedPlayerDetails(null);
    };

    return (
        <div className="content">
            <div className="players">
                <Typography variant="h6">{activeCategory}</Typography>
                <List>
                    {playerMap[activeCategory].map((player, index) => (
                        <React.Fragment key={player.name}>
                            <ListItem>
                                <ListItemAvatar className="CreateTeamListAvatar">
                                    <Avatar
                                        alt={player.name}
                                        src={
                                            avatarImages[activeCategory][
                                                player.name
                                            ]
                                        }
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className="CreateTeamListText"
                                    primary={player.name}
                                    secondary={`Rating: ${player.rating}`}
                                />
                                {!selectedPlayers.includes(player) && (
                                    <Button
                                        onClick={() => handleAddClick(player)}
                                        disabled={selectedPlayers.length === 11}
                                        sx={{
                                            fontSize: 14,
                                            color: "white",
                                            backgroundColor: "#0F0B2C",
                                            "&:hover": {
                                                backgroundColor: "#008AFC",
                                                color: "white",
                                            },
                                            padding: "10px",
                                            margin: "15px",
                                        }}
                                    >
                                        Add
                                    </Button>
                                )}
                                <Button
                                    onClick={() => handlePlayerClick(player)}
                                    sx={{
                                        fontSize: 14,
                                        color: "white",
                                        backgroundColor: "#0F0B2C",
                                        "&:hover": {
                                            backgroundColor: "#008AFC",
                                            color: "white",
                                        },
                                        padding: "10px",
                                        margin: "15px",
                                    }}
                                >
                                    Details
                                </Button>
                            </ListItem>
                            {index !== playerMap[activeCategory].length - 1 && (
                                <hr />
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </div>
            {selectedPlayers.length > 0 && (
                <div className="selected-players">
                    <Typography variant="h6">Selected Players:</Typography>
                    <List>
                        {selectedPlayers.map((player, index) => (
                            <div key={player.name}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={player.name}
                                            src={`avatar-${player.name}`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ fontSize: "20px" }}
                                        primary={player.name}
                                    />
                                    <Button
                                        sx={{
                                            fontSize: 14,
                                            color: "white",
                                            backgroundColor: "#0F0B2C",
                                            "&:hover": {
                                                backgroundColor: "#008AFC",
                                                color: "white",
                                            },
                                            padding: "10px",
                                            margin: "15px",
                                        }}
                                        onClick={() =>
                                            handleDeleteClick(player)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </ListItem>
                                {index !== selectedPlayers.length - 1 && <hr />}
                            </div>
                        ))}
                    </List>
                </div>
            )}

            <Dialog open={!!selectedPlayerDetails} onClose={handleCloseDetails} sx={{minWidth:"70px"}}>
                <DialogTitle >{selectedPlayerDetails?.name} Details</DialogTitle>
                <DialogContent className="popup-box">
                    <Avatar
                        src={selectedPlayerDetails?.avatarUrl}
                        alt={selectedPlayerDetails?.name}
                    />
                    <Typography>{selectedPlayerDetails?.details}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        className="popup-button"
                        onClick={handleCloseDetails}
                        // sx={{ marginRight: "33vh" }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const Team_Selection = () => {
    const [activeCategory, setActiveCategory] = useState("batsman");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <Header />
            <NavBar
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
            />
            <Content activeCategory={activeCategory} />
        </div>
    );
};

export default Team_Selection;
