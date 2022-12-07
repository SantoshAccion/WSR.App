import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  creatine: number,
  diet: number,

  




) {
  return { name, calories, fat, carbs, protein,creatine,diet };
}

const rows = [
  createData('80%', 159, 6.0, 24, 4.0 , 50, 80),
  createData('90%', 237, 9.0, 37, 4.3, 50, 80),
  createData('70%', 262, 16.0, 24, 6.0, 50, 80),
  createData('60%', 305, 3.7, 67, 4.3, 50, 80),
  createData('50%', 356, 16.0, 49, 3.9, 50, 80),
];

export default function HistoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">Indeminity</TableCell>
            <TableCell align="right">Premium</TableCell>
            <TableCell align="right">Net</TableCell>
            <TableCell align="right">% years paid</TableCell>
            <TableCell align="right">Indeminity/$1</TableCell>
            <TableCell align="right">Out of Pocket</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.creatine}</TableCell>
              <TableCell align="right">{row.diet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}