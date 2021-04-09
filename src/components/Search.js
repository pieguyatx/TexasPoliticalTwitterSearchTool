import React, {useState, useEffect} from 'react';

const Search = () => {
    const defaultSearchTerm = 'vote';
    const [term,setTerm] = useState(defaultSearchTerm);

    const searchTwitter = (term) => {
        // tbd
        console.log(term);
    }

    return (
        <div className="search">
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
                    >Search</button>
                </div>
            </div>
        </div>
    );

};

export default Search;