import React, {useState} from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
// import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
// import DefaultTile from '../TileLayers/DefaultTile'
import "./MapComponent.css";

const bounds = [
  [51.0156176,-69.393794],
  [27.213765,-131.539653]
]

// function ChangeView({ center, zoom }) {
//   const map = useMap();
//   map.setView(center, zoom);
//   return null;
// }
function AddMarkerToClick() {

  const [markers, setMarkers] = useState([]);

  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng
      setMarkers([...markers, newMarker]);
    },
  })

  return (
    <>
      {markers.map((marker,index) => 
        console.log(marker)
        /* <Marker key={index} position={marker}>
          <Popup>Marker is at {marker}</Popup>
        </Marker> */
      
      )}
    </>
  )
}

 function MapComponent() {

  return (
    <MapContainer 
      bounds={bounds} 
      // style={{height:"80vh"}}
      zoom={10}
      maxZoom={15}
      center={[41.14269416, -108.721814]}
      className="map-styles"
      zoomControl={false}
      >
      
      <TileLayer 
        zoom={5}
        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
        maxZoom={15}
        subdomains={['mt0','mt1','mt2','mt3']}>

        </TileLayer>
        <AddMarkerToClick></AddMarkerToClick>
    </MapContainer>
  );
}
export default MapComponent