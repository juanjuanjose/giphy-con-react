import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    const API_KEY = 'pWyTBl9Twn7NM2jANxpEf2RO08KZwWnA';  
    const URL = `"https://api.giphy.com/v1/gifs/search"`;

    try {
      const response = await axios.get(URL);
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching data from Giphy API:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Giphy Search</h1>
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar GIFs"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="gifs-container">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
