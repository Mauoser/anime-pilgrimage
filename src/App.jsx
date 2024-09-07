import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import LocationList from "./components/LocationList/LocationList";

function App() {
  const [locations, setLocations] = React.useState([]);
  // OPTIONAL: USE EFFECT VERSION
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://anime-locations-api.onrender.com/api/v1/locations";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, [keyword]);

  return (
    <div className="app-frame">
      {/* OPTIONAL USE EFFECT VERSION  */}
      {/* <Navbar setKeyword={setKeyword}/> */}
      <Navbar setLocations={setLocations} />
      <div className="app-body">
        <Sidebar setLocations={setLocations} />
        <LocationList locations={locations} />
      </div>
    </div>
  );
}

export default App;
