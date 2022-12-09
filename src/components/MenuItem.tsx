import React from 'react'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    button: {
        my: 1, fontSize:'13px',padding:'0px 8px',lineHeight:'0',display: 'block',textTransform: "none"
    },
  
  });

const MenuItem = () => {
    const classes = useStyles();

  const pages = ['File', 'Reports', 'Help'];
  return (
    <>
        <AppBar position="static" sx={{backgroundColor:'#F6F6F6',boxShadow:'none'}}>
            <Container maxWidth="xl" sx={{marginLeft: 'unset',paddingLeft:'4px !important'}}>
                <Toolbar disableGutters sx={{minHeight:'20px !important'}}>
                    <Box sx={{ flexGrow: 1, display: {md: 'flex' } }}> 
                        {pages.map((page) => (
                        <Button
                            className={classes.button}
                            key={page}
                            sx={{ color: (theme)=>theme.palette.text.primary }} //my:8px for 1,if we want 16 then *2 we have to do
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </>
  )
}

export default MenuItem
