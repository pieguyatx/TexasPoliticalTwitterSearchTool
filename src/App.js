import React from 'react';
import Search from './components/Search';
import Topics from './components/Topics';
import Locations from './components/Locations';
import Tweets from './components/Tweets';

export default () => {
    return (
        <div className="main ui container">
            <h1>Texas Political Twitter Search Tool</h1>
            <p>by Pius Wong</p>
            <Topics />
            <Locations />
            <Search inputTerm="vote"/>
            <Tweets />
        </div>
    );
}