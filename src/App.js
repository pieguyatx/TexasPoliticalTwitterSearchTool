import React from 'react';
import Search from './components/Search';

export default () => {
    return (
        <div className="main ui container">
            <h1>Texas Political Twitter Search Tool</h1>
            <p>by Pius Wong</p>
            <Search />
        </div>
    );
}