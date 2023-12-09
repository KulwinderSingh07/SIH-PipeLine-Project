// import { polyline } from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";
const MapComponent = ({ polylineData }) => {
    // const [pipeJuctionArr, PipeJuctionArr] = useState([])
    // const [pipeJuctionArr, setpipeJuctionArr] = useState(second)
    const [pipeJuctionArr, setpipeJuctionArr] = useState([])
  const limeOptions = { color: "red" };
  useEffect(()=>{
    console.log(polylineData)
    const newPipeCoord=polylineData
    let temparr = pipeJuctionArr;
    temparr.push(newPipeCoord);
    setpipeJuctionArr(temparr)
    console.log(pipeJuctionArr)

  },[,polylineData])

  return (
    <div className="mapComponetWrapper">
        <MapContainer
          center={[51.505, -0.09]}
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
                  positions={loc}
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
                  <Popup>{"Inflow= "+" , "+"Outflow= "}</Popup>
                </Polyline>
              );
            })}
        </MapContainer>
    </div>
  );
};

export default MapComponent;
