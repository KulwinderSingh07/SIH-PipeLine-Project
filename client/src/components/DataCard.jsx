import React, { useEffect, useState } from 'react'
import '../CSS/DataCard.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const DataCard = ({selectedArea}) => {
  const [areaAataToDisplay, setAreaAataToDisplay] = useState()
  useEffect(()=>{
    console.log(selectedArea)
    let index=selectedArea.map(area=>area.selected).indexOf(true)
    setAreaAataToDisplay(selectedArea[index])
  },[selectedArea])
  return (
    <div className='dataCardDiv'>
        <div className='dataCardDivHeader'>
        <h3 style={{color:'#48719c'}}>Issues Resolved</h3>
        <CheckCircleOutlineIcon sx={{color:'rgb(54, 255, 54)',ml:'10px'}}/>
        </div>
        <h1 style={{color:'#48719c'}} className='dataCardCount'>{selectedArea[0].output}</h1>
        <p style={{fontSize:'13px'}}>To view the complete details click here</p>
    </div>
  )
}

export default DataCard