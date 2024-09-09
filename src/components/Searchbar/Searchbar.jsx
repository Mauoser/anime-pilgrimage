import React from 'react';
import './Searchbar.css';

// OPTIONAL: USE EFFECT VERSION
// function Searchbar({setKeyword}) {
function Searchbar({setLocations}) {

  function handleChange(event) {
    // OPTIONAL: USE EFFECT VERSION
    // setKeyword(event.currentTarget.value);

    const url = `https://anime-locations-api.onrender.com/api/v1/locations?title=${event.currentTarget.value}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setLocations(data);
      });
  }
  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input placeholder="Anime Name" type="text" className="form-control" onChange={handleChange} />
    </div>
  );
}

export default Searchbar;
