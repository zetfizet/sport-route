import { useState } from "react";
import './App.css';

import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from "./components/SearchResultsList";

function App() {  
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <h1>Sport Route</h1>
      <p className="description">This website allows users to search for nearby sports venues, including highly recommended options.
It covers a variety of locations, such as futsal fields, basketball courts, and badminton courts,
making it easier to find the best place to play your favorite sport.</p>
    
      <div className='searh-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default App;
