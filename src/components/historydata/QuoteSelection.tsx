import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function QuoteSelection() {
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="243421 GIS1" />
        <FormControlLabel value="male" control={<Radio />} label="243421 GIS1" />
        <FormControlLabel value="other" control={<Radio />} label="243421 GIS1" />
      </RadioGroup>
    </FormControl>
  );
}