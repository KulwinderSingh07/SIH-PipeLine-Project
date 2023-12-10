import { useEffect, useState } from "react";
import LocationDropSelector from "./locationDrop";
import MapComponent from "./map";
// import Map from "./newmap";
import axios from 'axios';


const DashBoardPage = () => {
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
    <div className="monitoringDashBoardWrapper">
      <div className="dashBoardHeader">
        <LocationDropSelector fetchMapData={fetchMapData} />
      </div>
      <MapComponent pipeJuctionArr={pipeJuctionArr} />
    </div>
  );
};

export default DashBoardPage;
