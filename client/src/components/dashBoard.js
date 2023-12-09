import { useEffect, useState } from "react";
import LocationDropSelector from "./locationDrop";
import MapComponent from "./map";
import Map from "./newmap";

const DashBoardPage = () => {
  const [polylineData, setPolylineData] = useState([
    [51.5, -0.1],
    [51.5, -0.12],
  ]);
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
