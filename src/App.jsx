import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [searchedGifs, setSearchedGifs] = useState([]);

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const API_KEY = 'l8YK2wETHwICj3pbDLiR7t8ZWuFeN2n2';
        const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;

        const response = await axios.get(URL);
        setTrendingGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching trending GIFs:', error);
      }
    };

    fetchTrendingGifs();
  }, []);

  const handleSearch = async () => {
    try {
      const API_KEY = 'l8YK2wETHwICj3pbDLiR7t8ZWuFeN2n2'; 
      const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=20`;
      const response = await axios.get(URL);
      setSearchedGifs(response.data.data);
      setTrendingGifs([]); 
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleClearSearch = () => {
    setSearchedGifs([]);
    setQuery('');
  
    const fetchTrendingGifs = async () => {
      try {
        const API_KEY = 'C777nEP9YLeRH7vvdsU5ng1tVxKTqN4R';
        const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;

        const response = await axios.get(URL);
        setTrendingGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching trending GIFs:', error);
      }
    };
    fetchTrendingGifs();
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Página de GIFs</h1>
      </div>

      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar GIFs"
        />
        <button onClick={handleSearch}>Buscar</button>
 
      </div>

      {searchedGifs.length > 0 && (
        <div className="searched-gifs">
           <button onClick={handleClearSearch}>Borrar GIFs buscados</button>
          <h2>Resultados de búsqueda para "{query}"</h2>
          <div className="gifs-container">
            {searchedGifs.map((gif) => (
              <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
          </div>
         
        </div>
      )}

      {searchedGifs.length === 0 && (
        <div className="trending-gifs">
          <h2>Tendencias</h2>
          <div className="gifs-container">
            {trendingGifs.map((gif) => (
              <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
