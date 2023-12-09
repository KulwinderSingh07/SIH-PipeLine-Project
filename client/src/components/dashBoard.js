import { useEffect, useState } from "react";
import LocationDropSelector from "./locationDrop";
import MapComponent from "./map";
import Map from "./newmap";

const DashBoardPage = () => {
  //PolyLine Data Reference Below :
  // const [polylineData, setPolylineData] = useState([
  //   [51.5, -0.1],
  //   [51.5, -0.12],
  // ]);

  const [polylineData,setPolylineData] = useState();

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
