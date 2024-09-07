import React from 'react';
import Location from '../Location/Location';
import "./LocationList.css";

function LocationList({locations}) {
  return (
    <div className="location-list">
      { locations.map( location => <Location location={location} key={location.title}/>)}
    </div>
  );
}

export default LocationList;
