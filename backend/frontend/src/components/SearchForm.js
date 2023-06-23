import React, { useState } from 'react';
import './../componentCSS/SearchForm.css';

const SearchForm = ({ onSearch }) => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for the selected media type
  const [mediaType, setMediaType] = useState('all');

  const handleChangeSearchTerm = (e) => {
    // Update the search term state when the input value changes
    setSearchTerm(e.target.value);
  };

  const handleChangeMediaType = (e) => {
    // Update the media type state when the select value changes
    setMediaType(e.target.value);
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission behaviour
    e.preventDefault();
    // Call the onSearch function with the search term and media type as arguments
    onSearch(searchTerm, mediaType);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={handleChangeSearchTerm}
      />
      {/* Input element for entering the search term */}

      <select className="media-type-select" value={mediaType} onChange={handleChangeMediaType}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </select>
      {/* Select element for choosing the media type */}

      <button type="submit" className="search-button">Search</button>
      {/* Button to trigger the search */}
    </form>
  );
};

export default SearchForm;
