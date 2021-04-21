import React, {useState,useEffect} from 'react';
import Search from './components/Search';
import Topics from './components/Topics';
import Locations from './components/Locations';
import Tweets from './components/Tweets';
import './App.css';

const App = () => {
    const defaultTopic = ['']; // array of starting topic
    const [selectedTopic,setSelectedTopic] = useState(defaultTopic);
    const [selectedLocation,setSelectedLocation] = useState('Austin');
    const [searchResults,setSearchResults] = useState([]);

    useEffect(() => {
        console.log('Rerendering!'); // debug
    },[selectedTopic]);

    return (
        <div className="main ui container">
            <h1>Texas Political Twitter Search Tool</h1>
            <p>by Pius Wong</p>
            <Topics 
                selectedTopic={selectedTopic} 
                setSelectedTopic={setSelectedTopic} 
            />
            <Locations 
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
            />
            <Search 
                selectedTopic={selectedTopic}
                selectedLocation={selectedLocation}
                setSearchResults={setSearchResults}
            />
            <Tweets 
                searchResults={searchResults}
            />
        </div>
    );
}

export default App;