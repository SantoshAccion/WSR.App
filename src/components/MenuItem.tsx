import React from 'react'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const MenuItem = () => {
  const pages = ['File', 'Reports', 'Help'];
  return (
    <>
        <AppBar position="static" sx={{backgroundColor:'#F6F6F6',boxShadow:'none'}}>
            <Container maxWidth="xl" sx={{marginLeft: 'unset',paddingLeft:'4px !important'}}>
                <Toolbar disableGutters sx={{minHeight:'20px !important'}}>
                    <Box sx={{ flexGrow: 1, display: {md: 'flex' } }}> 
                        {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 1, fontSize:'13px',padding:'0px 8px',lineHeight:'0',color: (theme)=>theme.palette.text.primary, display: 'block',textTransform: "none" }} //my:8px for 1,if we want 16 then *2 we have to do
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
