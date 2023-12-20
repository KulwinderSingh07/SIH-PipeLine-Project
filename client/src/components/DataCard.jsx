import React, { useEffect, useState } from 'react'
import '../CSS/DataCard.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const DataCard = ({selectedArea,selector}) => {
  const [areaAataToDisplay, setAreaAataToDisplay] = useState()

  const dataToDisplay=(selector)=>{
    if(selector==1){
      return selectedArea[0].issues_resolved
    }
    if(selector==2){
      return selectedArea[0].issues_pending
    }
    if(selector==3){
      return selectedArea[0].water_quality_index
    }
    if(selector==4){
      return selectedArea[0].junctionName
    }
  }
  const dataHeading=(selector)=>{
    if(selector==1){
      return "Issues Resolved"
    }
    if(selector==2){
      return "Issues Pending"
    }
    if(selector==3){
      return "Water Quality Index"
    }
    if(selector==4){
      return "Junction Graphs"
    }
  }
  // const Logo=(selector)=>{
  //   if(selector==1){
  //     return "Total No of Issues Resolved"
  //   }
  //   if(selector==2){
  //     return "Issues No of Issues Pending"
  //   }
  //   if(selector==3){
  //     return "Water Quality Index for Junction"
  //   }
  //   if(selector==4){
  //     return "Junction Title"
  //   }
  // }
  
  useEffect(()=>{
    console.log(selectedArea)
    let index=selectedArea.map(area=>area.selected).indexOf(true)
    setAreaAataToDisplay(selectedArea[index])
  },[selectedArea])
  return (
    <div className='dataCardDiv'>
        <div className='dataCardDivHeader'>
        <h3 style={{color:'#48719c'}}>{dataHeading(selector)}</h3>
        <CheckCircleOutlineIcon sx={{color:'rgb(54, 255, 54)',ml:'10px'}}/>
        </div>
        <h1 style={{color:'#48719c'}} className='dataCardCount'>{selectedArea.length==0?"0":dataToDisplay(selector)}</h1>
        <p style={{fontSize:'13px'}}>To view the complete details click here</p>
    </div>
  )
}

export default DataCard