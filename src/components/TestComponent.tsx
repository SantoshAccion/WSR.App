import { Typography } from '@mui/material';
import React, { useEffect } from 'react';

export default function TestComponent() {

  useEffect(() => {
    console.log('first')
  }, [])

  return (
    <Typography variant='h4' component={'span'} sx={{color:(theme)=>theme.palette.primary.main,textAlign:'center'}}> Hello WSR Team</Typography> //color='primary'
  );
}


