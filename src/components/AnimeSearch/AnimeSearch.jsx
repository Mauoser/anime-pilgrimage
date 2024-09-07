import React, { useState, useEffect } from 'react';
import './AnimeSearch.css';

function AnimeSearch() {
  const [searchQuery, setSearchQuery] = useState(''); // To store user input
  const [animeResults, setAnimeResults] = useState([]); // To store the fetched anime list
  const [selectedAnime, setSelectedAnime] = useState(null); // To store selected anime details

  useEffect(() => {
    if (searchQuery) {
      const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data && data.data && data.data.length > 0) {
            const topThreeResults = data.data.slice(0, 3); // Get the top 3 results
            setAnimeResults(topThreeResults);
            setSelectedAnime(null); // Clear any previously selected anime
          } else {
            setAnimeResults([]);
          }
        })
        .catch(error => console.error('Error fetching the API:', error));
    }
  }, [searchQuery]); // Trigger useEffect when searchQuery changes

  // Function to handle when a user clicks on an anime
  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime); // Set the clicked anime as the selected one
  };

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input
        placeholder="Search for an anime"
        type="text"
        className="form-control"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      />

      {/* Show top 3 anime results */}
      {animeResults.length > 0 && !selectedAnime && (
        <div className="list-group">
            {animeResults.map(anime => (
  <a className="list-group-item list-group-item-action" key={anime.mal_id} onClick={() => handleAnimeClick(anime)}>{anime.title_english || anime.title} {/* Display English title if available */}</a>
            ))}
        </div>
      )}

      {/* Show details of selected anime */}
      {selectedAnime && (
        <div className="mb-3">
        <div className='card'>
          <p><strong>Anime:</strong> {selectedAnime.title_english || selectedAnime.title}</p>
          {/* <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} /> */}
        </div>
        </div>
      )}
    </div>
  );
}

export default AnimeSearch;
