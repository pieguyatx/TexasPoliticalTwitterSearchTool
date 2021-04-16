import React, {useState,useEffect} from 'react';
import Search from './components/Search';
import Topics from './components/Topics';
import Locations from './components/Locations';
import Tweets from './components/Tweets';
import './App.css';

const App = () => {
    const defaultTopic = ['voting','civil rights']; // array of starting topic
    const [selectedTopics,setSelectedTopics] = useState(defaultTopic);

    useEffect(() => {
        console.log('"Topics" list updating...'); // debug
    },[selectedTopics.length]);

    return (
        <div className="main ui container">
            <h1>Texas Political Twitter Search Tool</h1>
            <p>by Pius Wong</p>
            <Topics selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
            <Locations />
            <Search inputTerm="vote"/>
            <Tweets />
        </div>
    );
}

export default App;