import React, { useEffect, useState } from 'react'
import '../CSS/HomePageComponent.css'
import DataCard from './DataCard'
import MapComponent from './map'
import  axios  from 'axios'
import LocationDropSelector from './locationDrop'
import LineChartComponent from './lineChart'



const HomePageComponent = () => {
    const [pipeJuctionArr, setpipeJuctionArr] = useState([])
    const [graphData, setGraphData] = useState()

    const fetchMapData = async()=>{
      //fetching all the selected lanes from Backend
      const data = await axios.get('http://localhost:4000/selected/getSelectedPipes');
      console.log(data.data.allSelected);
      const finalResult = data.data.allSelected;
      
      setpipeJuctionArr(finalResult);
      console.log(pipeJuctionArr)
    }

    
    // const addDataToGraph=()=>{
    //   const dataDemo={
    //     label: 'Dataset 3',
    //     data:[27,17,3,13,22,23,7,45],
    //     borderColor: 'rgb(23, 152, 225)',
    //     backgroundColor: 'rgba(13, 142, 225, 0.5)',
    //   }
    //   setGraphData(dataDemo)
    // }
  
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
                <LineChartComponent dataSetEntry={graphData}/>
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
        {/* <button onClick={()=>{
          addDataToGraph()
        }}>Add Data</button> */}
    </div>
  )
}

export default HomePageComponent