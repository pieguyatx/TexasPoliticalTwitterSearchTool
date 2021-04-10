import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ({inputTerm}) => {
    const defaultSearchTerm = inputTerm;
    const [term,setTerm] = useState(defaultSearchTerm);

    const searchTwitter = (term) => {
        // tbd
        console.log(term);
    }

    return (
        <div className="search ui container">
            <div className="ui form">
                <div className="field">
                    <label>Search custom topic:</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                    <button 
                        onClick={e => searchTwitter(term)}
                        className="ui button"
                    >Search</button>
                </div>
            </div>
        </div>
    );

};

export default Search;