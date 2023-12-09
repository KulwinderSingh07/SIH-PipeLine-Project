import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);
//   const [index, setIndex] = useState(0)
let index=0;
  const demodata=[
    [
        [51.5, -0.1],
        [51.5, -0.12],
        [51.5, -0.19],
    ],
    [
        [51.5, -0.05],
        [51.5, -0.06],
       
      ],
      [
        [51.505, -0.09],
        [51.52, -0.1],
        [51.53, -0.12],
      ]
  ]

  useEffect(() => {
    // Create a map centered at a specific location
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (you can use different tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Save the map instance to the useRef for access outside the useEffect
    mapRef.current = map;
  }, []);

  const addPolyline = () => {
    // Sample coordinates for the new polyline
    const newPolylineCoordinates = [
      [51.505, -0.09],
      [51.52, -0.1],
      [51.53, -0.12],
    ];
    const newData=demodata[index]
    console.log(newData)

    // Create a new polyline and add it to the map
    const newPolyline = L.polyline(newData, { color: 'blue' }).addTo(mapRef.current);
    index=index+1;
    // setIndex(newindex)
    
    // Optionally, you can bind a popup to the new polyline
    newPolyline.bindPopup('This is a new polyline!').openPopup();
    setTimeout(() => {
        newPolyline.remove(mapRef.current)
    }, 1000);
  };

  return (
    <div>
      <div id="map"  />
      <button onClick={addPolyline}>Add Polyline</button>
      {/* <button onClick={removePolyline}>Add Polyline</button> */}
    </div>
  );
};

export default Map;
