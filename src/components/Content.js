import React, { useState } from 'react'
import Player from './Player'
import { Typography, List, Button, ListItemText, ListItem, ListItemAvatar, Avatar, Dialog ,DialogActions,DialogTitle,DialogContent} from '@mui/material'


const Content = ({ activeCategory, batsmanData }) => {
    

    const [selectedPlayers, setSelectedPlayers] = useState([])
    const [selectedPlayerDetails, setSelectedPlayerDetails] = useState(null)

    
    const handleAddClick = (player) => {

        if (
            selectedPlayers.length < 11 &&
            !selectedPlayers.some(
                (selectedPlayer) => selectedPlayer === player
            )
        ) {
            setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
        }
            
    }

    const handleDeleteClick = (player) => {
        console.log(player, " Deleted");

        const updatedArray = selectedPlayers.filter((item) => item !== player);
        setSelectedPlayers(updatedArray);


    }

    const handlePlayerClick = (player) => {
        setSelectedPlayerDetails(player)
    }

    const handleCloseDetails = () => {
        setSelectedPlayerDetails(null)
    }

    return (
        <div className="content">
                <div className="players">
                    <Typography variant="h6">{activeCategory}</Typography>
                    <List>
                    {batsmanData.map((player) => <Player name={player[1]} rating={Math.round(player[21] * 100) / 100} handleAddClick={handleAddClick} selectedPlayers={selectedPlayers} handlePlayerClick={handlePlayerClick} />)}
                </List>
                
               
            </div>
            
            {selectedPlayers.length > 0 &&
                <div className="selected-players">
                    <Typography variant="h6">SELECTED PLAYERS:</Typography>
                    <List>
                        {selectedPlayers.map((player) => (
                            <div key={player}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={player}
                                            src=""
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ fontSize: "20px" }}
                                        primary={player}
                                    />
                                    <Button
                                        onClick={() => handleDeleteClick(player)}
                                        sx={{
                                            fontSize: 14,
                                            padding: "5px 10px",
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
                                        Delete
                                    </Button>
                                </ListItem>
                            
                            </div>
                        ))}
                    </List>
                    {selectedPlayers.length==11 && <Button
                                variant="contained"
                                color="primary"
                                className="full-width-button"
                                sx={{
                                    marginTop: "25px",
                                    backgroundColor: "#008afc",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "black",
                                    },
                                }}
                            >
                               Check Your Team's Chemistry
                    </Button>}
                </div>
            }

            {/* <Dialog open={!!selectedPlayerDetails} onClose={handleCloseDetails}>
                <DialogTitle>{selectedPlayerDetails} Details</DialogTitle>
                <DialogContent>
                    <Typography>Name: {selectedPlayerDetails}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDetails}>Close</Button>
                </DialogActions>
            </Dialog> */}

            <Dialog open={!!selectedPlayerDetails} onClose={handleCloseDetails}>
                <DialogTitle>{selectedPlayerDetails} Details</DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                       
                     <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Avatar" style={{ width: '100px', height: '100px' }} />
                        <Typography variant="body1" align="center" style={{ width: '300px' }} >
                Name: {selectedPlayerDetails}
                        </Typography>
                        <Typography variant="body1" align="center" style={{ width: '300px' }}>
                Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra sollicitudin leo nec tristique. Nam eleifend, eros non efficitur mattis, magna diam efficitur ex, at convallis erat lorem semper dui.
             </Typography>
                     </div>
                </DialogContent>
             </Dialog>

        </div>
  )
}

export default Content;