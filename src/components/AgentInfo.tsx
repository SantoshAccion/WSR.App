import React from 'react'
import {Box,Typography} from '@mui/material'

const AgentInfo = () => {
  return (
    <div>
      <Box 
        sx={{ flexGrow: 1,marginTop:'10px', display: {md: 'flex' },
        justifyContent:'space-between',
        background:'#45494D',
        padding:'10px'
        }}>
        <Typography variant='h5'>Adams,co Quote1</Typography>
        <Typography variant='h5'>$0.00</Typography>
    </Box>
    </div>
  )
}

export default AgentInfo
