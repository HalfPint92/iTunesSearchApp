import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import FavoriteList from './components/FavoriteList';
import SearchResults from './components/SearchResults';
import './App.css';

const App = () => {
  // State for search results
  const [searchResults, setSearchResults] = useState([]);
  // State for favorite items
  const [favorites, setFavorites] = useState([]);

  // Perform the API request here using the search term and media type
  // Update the search results state with the fetched data
  const handleSearch = (searchTerm, mediaType) => {


    fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=${mediaType}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((error) => console.error(error));
  };

  const handleAddFavorite = (item) => {
    // Add the item to the favourites state
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const handleRemoveFavorite = (item) => {
    // Remove the item from the favourites state
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.trackId !== item.trackId));
  };

  return (
    <div>
      <h1>iTunes and Apple Media Search</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="search-container">
        <div className="search">
          {/* Render the search results component */}
          <SearchResults results={searchResults} onAddFavorite={handleAddFavorite} />
        </div>
        <div className="favorite-list">
          {/* Render the favorite items component */}
          <FavoriteList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
        </div>
      </div>
    </div>
  );
};

export default App;
