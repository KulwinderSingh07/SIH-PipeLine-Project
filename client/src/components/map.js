// import { polyline } from "leaflet";
import { useEffect, useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";

const MapComponent = ({ pipeJuctionArr }) => {
    const limeOptions = { color: "blue" };

    useEffect(()=>{
      console.log(pipeJuctionArr);
    },[pipeJuctionArr])

  return (
    <div className="mapComponetWrapper">
        <MapContainer
          center={[30.3564, 76.3647]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer    
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            pipeJuctionArr.length!=0 && pipeJuctionArr.map((loc) => {
              return (  
                <Polyline
                  pathOptions={limeOptions}
                  positions={[loc.startCoordinates,loc.endCoordinates]}
                  weight={5}
                  smoothFactor={10}
                  key = {`${loc.startPointName} + ${loc.endPointName}`}
                >
                  <Tooltip
                    direction="bottom"
                    offset={[0, 20]}
                    opacity={1}
                    sticky
                  >
                    sticky Tooltip for Rectangle
                  </Tooltip>

                  <Popup>
                    <div>
                    <h2>StartPoint : {loc.startPointName}</h2>
                    <h2>EndPoint : {loc.endPointName}</h2>
                    <p>Pipeline Diameter : {loc.currentPipeline[0].diameter}</p>
                    <p>Pipeline Length : {loc.currentPipeline[0].length}</p>
                    <p>Pipeline Loss : {loc.currentPipeline[0].minor_loss}</p>
                    </div>
                  </Popup>
                  
                </Polyline>
              );
            })}
        </MapContainer>
    </div>
  );
};

export default MapComponent;
