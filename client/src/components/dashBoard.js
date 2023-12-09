import { useEffect, useState } from "react";
import LocationDropSelector from "./locationDrop";
import MapComponent from "./map";
import Map from "./newmap";

const DashBoardPage = () => {
  const [polylineData, setPolylineData] = useState([
    [51.5, -0.1],
    [51.5, -0.12],
  ]);
  const fetPolylinedata = async (locData) => {
    console.log(locData);
    const newLoc = [locData.junctionLat, locData.junctionLong];
    console.log("Chal reha");
    let temparr = polylineData;
    temparr.push(newLoc);
    setPolylineData(temparr);
    console.log(polylineData.length);
  };
  return (
    <div className="monitoringDashBoardWrapper">
      <div className="dashBoardHeader">
        <LocationDropSelector setPolylineData={setPolylineData} />
      </div>
      <MapComponent polylineData={polylineData} />
    </div>
  );
};

export default DashBoardPage;
