import React from "react";

import "./App.css";

const App = () => {
  const APP_ID = "29fe1d81";
  const APP_KEY = "0bdd8431d4fe6b01408587cfabb62b06";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button type="Submit">Search!</button>
      </form>
    </div>
  );
};

export default App;
