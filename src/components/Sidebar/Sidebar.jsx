import React from 'react';
import "./Sidebar.css";
import AnimeSearch from '../AnimeSearch/AnimeSearch';
import logo from '../../assets/logo_bg.gif';

function Sidebar() {

  const criteria = ["Weathering with You", "Your Name",];

  const prefectures = [
    "Tokyo",
    "Hokkaido",
    "Aomori",
    "Iwate",
    "Miyagi",
    "Akita",
    "Yamagata",
    "Fukushima",
    "Ibaraki",
    "Tochigi",
    "Gunma",
    "Saitama",
    "Chiba",
    "Kanagawa",
    "Niigata",
    "Toyama",
    "Ishikawa",
    "Fukui",
    "Yamanashi",
    "Nagano",
    "Gifu",
    "Shizuoka",
    "Aichi",
    "Mie",
    "Shiga",
    "Kyoto",
    "Osaka",
    "Hyogo",
    "Nara",
    "Wakayama",
    "Tottori",
    "Shimane",
    "Okayama",
    "Hiroshima",
    "Yamaguchi",
    "Tokushima",
    "Kagawa",
    "Ehime",
    "Kochi",
    "Fukuoka",
    "Saga",
    "Nagasaki",
    "Kumamoto",
    "Oita",
    "Miyazaki",
    "Kagoshima",
    "Okinawa"
  ];

  return (
    <div className="sidebar">
      <div>
        <h3>Share your Anime spot</h3>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="location-title"><i className="fa-solid fa-torii-gate form-icons"></i></span>
            <input name="location[title]" placeholder="Shibuya Scramble Crossing" type="text" className="form-control" aria-describedby="location-title" />
            </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="location-address"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="location[address]" placeholder="2 Chome-1 Dogenzaka, Shibuya City, Tokyo 150-0043" aria-describedby="location-address" type="address" className="form-control" />
          </div>

          <div className="input-group mb-3">
          <select className="form-select" aria-label="Default select example">


  { prefectures.map((prefecture) => {
              return (
                <React.Fragment key={prefecture}>
                  <option value={prefecture}>{prefecture}</option>
                </React.Fragment>
              );
            }) }
</select>
</div>

<div className="mb-3">
<AnimeSearch />
</div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="location-picture"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="location[picture]" type="text" className="form-control" aria-describedby="location-picture" placeholder='http://example.com/image.jpg'/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-info">Submit</button>
          </div>
        </form>
      </div>
      <img src={logo} alt="anime pilgrimage logo" />
    </div>
  );
}

export default Sidebar;
