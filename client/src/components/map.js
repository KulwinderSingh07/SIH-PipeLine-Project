// import { polyline } from "leaflet";
import { useEffect, useState, useMemo } from "react";
import { Icon } from 'leaflet';

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";

const MapComponent = ({ pipeJuctionArr ,anomalityDataArr}) => {
    const [pipeMarkerSelector, setPipeMarkerSelector] = useState("")
    const limeOptions = { color: "blue" };

    const customMarkerIcon = new Icon({
      iconUrl:require("../assets/anomalityicon.png"), // Replace with the path to your image
      iconSize: [32, 32]
        });

    
    const changePipeMarkerSelector=(pipeIdentifier)=>{
      if(pipeMarkerSelector==pipeIdentifier){
        setPipeMarkerSelector("")
      }else{
        setPipeMarkerSelector(pipeIdentifier)
      }
    }

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
                  eventHandlers={{dblclick:()=> {changePipeMarkerSelector(`${loc.startPointName}+${loc.endPointName}`)},
                }}
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
                    {pipeMarkerSelector==`${loc.startPointName}+${loc.endPointName}` ?
                      <>
                        <Marker position={loc.startCoordinates}>
                          <Popup>
                            <div>
                            <h2>StartPoint : {loc.startPointName}</h2>
                            </div>
                          </Popup>
                        </Marker>
                        <Marker position={loc.endCoordinates}>
                          <Popup>
                          <div>
                            <h2>EndPoint : {loc.endPointName}</h2>
                            </div>
                          </Popup>
                        </Marker>
                      </>
                      :<></>}
                  </Popup>
                  
                </Polyline>
              );
            })}
            {
              anomalityDataArr.length!=0 && anomalityDataArr.map((anomalityObj)=>{
                return(
                  <Marker icon={customMarkerIcon} position={[anomalityObj.anomalityLocLat,anomalityObj.anomalityLocLong]}>
                    <Popup>
                      <div>
                        <h2>Anomality Type:{anomalityObj.anomalityType}</h2>
                      </div>
                      <div>
                        <p>Occurence Time:Currently</p>
                      </div>
                      </Popup>
                    </Marker>
                )
              })
            }
        </MapContainer>
    </div>
  );
};

export default MapComponent;
