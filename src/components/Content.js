import React, { useState } from "react";
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


    const Content = ({ activeCategory }) => {
    const playerMap = {
        batsman: [
            {
                name: "RG SHARMA",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 10.0,
            },
            {
                name: "V KHOLI",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 7.96,
            },
            {
                name: "MJ GUPTILL",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 7.37,
            },
            {
                name: "BB McCullum",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 6.18,
            },
            {
                name: "Shoaib Malik",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 5.63,
            },
            {
                name: "Player 6",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.6,
            },
            {
                name: "Player 7",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.4,
            },
            {
                name: "Player 8",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.9,
            },
            {
                name: "Player 9",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.7,
            },
        ],
        bowler: [
            {
                name: "Player A",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.6,
            },
            {
                name: "Player B",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.4,
            },
            {
                name: "Player C",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.2,
            },
            {
                name: "Player D",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.8,
            },
            {
                name: "Player E",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.7,
            },
            {
                name: "Player F",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.5,
            },
            {
                name: "Player G",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.3,
            },
            {
                name: "Player H",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.1,
            },
            {
                name: "Player I",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.9,
            },
        ],
        wicketkeeper: [
            {
                name: "Player X",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.7,
            },
            {
                name: "Player Y",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.1,
            },
            {
                name: "Player Z",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.5,
            },
            {
                name: "Player M",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.3,
            },
            {
                name: "Player N",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.2,
            },
            {
                name: "Player O",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.8,
            },
            {
                name: "Player P",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.6,
            },
            {
                name: "Player Q",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.4,
            },
            {
                name: "Player R",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.9,
            },
        ],
        "all rounder": [
            {
                name: "Player I",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.3,
            },
            {
                name: "Player II",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.9,
            },
            {
                name: "Player III",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.7,
            },
            {
                name: "Player IV",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.6,
            },
            {
                name: "Player V",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.4,
            },
            {
                name: "Player VI",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.8,
            },
            {
                name: "Player VII",
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rating: 4.5,
            },
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
        const playerWithAvatar = {
            ...player,
            avatarUrl: avatarImages[activeCategory][player.name],
        };
        setSelectedPlayerDetails(playerWithAvatar);
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