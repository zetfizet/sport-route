import React, { useState } from 'react';
import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
    fetch("./convertcsv.json")  // Mengambil file dari public folder
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    (user.location && user.location.toLowerCase().includes(value.toLowerCase()))
                );
            });
            setResults(results);
        });
    };


    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="Search-icon" />
            <input
                placeholder="Enter Location"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
