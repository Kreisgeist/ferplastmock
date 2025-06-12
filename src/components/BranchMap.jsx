import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginTop: '20px',
};

const center = {
  lat: 23.634501,
  lng: -102.552784,
};

const locations = [
  {
    name: 'Sucursal Texcoco',
    position: { lat: 19.5119, lng: -98.8828 },
  },
  {
    name: 'Sucursal Monterrey',
    position: { lat: 25.6866, lng: -100.3161 },
  },
  {
    name: 'Sucursal Guadalajara',
    position: { lat: 20.6597, lng: -103.3496 },
  },
  {
    name: 'Sucursal Merida',
    position: { lat: 20.9674, lng: -89.5926 },
  },
];

const BranchMap = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} label={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default BranchMap;
