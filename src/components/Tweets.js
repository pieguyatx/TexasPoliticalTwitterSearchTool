import React from 'react';

const Tweets = ({searchResults}) => {
    console.log("searchResults: ", searchResults); // debug
    console.log(searchResults.length); 

    return (
        <section className="topics ui container">
            <h3>Search Results</h3>
            <div className="ui">
            TBD. Example embed tweet:
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">
                        <a href="https://twitter.com/WilliamShatner?ref_src=twsrc%5Etfw">@WilliamShatner</a> Good day, Captain. <a href="https://twitter.com/hashtag/ISS?src=hash&amp;ref_src=twsrc%5Etfw">#ISS</a> is in standard orbit and Commander Swanson has the conn. Hope you’re having a great weekend!
                    </p>
                    &mdash; NASA (@NASA) 
                    <a href="https://twitter.com/NASA/status/495719809695621121?ref_src=twsrc%5Etfw">August 2, 2014</a>
                </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <div>
                    <pre>
                        {(searchResults.length>0) ? searchResults[0].text : '' }
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Tweets;