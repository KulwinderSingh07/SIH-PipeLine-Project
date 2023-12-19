import React, { useEffect, useState } from 'react'
import '../CSS/HomePageComponent.css'
import DataCard from './DataCard'
import MapComponent from './map'
import  axios  from 'axios'
import LocationDropSelector from './locationDrop'
import LineChartComponent from './lineChart'
import AreaSearchSelector from './areaSearchSelector'
import SelectedAreaStateToggle from './selectedAreaStateTogglers'
import {Areas}  from '../data/dummyAreaArray'
import LocationDrop from './locationreal'




const HomePageComponent = () => {
    const [pipeJuctionArr, setpipeJuctionArr] = useState([])
    const [graphData, setGraphData] = useState([])
    const [selectedArea, setSelectedArea] = useState(Areas)
    const [anomalityDataArr, setAnomalityDataArr] = useState([])
    const [graphDataToDisplay, setGraphDataToDisplay] = useState([])


    // fetchind data to display at the map
    const fetchMapData = async()=>{
      //fetching all the selected lanes from Backend
      const data = await axios.get('http://localhost:4000/selected/getSelectedPipes');

      // fetching anomalities list
      const anomalityList=await axios.get("http://localhost:4000/anomality/getAllAnomality")
      console.log(anomalityList.data.anomalityDataArr)
      setAnomalityDataArr(anomalityList.data.anomalityDataArr)

      console.log(data.data.allSelected);
      const finalResult = data.data.allSelected;
      
      setpipeJuctionArr(finalResult);
      console.log(pipeJuctionArr)
    }

    
    const constructNewLineGraphDataSet=async(dataArr,junctionName)=>{
      const dataPropForLineChart={
        label: junctionName,
        data:[],
        borderColor: 'rgb(23, 152, 225)',
        backgroundColor: 'rgba(13, 142, 225, 0.5)',
      }
     const newDataset=await dataArr.map((instanceFlow)=>{
        return {x:instanceFlow.checkEpoch,y:instanceFlow.flowrate}
      })
      console.log(newDataset)
      return dataPropForLineChart
    }

    const inputIntoGraph=async(junctionName)=>{
      console.log(graphDataToDisplay)
      let index=graphDataToDisplay.findIndex(val=>val.junctionName==junctionName)
      console.log(index)
      if(index==-1){
      const graphInput=await axios.post("http://localhost:4000/pipeflow/getPipeFlow",{
        junctionName:junctionName})
        console.log(graphInput)
        console.log(graphInput.data.flowdata)
        // const dataPropForLineChart=await constructNewLineGraphDataSet(graphInput.data.flowdata,junctionName)
        // console.log(dataPropForLineChart)
        setGraphDataToDisplay([...graphDataToDisplay,graphInput.data.flowdata])
        // setGraphDataToDisplay(graphInput.data.flowdata)

      // console.log(dataPropForLineChart,junctionName) 
    }else{
      console.log("chal reah")
    const newJunctionDataArr=graphDataToDisplay.map((junction=>{
      return junction.junctionName!=junctionName
    }))
    setGraphDataToDisplay(newJunctionDataArr)
  }
}

    
    const addDataToGraph=()=>{
      const dataDemo={
        label: 'Dataset 3',
        data:[
                           {x:'April',y:1000},
                           {x:'Hello',y:40},
                           {x:'May',y:35},
                        ],
        borderColor: 'rgb(23, 152, 225)',
        backgroundColor: 'rgba(13, 142, 225, 0.5)',
      }
      setGraphData(dataDemo)
    }
  
    useEffect(()=>{ 
      console.log(Areas)
      fetchMapData();
    },[])
  return (
    <div className='mainHomePageCompDiv'>
        <div className='homePageDivTop'>
            <div className='homePageDivTopSubUnitOne'>
              <div className='homePageDivTopSubUnitOneLeft'>
                <p style={{fontSize:'30px',fontWeight:'500'}}>Welcome,</p>
                <p style={{fontSize:'15px'}}>Sunday 29th October, 2023</p>
              </div>
              <div className='homePageDivTopSubUnitOneRight'>
                <div className='homePageDivTopSubUnitOneRightUpper'>
                <SelectedAreaStateToggle setSelectedArea={setSelectedArea} selectedArea={selectedArea}/>
                </div>
                <AreaSearchSelector setSelectedArea={setSelectedArea} selectedArea={selectedArea}/>
              </div>
            </div>
            <div className='homePageDivTopSubUnitTwo'>
                <DataCard selectedArea={selectedArea}/>
                <DataCard selectedArea={selectedArea}/>
                <DataCard selectedArea={selectedArea}/>
                <DataCard selectedArea={selectedArea}/>
            </div>
        </div>
        <div className='homePageDivBottom'>
            <div className='homePageDivBottomLeftUnit'>
            <div className='homePageDivBottomLeftUpperUnit'>
                <LineChartComponent graphDataToDisplay={graphDataToDisplay}/>
            </div>
            <div className='homePageDivBottomLeftLowerUnit'>
            {/* <LocationDropSelector fetchMapData={fetchMapData} /> */}
            <LocationDrop fetchMapData={fetchMapData} />
            </div>
            </div>
            <div className='homePageDivBottomRightUnit'>
                <h3 className='mapHeading'>Area Overview</h3>
                <MapComponent pipeJuctionArr={pipeJuctionArr} anomalityDataArr={anomalityDataArr} inputIntoGraph={inputIntoGraph}/>
            </div>
        </div>
        {/* <button onClick={()=>{
          addDataToGraph()
        }}>Add Data</button> */}
        {/* <button onClick={()=>{ */}
          {/* addDataToGraph() */}
        {/* }}>Add Data</button> */}
    </div>
  )
}

export default HomePageComponent