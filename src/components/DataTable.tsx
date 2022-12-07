import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  creatine: number,

) {
  return { name, calories, fat, carbs, protein,creatine };
}

const rows = [
  createData('JAN-FEB', 0, 6.0, 24, 4.0,0.00),
  createData('FEB-MAR', 0, 9.0, 37, 4.3,0.00),
  createData('MAR-APR', 0, 16.0, 24, 6.0,0.00),
  createData('APR-MAY', 0, 3.7, 67, 4.3,0.00),
  createData('MAY-JUN', 0, 16.0, 49, 3.9,0.00),
  createData('JUN-JUL', 0, 16.0, 49, 3.9,0.00),
  createData('JUL-AUG', 0, 16.0, 49, 3.9,0.00),
  createData('AUG-SEP', 0, 16.0, 49, 3.9,0.00),
  createData('SEP-OCT', 0, 16.0, 49, 3.9,0.00),
  createData('OCT-NOV', 0, 16.0, 49, 3.9,0.00),
  createData('NOV-DEC', 0, 16.0, 49, 3.9,0.00),

];

export default function DataTable(props) {

 
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Creatine&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody id="data-table">
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 },'&>:nth-child(odd)':{background:props.tableColor} }}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.creatine}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}