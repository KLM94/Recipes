import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "29fe1d81";
  const APP_KEY = "0bdd8431d4fe6b01408587cfabb62b06";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  // const getRecipes = fetch(
  //   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  // ).then((response) => {
  //   console.log(response.json());
  // });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
