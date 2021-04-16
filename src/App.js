import React, {useState,useEffect} from 'react';
import Search from './components/Search';
import Topics from './components/Topics';
import Locations from './components/Locations';
import Tweets from './components/Tweets';
import './App.css';

const App = () => {
    const defaultTopic = ['voting','vote']; // array of starting topic
    const [selectedTopic,setSelectedTopic] = useState(defaultTopic);

    useEffect(() => {
        console.log('"Topic" list and associated search terms updating...'); // debug
    },[selectedTopic]);

    return (
        <div className="main ui container">
            <h1>Texas Political Twitter Search Tool</h1>
            <p>by Pius Wong</p>
            <Topics 
                selectedTopic={selectedTopic} 
                setSelectedTopic={setSelectedTopic} 
            />
            <Locations />
            <Search 
                selectedTopic={selectedTopic}
            />
            <Tweets />
        </div>
    );
}

export default App;