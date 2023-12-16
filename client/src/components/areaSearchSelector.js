import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from 'react';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


  const AreaSearchSelector=({setSelectedArea,selectedArea})=> {
    const handleOnChange = (event, value) => {
      selectedArea.forEach(element => {
        if(element.selected==true){
          element.selected=false
        }
      });
      if(value!=null){
        let currentlySelectedArea=value
        currentlySelectedArea.selected=true
        console.log(value)
        const sortedOptions = [currentlySelectedArea, ...selectedArea.filter(option => option!=value)];
        console.log(sortedOptions)
        setSelectedArea(sortedOptions);
      }
      };
      useEffect(()=>{
        selectedArea[0].selected=true
        setSelectedArea(selectedArea)
      },[])
  return (
    <Autocomplete
      id="checkboxes-tags-demo"
      className='areaSearchSelector'
      options={selectedArea}
      getOptionLabel={(selectedArea) => selectedArea.name}
      onChange={handleOnChange}
      value={selectedArea[0]}
      renderOption={(props, selectedArea, { selected }) => (
        <li {...props}>
          {selectedArea &&<Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            // style={{ marginRight: 8 }}
            checked={selectedArea.selected}
            className='areaSearchSelectorCheckBox'
            size='small'
          />}
          {selectedArea.name?selectedArea.name:""}
        </li>
      )}
      // style={{ width: 500 }}
      renderInput={(params) => (
        <TextField  className='textAreaForAreaSearchSelector' {...params} label="Areas" placeholder="Select Area to view data" size='small'/>
      )}
    />
  );
}
export default AreaSearchSelector;

