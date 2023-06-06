import React, { useState } from "react";
import Player from "./Player";
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
    Box
} from "@mui/material";

import ipl from "./img/ipl.png";


    const Content = ({ activeCategory,data }) => {
   

    // //avatars of players
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
    // const handleAddClick = (player) => {
    //     if (
    //         selectedPlayers.length < 11 &&
    //         !selectedPlayers.some(
    //             (selectedPlayer) => selectedPlayer.name === player.name
    //         )
    //     ) {
    //         setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
    //     }
    // };

    //delete the player from the selected list
    const handleDeleteClick = (player) => {
        setSelectedPlayers((prevPlayers) =>
            prevPlayers.filter((p) => p !== player)
        );
    };

    // const handlePlayerClick = (player) => {
    //     const playerWithAvatar = {
    //         ...player,
    //         avatarUrl: avatarImages[activeCategory][player.name],
    //     };
    //     setSelectedPlayerDetails(playerWithAvatar);
    // };

    const handleCloseDetails = () => {
        setSelectedPlayerDetails(null);
    };

    return (
        <div className="content">
            <div className="players">
                <Typography variant="h6">{activeCategory}</Typography>
                <List>
                    {data.map((player, index) => {
                        if (index > 0 && index<100)
                            return <Player activeCategory={activeCategory} index={index} player={{ name: player[1], rating: player[21], }} />
                    }
                    )}
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
            <Box>
                <Dialog
                    open={!!selectedPlayerDetails}
                    onClose={handleCloseDetails}
                >
                    <DialogTitle
                        sx={{
                            fontSize: "30px",
                            height: "0px",
                            // paddingTop: "25px",
                            marginLeft: "200px",
                        }}
                    >
                        {selectedPlayerDetails?.name}
                    </DialogTitle>
                    <DialogContent className="popup-box">
                        <Avatar
                            sx={{
                                width: 230,
                                height: 200,
                                marginBottom: "20px",
                            }}
                            src={selectedPlayerDetails?.avatarUrl}
                            alt={selectedPlayerDetails?.name}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ padding: "10px", margin: "10px",cursor: "default", // Remove cursor
                            pointerEvents: "none" }}
                        >
                            {activeCategory}
                        </Button>
                        <Typography sx={{ fontSize: "17px", width: "350px", paddingTop:"10px" }}>
                            {selectedPlayerDetails?.details}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            className="popup-button"
                            onClick={handleCloseDetails}
                            sx={{ paddingTop: "0px" }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
};
 
export default Content