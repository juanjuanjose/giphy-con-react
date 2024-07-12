import React from "react";

const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-item">
          {gif.media_formats &&
          gif.media_formats.gif &&
          gif.media_formats.gif.url ? (
            <img src={gif.media_formats.gif.url} alt={gif.title} />
          ) : (
            <p>GIF not available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default GifList;
