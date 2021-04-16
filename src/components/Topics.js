import React from 'react';
import topics from '../data/topics';

const Topics = ({selectedTopic, setSelectedTopic}) => {

    const updateSelectedTopics = (topic) =>{
        // console.log("Updating selected topic array: ", topic[0]); // debug        
        // new topic is NOT found in the old list...
        setSelectedTopic(topic);
    };

    const TopicList = topics.map( (topic, index) => {
        // console.log("Displaying buttons... Scanning for:", topic[0]); // debug
        let buttonColor = "gray";
        if(selectedTopic[0]===topic[0]){
            // console.log("Topic is already found among the selected topics!"); // debug
            buttonColor = "green";
        }
        return (
            <button 
                key={index} 
                className={`topic-item ui button ${buttonColor}`}
                onClick={() => updateSelectedTopics(topic)}  // need arrow function to pass string argument
            >
                { topic[0] }
            </button>
        );
    });

    return (
        <section className="topics ui container">
            <h3>Topics</h3>
            <div className="ui">
                {TopicList}
            </div>
        </section>
    );
};

export default Topics;