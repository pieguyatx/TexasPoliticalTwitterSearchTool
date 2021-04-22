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
                    <table className="user-info ui very basic collapsing celled table">
                        <thead>
                            <tr>
                                <th className="info-title">Avatar</th>
                                <th>Location</th>
                                <th>Profile Created on</th>
                                <th>Followers:</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="user-profileimage info-data">
                                    <img src={result.user.profile_image_url} />
                                </td>
                                <td className="user-location info-data">
                                  {result.user.location}
                                </td>
                                <td className="user-createdat info-data">
                                    {result.user.created_at}
                                </td>
                                <td className="user-followerscount info-data">
                                    {result.user.followers_count}
                                </td>
                                <td className="user-description info-data">
                                    {result.user.description}
                                </td>
                            </tr>
                        </tbody>
                    </table>
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