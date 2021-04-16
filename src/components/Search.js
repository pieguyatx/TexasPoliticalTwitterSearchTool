import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({selectedTopic}) => {
    const defaultSearchTermDisplayed = selectedTopic.join(', ');
    const defaultSearchTerm = '"' + selectedTopic.join('" OR "') + '"'; // for twitter API?
    console.log(defaultSearchTerm); // debug

    const searchTwitter = (term) => {
        // tbd
        console.log(term); // debug
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
                    />
                    <button 
                            onClick={e => searchTwitter(e.target.value)}
                            className="ui button primary"
                    >Search</button>
                </div>

            </div>
        </section>
    );

};

export default Search;