import React, { useEffect, useState } from 'react'
import '../CSS/HomePageComponent.css'
import DataCard from './DataCard'
import MapComponent from './map'
import  axios  from 'axios'
import LocationDropSelector from './locationDrop'

const HomePageComponent = () => {
    const [pipeJuctionArr, setpipeJuctionArr] = useState([])

    const fetchMapData = async()=>{
      //fetching all the selected lanes from Backend
      const data = await axios.get('http://localhost:4000/selected/getSelectedPipes');
      console.log(data.data.allSelected);
      const finalResult = data.data.allSelected;
      
      setpipeJuctionArr(finalResult);
      console.log(pipeJuctionArr)
    }
  
    useEffect(()=>{
      fetchMapData();
    },[])
  return (
    <div className='mainHomePageCompDiv'>
        <div className='homePageDivTop'>
            <div className='homePageDivTopSubUnitOne'>
                <p style={{fontSize:'30px',fontWeight:'500'}}>Welcome,</p>
                <p style={{fontSize:'15px'}}>Sunday 29th October, 2023</p>
            </div>
            <div className='homePageDivTopSubUnitTwo'>
                <DataCard/>
                <DataCard/>
                <DataCard/>
                <DataCard/>
            </div>
        </div>
        <div className='homePageDivBottom'>
            <div className='homePageDivBottomLeftUnit'>
            <div className='homePageDivBottomLeftUpperUnit'>
                <h1>Graph</h1>
            </div>
            <div className='homePageDivBottomLeftLowerUnit'>
            <LocationDropSelector fetchMapData={fetchMapData} />
            </div>
            </div>
            <div className='homePageDivBottomRightUnit'>
                <h3 className='mapHeading'>Area Overview</h3>
                <MapComponent pipeJuctionArr={pipeJuctionArr} />
            </div>
        </div>
    </div>
  )
}

export default HomePageComponent