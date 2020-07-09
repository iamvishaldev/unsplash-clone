import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=3f6vanyheIPeq582MKRoICg6DirOYQpHGb0me7A2eR4&query=${value}&orientation=landscape&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setResults(data.results);
      });
  };
  return (
    <div className="App">
      <div className="mydiv">
        <span className="search">Search</span>
        <input
          type="text"
          className="myinput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" onClick={() => fetchImage()}>
          Send
        </button>
      </div>

      <div className="imageGallery">
        {results.map((item) => {
          return <img className="item" key={item.id} src={item.urls.regular} />;
        })}
      </div>
    </div>
  );
}

export default App;
