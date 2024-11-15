import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
    return (
        <MapContainer center={[37.733666, -122.406144]} zoom={13} 
        style={{ height: "500px", width: "100%", border: "1px solid #ccc" }}
        
        scrollWheelZoom={false}>
            
       
            <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

            <Marker position={[37.733666, -122.406144]}>
                <Popup>Medical Center 1</Popup>
            </Marker>
            <Marker position={[37.724354, -122.417254]}>
                <Popup>Medical Center 2</Popup>
            </Marker>
        </MapContainer>
    );
}


export default MapComponent;