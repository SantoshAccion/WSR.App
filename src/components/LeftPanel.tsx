import React from 'react'
import {Box} from '@mui/material'
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import AppsIcon from '@mui/icons-material/Apps';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    
    appbox:{
      backgroundColor: '#fff',
      maxWidth: 50,
    },
  
  });

const LeftPanel = () => {
    const classes = useStyles();

  return (
        <Box className={classes.appbox} sx={{ width: '100%', }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <AppsIcon />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AppsOutageIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AppsOutageIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        <Divider />
        <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BeachAccessIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SavedSearchIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
    
        </Box>
  )
}

export default LeftPanel
