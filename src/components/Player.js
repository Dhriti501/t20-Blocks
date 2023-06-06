import React from 'react'
import { ListItem,ListItemAvatar ,ListItemText,Button,Avatar} from '@mui/material'

const Player = ({name,rating,handleAddClick,selectedPlayers,handlePlayerClick}) => {
    return (
       
            <React.Fragment key={name}>
                <ListItem>
                    <ListItemAvatar className="CreateTeamListAvatar">
                        <Avatar
                            alt={name}
                            src=""
                            sx={{ width: 80, height: 80 }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        className="CreateTeamListText"
                        primary={name}
                        secondary={`Rating: ${rating}`} />
                     <Button
                            onClick={() => handleAddClick(name)}
                            disabled={selectedPlayers.length === 11}
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
                            Add
                    </Button>
                    <Button
                        onClick={() => handlePlayerClick(name)}
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
                        Details
                     </Button>
                </ListItem>
        </React.Fragment>
            
  )
}

export default Player