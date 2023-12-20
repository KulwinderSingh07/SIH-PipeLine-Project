// import { polyline } from "leaflet";
import { useEffect, useState, useMemo } from "react";
import { Icon } from 'leaflet';
import axios from "axios"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";

const MapComponent = ({ pipeJuctionArr ,anomalityDataArr,inputIntoGraph,markerJunctionsArr 
  ,markerChildNodeArr,centerMap
}) => {
    const [pipeMarkerSelector, setPipeMarkerSelector] = useState("")
    const limeOptions = { color: "blue" };

    const customMarkerIcon = new Icon({
      iconUrl:require("../assets/anomalityicon.png"), // Replace with the path to your image
      iconSize: [32, 32]
        });
    const junctionMarker = new Icon({
      iconUrl:require("../assets/junction.png"), // Replace with the path to your image
      iconSize: [32, 32]
        });
    const  childNodeIcon= new Icon({
       // Replace with the path to your image
       iconUrl:require("../assets/childNode.png"),
      iconSize: [25, 25]
        });

    
    const changePipeMarkerSelector=(pipeIdentifier)=>{

      if(pipeMarkerSelector==pipeIdentifier){
        setPipeMarkerSelector("")
      }else{
        setPipeMarkerSelector(pipeIdentifier)
      }
    }

    const colorSelector=(loc)=>{
      if(loc.startPointName.startsWith("junction") && loc.endPointName.startsWith("junction")){
        return "red"
      }else{
        return "purple"
      }
    }


    useEffect(()=>{
      console.log(pipeJuctionArr);
    },[pipeJuctionArr])

  return (
    <div className="mapComponetWrapper">
        <MapContainer
          center={centerMap}
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
                  pathOptions={
                    {color:colorSelector(loc)}
                  }
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
                    <p>Pipeline Diameter : {loc.currentPipeline.diameter}</p>
                    <p>Pipeline Length : {loc.currentPipeline.length}</p>
                    <p>Pipeline Loss : {loc.currentPipeline.minor_loss}</p>
                    </div>
                    {pipeMarkerSelector==`${loc.startPointName}+${loc.endPointName}` ?
                      <>
                        <Marker position={loc.startCoordinates} eventHandlers={{click:()=>{
                          console.log(loc)
                          inputIntoGraph(loc.startPointName)
                        }}}>
                          <Popup>
                            <div>
                            <h2>StartPoint : {loc.startPointName}</h2>
                            </div>
                          </Popup>
                        </Marker>
                        <Marker position={loc.endCoordinates} eventHandlers={{click:()=>{
                          console.log(loc)
                          inputIntoGraph(loc.endPointName)
                        }}}>
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
            {markerJunctionsArr.length!=0 && markerJunctionsArr.map((junctionObj)=>{
              return(
                <Marker icon={junctionMarker} position={[junctionObj.coordinates[0],junctionObj.coordinates[1]]}
                eventHandlers={{click:()=>{
                  inputIntoGraph(junctionObj)
                }}} 
                >
                    <Popup>
                      <div>
                        <h2>Name:{junctionObj.junctionName}</h2>
                        <p>Water Quality Index : {junctionObj.water_quality_index}</p>
                    <p>Issues issues_pending : {junctionObj.issues_pending}</p>
                    <p>Issues Resolved : {junctionObj.issues_resolved}</p>
                      </div>
                      </Popup>
                    </Marker>
              )
            })

            }
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
            {
              markerChildNodeArr.length!=0 && markerChildNodeArr.map((childNode)=>{
                return(
                  <Marker icon={childNodeIcon} position={[childNode.coordinates[0],childNode.coordinates[1]]}
                  eventHandlers={{click:()=>{
                    inputIntoGraph(childNode.node_name)
                  }}}
                  >
                    <Popup>
                      <h2>Name: {childNode.node_name}</h2>
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
