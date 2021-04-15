import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({inputTerm}) => {
    const defaultSearchTerm = inputTerm;
    const [term,setTerm] = useState(defaultSearchTerm);

    const searchTwitter = (term) => {
        // tbd
        console.log(term);
    }

    return (
        <section className="search ui container">
            <h3>Search</h3>
            <div className="ui form">
                <div className="field">
                    <label>Custom topic:</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <button 
                        onClick={e => searchTwitter(term)}
                        className="ui button primary"
                >Search</button>
            </div>
        </section>
    );

};

export default Search;