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

//Importing local-json data
import Locations from '../data/network_1_locations.json'

const MapComponent = ({ polylineData }) => {
    const [pipeJuctionArr, setpipeJuctionArr] = useState([])
    const [locationsCoords,setLocationsCoords] = useState(Locations.locations);
    const [locationsMap,setLocationsMap] = useState();
    const limeOptions = { color: "red" };

    useEffect(()=>{
      //Initializing the Location Co-ordinates from the local json file
      setLocationsCoords(Locations.locations);
      console.log('Setting initial location coordinates :',locationsCoords);
      //making a map for quick retreival
      const tmpMap = new Map();
      for(let i=0;i<locationsCoords.length;i++){
        tmpMap[locationsCoords[i].location] = locationsCoords[i];
      }
      //initializing locations map from tmpMap
      setLocationsMap(tmpMap);
    },[])

    useMemo(()=>{
      console.log('New polyline clicked is :',polylineData);
      if(polylineData==undefined) return;
      //Fetching the respective Lat And Long Data of both start and end points
      const startCoordinates = locationsMap[polylineData.start_node_name].coordinates;
      console.log(startCoordinates);
      const endCoordinates = locationsMap[polylineData.end_node_name].coordinates;
      console.log(endCoordinates);

      //Format of Pipeline Data == [Polyline Data,[startCoordinates,endCoordinates]]
      const startPointName = locationsMap[polylineData.start_node_name].name;
      const endPointName = locationsMap[polylineData.end_node_name].name;

      const newPipeData = [polylineData,[startCoordinates,endCoordinates],{startPointName,endPointName}];
      let temparr = pipeJuctionArr;
      temparr.push(newPipeData);
      setpipeJuctionArr(temparr)
      console.log(pipeJuctionArr)

    },[polylineData])

  return (
    <div className="mapComponetWrapper">
        <MapContainer
          center={[30.3564, 76.3647]}
          zoom={13}
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
                  positions={[loc[1]]}
                  weight={10}
                  smoothFactor={10}
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
                    <h2>StartPoint : {loc[2].startPointName}</h2>
                    <h2>EndPoint : {loc[2].endPointName}</h2>
                    <p>Additional information can go here.</p>
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
