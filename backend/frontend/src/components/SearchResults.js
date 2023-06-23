import React from 'react';
import './../componentCSS/SearchResults.css';

const SearchResults = ({ results, onAddFavorite }) => {
  if (!results || results.length === 0) {
    // Display a message when there are no search results
    return <p className="search-p">Please enter a title to search</p>;
  }

  const handleAddFavorite = (item) => {
    // Callback function for adding an item to favourites
    onAddFavorite(item);
  };

  // Container for search results
  return (
    <div className="search-results">
      {results.map((item) => (
        <div key={item.trackId} className="search-result">
          <img src={item.artworkUrl100} alt={item.trackName} />
          <h3>{item.trackName}</h3>
          <p>{item.artistName}</p>
          <button onClick={() => handleAddFavorite(item)}>Add to Favourites</button> {/* Button to add an item to favorites*/}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
