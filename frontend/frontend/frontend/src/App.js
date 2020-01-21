import React from "react";
import "./App.css";

import ArticleList from "./components/ArticleList.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A React Django App</h1>
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
