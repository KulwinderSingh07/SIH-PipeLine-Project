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
import AnoamlitySelector from './anomality'
import anomalityIcon from "../assets/anomalityicon.png"
import JuncitonIcon from "../assets/junction.png"
import childNodeIcon from "../assets/childNode.png"
import TitlebarBelowMasonryImageList from './showVisual'
import Header from './header'
import Reservior from '../assets/reservior.png';

const HomePageComponent = () => {
    const [pipeJuctionArr, setpipeJuctionArr] = useState([])
    const [selectedArea, setSelectedArea] = useState(Areas)
    const [anomalityDataArr, setAnomalityDataArr] = useState([])
    const [graphDataToDisplay, setGraphDataToDisplay] = useState({})
    const [markerJunctionsArr, setMarkerJunctionsArr] = useState([])
    const [markerChildNodeArr, setMarkerChildNodeArr] = useState([])
    const [centerMap, setCenterMap] = useState([30.3564, 76.3647])

    function getDate(){
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
      const date = today.getDate();

      return `${date} / ${month} / ${year}`
    }

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

      const selectedAreadata=await axios.get("http://localhost:4000/junction/getSelectedJunctions")
      console.log(selectedAreadata.data.selectedJunctions)
      for(let index in selectedAreadata.data.selectedJunctions){
        if(index==0){
          selectedAreadata.data.selectedJunctions[index].checkBoxSelected=true
        }else{
          selectedAreadata.data.selectedJunctions[index].checkBoxSelected=false
        }
      }
      setSelectedArea(selectedAreadata.data.selectedJunctions)

      console.log(selectedAreadata.data.selectedJunctions)

      const fetchedAllJunctions=await axios.get("http://localhost:4000/junction/getAllJunctions")
      console.log(fetchedAllJunctions.data)
      setMarkerJunctionsArr(fetchedAllJunctions.data)

      const allChildNodes=await axios.get("http://localhost:4000/childnode/getAllChildNodes")
      console.log(allChildNodes.data)
      setMarkerChildNodeArr(allChildNodes.data)
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
      // console.log(graphDataToDisplay)
      // let index=graphDataToDisplay.findIndex(val=>val.junctionName==junctionName)
      // console.log(index)
      // if(index==-1){
      const graphInput=await axios.post("http://localhost:4000/pipeflow/getPipeFlow",{
        junctionName:junctionName})
        console.log(graphInput)
        // console.log(graphInput.data.flowdata)
        // const dataPropForLineChart=await constructNewLineGraphDataSet(graphInput.data.flowdata,junctionName)
        // console.log(dataPropForLineChart)
        // setGraphDataToDisplay([...graphDataToDisplay,graphInput.data.flowdata])
        // setGraphDataToDisplay(graphInput.data.flowdata)

      // console.log(dataPropForLineChart,junctionName) 
  //   }else{
  //     console.log("chal reah")
  //   const newJunctionDataArr=graphDataToDisplay.map((junction=>{
  //     return junction.junctionName!=junctionName
  //   }))
  //   setGraphDataToDisplay(newJunctionDataArr)
  // }
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
        <Header title={'Dashboard'} subtitle={getDate()}/>
                {/* <p style={{fontSize:'30px',fontWeight:'500'}}>Welcome,</p> */}
                {/* <p style={{fontSize:'15px'}}>Sunday 29th October, 2023</p> */}
              </div>
              <div className='homePageDivTopSubUnitOneRight'>
                <div className='homePageDivTopSubUnitOneRightUpper'>
                <SelectedAreaStateToggle setSelectedArea={setSelectedArea} selectedArea={selectedArea}/>
                </div>
                <AreaSearchSelector setSelectedArea={setSelectedArea} selectedArea={selectedArea}/>
              </div>
            </div>
            <div className='homePageDivTopSubUnitTwo'>
                <DataCard selectedArea={selectedArea} selector={1}/>
                <DataCard selectedArea={selectedArea} selector={2}/>
                <DataCard selectedArea={selectedArea} selector={3}/>
                <DataCard selectedArea={selectedArea} selector={4}/>
            </div>
        </div>
        <div className='homePageDivBottom'>
            <div className='homePageDivBottomLeftUnit'>
            <div className='homePageDivBottomLeftUpperUnit'>
                {/* <LineChartComponent graphDataToDisplay={graphDataToDisplay}/> */}
                <AnoamlitySelector anomalityDataArr={anomalityDataArr} setCenterMap={setCenterMap}/>
            </div>
            <div className='homePageDivBottomLeftLowerUnit'>
            {/* <LocationDropSelector fetchMapData={fetchMapData} /> */}
            <LocationDrop fetchMapData={fetchMapData} />
            </div>
            </div>
            <div className='homePageDivBottomRightUnit'>
              <div className='IconWrapper'>
                <div>
                <h3 className='mapHeading'>Area Overview</h3>
                </div>
                {/* <TitlebarBelowMasonryImageList/> */}
                <div className='IconList'>

                  <div className='wrapper1'>
                  <div style={{display:'flex',flexDirection:'row'}}>
                  <img className="viewIcon" src={JuncitonIcon}/><p style={{marginLeft:'10px',marginRight:'30px'}}>Junction</p>
                  </div>

                  <div style={{display:'flex',flexDirection:'row'}}>
                  <img className="viewIcon" src={childNodeIcon}/><p style={{marginLeft:'10px',marginRight:'50px'}}>Child Nodes</p>
                  </div>

                  <div style={{display:'flex',flexDirection:'row'}}>
                  <img className="viewIcon" src={anomalityIcon}/><p style={{marginLeft:'10px'}}>Anomality</p>
                  </div>
                  </div>
                  

                  <div className='pipecontainer'>
                <div className="pipeRed"></div><span style={{marginLeft:'5px',marginRight:'10px'}}>Junction Connection Pipe</span>
                <div className="pipeBlue"></div><span style={{marginLeft:'10px',marginRight:'10px'}}>Node Connection Pipe</span>
                <div className='reserviorSetup'>
                  <img style={{height:'30px'}} src={Reservior}/>
                  <p>Reservior</p>
                </div>
                </div>

                
                
                </div>
              </div>
                <MapComponent pipeJuctionArr={pipeJuctionArr} anomalityDataArr={anomalityDataArr} inputIntoGraph={inputIntoGraph}
                markerJunctionsArr={markerJunctionsArr}
                markerChildNodeArr={markerChildNodeArr}
                centerMap={centerMap}
                />
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