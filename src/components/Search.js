import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({selectedTopic,selectedLocation}) => {
    const defaultSearchTermDisplayed = selectedTopic.join(', ');
    const defaultSearchTerm = '"' + selectedTopic.join('" OR "') + '"'; // for twitter API?

    const searchTwitter = (term) => {
        // tbd
        console.log(`Searching for "${term}" in location: ${selectedLocation}`); // debug
    }

    return (
        <section className="search ui container">
            <h3>Search</h3>
            <div className="ui form">
                <div className="field">
                    <label>Custom topic:</label>
                    <input 
                        className="input"
                        value={defaultSearchTermDisplayed}
                        // onChange={e => setTerm(e.target.value)}
                        readonly
                    />
                </div>
                <button 
                    onClick={e => searchTwitter(defaultSearchTermDisplayed)}
                    className="ui button primary"
                >Search</button>
            </div>
        </section>
    );

};

export default Search;