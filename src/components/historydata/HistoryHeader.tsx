import { Typography,Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import HistoryTable from './HistoryTable';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const useStyles = makeStyles({
    mainbox: {
      flexGrow: 1,
      display:'flex',
      justifyContent:'space-between',
      
    },
    
  
  });
  

const HistoryHeader = () => {
    const classes = useStyles();

  return (
    <Box>
        <Box className={classes.mainbox}>
            <Typography>Coverage:Grid Pro |</Typography>
            <Typography>Display:100% |</Typography>
            <Typography>Minimum:10% |</Typography>
            <Typography>Maximum:60% |</Typography>
            <Typography>Lock:None |</Typography>
            <Typography>Distribution:60%</Typography>
        </Box>
        <Box sx={{padding:'16rem',background:'#ECF1F1'}}>
            <Typography>Historical Data</Typography>
        </Box>
        <Box>
            <HistoryTable />
        </Box>
      
    </Box>
  )
}

export default HistoryHeader
