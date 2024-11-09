import React from 'react'
import { SearchResult } from './SearchResult';

import "./SearchResultList.css";

export const SearchResultsList = ({ results }) => {
  return (
  <div className='result-list'>
    {results.map((result, id) => {
        return <SearchResult result={result} key={id}/>;
      })}
  </div>
  );
};
