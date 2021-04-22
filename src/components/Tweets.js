import React from 'react';

const Tweets = ({searchResults}) => {
    console.log("searchResults: ", searchResults); // debug
    // console.log(searchResults.length);  // debug
    let searchDisplay = '';
    if(searchResults.length>0){
        searchDisplay = searchResults.map( (result) => {
            return(
                <div
                    key={result.id}
                    className="search-result tweet"
                >
                    <blockquote class="twitter-tweet">
                        <p>
                            <div className="text">
                                <a href={`https://twitter.com/q/status/${result.id}`} target="_blank">{result.full_text}</a>
                            </div>
                        </p>
                        &mdash; {result.favorite_count} likes, {result.retweet_count} retweets, <span className="user-screenname"><a target="_blank" href={`https://twitter.com/${result.user.screen_name}`}>{result.user.screen_name}</a></span>, "<span className="user-name">{result.user.name}"
                        </span>
                        <div className="date">
                            {result.created_at}
                        </div>
                    </blockquote>
                    <h5>More user info:</h5>
                    <div className="user-info">
                        <div className="user-profileimage">
                            <div className="info-title">Avatar:</div>
                            <div className="info-data"><img src={result.user.profile_image_url} /></div>
                        </div>
                        <div className="user-createdat">
                            <div className="info-title">Profile created on:</div> 
                            <div className="info-data">{result.user.created_at}</div>
                        </div>
                        <div className="user-location">
                            <div className="info-title">Location:</div>  
                            <div className="info-data">{result.user.location}</div> 
                        </div>
                        <div className="user-description">
                            <div className="info-title"> Description:</div>  
                            <div className="info-data">{result.user.description}</div> 
                        </div>
                        <div className="user-followerscount">
                            <div className="info-title">Followers count:</div>  
                            <div className="info-data">{result.user.followers_count}</div> 
                        </div>
                    </div>
                    <hr />
                </div>
            );
        });
    }

    return (
        <section className="results ui container">
            <h3>Search Results</h3>
            <hr />
            <div className="ui">
                <div>
                    {searchDisplay}
                </div>
            </div>
        </section>
    );
};

export default Tweets;