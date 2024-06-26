import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

  const BasicSelect=({setHostelVal})=> {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
    setHostelVal(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Junctions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"hostel_pq"}>Hostel PQ</MenuItem>
          <MenuItem value={"hostel_K"}>Hostel K</MenuItem>
          <MenuItem value={"hostel_D"}>Hostel D</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default BasicSelect