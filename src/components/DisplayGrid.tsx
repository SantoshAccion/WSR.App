import React from 'react'
import {Typography} from '@mui/material'

import AgentInfo from './AgentInfo';
import SummeryTab from './SummeryTab';
import { makeStyles } from '@mui/styles';
import LeftPanel from './LeftPanel';
import GridCardTab from './GridCardTab';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const useStyles = makeStyles({
  mainbox: {
    flexGrow: 1,
    marginTop:'1rem',
    // paddingLeft:'24px',
    // paddingRight:'24px'
  },
  appbox:{
    background: '#D8D8D8',
    marginTop:'1rem'
  },
  grid3:{
    display: 'flex',
    paddingTop:'3px !important',
    // maxWidth: '100% !important'
  },
  premium:{
    flexGrow: 1,
    display: 'flex',
    justifyContent:'space-between',
    padding:'5px 9px'

  },
  grid9:{
    display:'flex',
    justifyContent:'space-around',
    // paddingLeft:'110px !important',
    paddingTop:'0px !important'
  },
  outerborder:{
    border: '1px solid',
    borderRadius: '20px',
    padding: '2px',
    marginRight:'6px',
    height:'12px !important',
    width:'12px !important',
    position: 'relative',
    top: '5px'
  },
  quotediv:{
    marginLeft:'.5rem',
    marginRight:'.5rem',
    backgroundColor:'#fff',
    width:'270px',

  }


});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const DisplayGrid = () => {
  const classes = useStyles();

   
  return (
    <>
       <Box className={classes.mainbox} id="autocomplete-box" sx={{backgroundColor: '#DFE0E0',marginTop:'2rem'}}>
            <Grid container spacing={2}>
                <Grid item xs={2} className={classes.grid3} >
                    <LeftPanel />
                    <Box className={classes.quotediv}>
                      
                          <Box className={classes.premium}>
                              <Typography variant='h4' sx={{width:'140px'}}>Enterprise Producer Premium</Typography>
                              <Typography variant='h4'>$10,23000,00</Typography>
                          </Box>
                          <Box sx={{height:'35rem'}}>
                            {/* loop ll start from here */}
                            <AgentInfo />
                            <AgentInfo />
                            {/* loop will end here */}
                          </Box>
                      <SummeryTab />
                    </Box> 
                    
                </Grid>
                <Grid item xs={10} className={classes.grid9}>
                    <GridCardTab />
                </Grid>
            </Grid>
        </Box>

        
    </>
  )
}

export default DisplayGrid
