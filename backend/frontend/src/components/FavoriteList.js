import React, { useState } from 'react';
import './../componentCSS/FavoriteList.css';

const FavoriteList = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className="favorite-list">
      <h2>My Favourites</h2>
      {favorites.length === 0 ? ( // Conditional rendering based on the length of the favorites array
        <p className="fav-p">No items added yet.</p> // Display a message if there are no favorite items
      ) : (
        <ul className="favorite-item">
          {favorites.map((item) => ( // Iterate over the favourites array and create a list item for each favorite item
            // Set a unique key for each list item
            <li key={item.trackId}>
              <img src={item.artworkUrl100} alt={item.trackName} /> {/* Display the artwork image */}
              <div>
                <h3>{item.trackName}</h3> {/* Display the track name */}
                <p>{item.artistName}</p> {/* Display the artist name */}
              </div>
              <button onClick={() => onRemoveFavorite(item)}>Remove</button> {/* Button to remove the favourite item */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
