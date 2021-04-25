import React from 'react';
import twitterphp from '../apis/twitterphp';
import './Search.css';

const Search = ({selectedTopic,selectedLocation,setSearchResults}) => {
    const defaultSearchTermDisplayed = selectedTopic.join(', ');
    const defaultSearchTerm = '"' + selectedTopic.join('" OR "') + '"'; // for twitter API?

    const searchTwitter = async (term) => {
        console.log(`Searching for "${term}" in location: ${selectedLocation}`); // debug
        term = term + " -filter:retweets";
        const response = await twitterphp.get('',{
            params: { // to be detailed more later
                q: term,
                geocode: selectedLocation[1] 
            }
        });
        // console.log("Response: ",response); // debug
        if(typeof response.data.statuses == "undefined"){
            setSearchResults = ('Error bringing data into main page.');
        } else {
            setSearchResults(response.data.statuses);
        }
    }

    return (
        <section className="search ui container">
            <h3>Search</h3>
            <div className="ui form">
                <div className="field">
                    <label>Search terms:</label>
                    <input 
                        className="input"
                        value={defaultSearchTermDisplayed}
                        // onChange={e => setTerm(e.target.value)}
                        readonly
                    />
                </div>
                <button 
                    onClick={e => searchTwitter(defaultSearchTerm)}
                    className="ui button primary"
                >Search</button>
            </div>
        </section>
    );

};

export default Search;