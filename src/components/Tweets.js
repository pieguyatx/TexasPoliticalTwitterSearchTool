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
                                {result.full_text}
                            </div>
                        </p>
                        &mdash; <span className="user-screenname">{result.user.screen_name}</span>, {result.favorite_count} likes, {result.retweet_count} retweets
                    </blockquote>
                    <div className="date">
                        Created: {result.created_at}
                    </div>
                    <div className="url">
                        <a href={`https://twitter.com/q/status/${result.id}`} target="_blank">Direct link</a>
                    </div>
                    <div className="user-info">
                        <div className="user-profileimage">
                            <img src={result.user.profile_image_url} />
                        </div>
                        <div className="user-screenname">
                            Handle: {result.user.screen_name}
                        </div>
                        <div className="user-name">
                            Entered name: {result.user.name}
                        </div>
                        <div className="user-followerscount">
                            Followers count: {result.user.followers_count}
                        </div>
                        <div className="user-createdat">
                            Profile created on: {result.user.created_at}
                        </div>
                        <div className="user-location">
                            Location: {result.user.location}
                        </div>
                        <div className="user-description">
                            Description: {result.user.description}
                        </div>
                    </div>
                    <hr />
                </div>
            );
        });
    }

    return (
        <section className="topics ui container">
            <h3>Search Results</h3>
            <div className="ui">
                <div>
                    {searchDisplay}
                </div>
            </div>
        </section>
    );
};

export default Tweets;