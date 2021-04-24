import React from 'react';

const Tweets = ({searchResults}) => {
    console.log("searchResults: ", searchResults); // debug
    // console.log(searchResults.length);  // debug

    function dateParsed(dateString, yearOnly){
        var date = dateString.replace("+0000 ", ""); 
        if(yearOnly){
            date = date.slice(-4);
        }
        return date;
    };

    let searchDisplay = '';
    if(typeof searchResults == 'undefined'){
        searchDisplay = 'Error searching for tweets.';
    }
    else if(searchResults.length>0){
        searchDisplay = searchResults.map( (result) => {

            let warningFollowers = '';
            if(result.user.followers_count<50){
                warningFollowers = 'warning';
            } 
            let warningUserCreated = '';
            let thisYear = new Date().getFullYear;
            if(dateParsed(result.user.created_at,1)==thisYear){
                warningUserCreated = 'warning';
            }
            let warningLocation = '';
            if(result.user.location.toLowerCase().includes('australia') || result.user.location.toLowerCase().includes('scotland')){
                warningLocation = 'warning';
            }
            let warning = '';
            if(warningFollowers || warningUserCreated || warningLocation){
                warning = 'warning';
            }

            let mediaItems = '';
            if(result.entities.hasOwnProperty("media") && result.entities.media.length>0){
                mediaItems = result.entities.media.map( (image) => {
                    return (
                        <div className="media-item">
                            <img className="ui medium right floated image" src={image.media_url_https} />
                        </div>
                    );
                } );
            }
            
            return(
                <div
                    key={result.id}
                    className="search-result tweet"
                >
                    <blockquote class={`twitter-tweet ${warning}`}>
                        <div className="media ui image right floated">
                            {mediaItems}
                        </div>
                        <p>
                            <div className="text">
                                <a href={`https://twitter.com/q/status/${result.id}`} target="_blank">{result.full_text}</a>
                            </div>
                        </p>
                        &mdash; {result.favorite_count} likes, {result.retweet_count} retweets, <span className="user-screenname"><a target="_blank" href={`https://twitter.com/${result.user.screen_name}`}>{result.user.screen_name}</a></span>, "<span className="user-name">{result.user.name}"
                        </span>
                        <div className="date">
                            {dateParsed(result.created_at)}
                        </div>
                    </blockquote>
                    <h5>More user info:</h5>
                    <table className="user-info ui very basic collapsing celled table">
                        <thead>
                            <tr>
                                <th className="info-title">Avatar</th>
                                <th>Location</th>
                                <th>Profile Since</th>
                                <th>Followers</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="user-profileimage info-data">
                                    <img src={result.user.profile_image_url} />
                                </td>
                                <td className={`user-location info-data ${warningLocation}`}>
                                    {result.user.location}
                                </td>
                                <td className={`user-createdat info-data ${warningUserCreated}`}>
                                    {dateParsed(result.user.created_at,1)}
                                </td>
                                <td className={`user-followerscount info-data ${warningFollowers}`}>
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
    else {
        searchDisplay = "No results found";
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