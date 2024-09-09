import React from 'react';
import "./Location.css";

function Location({location}) {
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.title} ${location.address}`;
  return (

<div className="location-card">
<img src={location.picture} alt={location.title} />

      <div>
        <div>
          <h5>{location.title}</h5>
          <p>
            { location.criteria .map( crit => <span key={crit}>{crit}</span>)}
          </p>
        </div>
        <a target="_blank" href={gmapsUrl}>Show the Map 📍</a>
      </div>
    </div>
  );
}

export default Location;
