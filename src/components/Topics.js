import React from 'react';
import topics from '../data/topics';

const Topics = ({selectedTopics, setSelectedTopics}) => {

    const updateSelectedTopics = (topicText) =>{
        console.log("Updating selected topic array: ", topicText); // debug        
        const isInSelectedTopicsList = (oldSelectedTopic) => oldSelectedTopic===topicText;
        let indexOfFoundTopic = selectedTopics.findIndex(isInSelectedTopicsList);
        if( indexOfFoundTopic > -1){
            selectedTopics.splice(indexOfFoundTopic,1);
            console.log(selectedTopics);
            setSelectedTopics([...selectedTopics]); // react requires destructuring of state array to detect changes
        } else {
            setSelectedTopics([...selectedTopics, topicText]);
            console.log([...selectedTopics, topicText]);

        }
    };

    const TopicList = topics.map( (topic, index) => {
        console.log("Displaying buttons... Scanning for:", topic[0]); // debug
        let buttonColor = "gray";
        const isInSelectedTopicsList = (oldSelectedTopic) => oldSelectedTopic===topic[0];
        if(selectedTopics.findIndex(isInSelectedTopicsList) > -1){
            // console.log("Topic is already found among the selected topics!"); // debug
            buttonColor = "green";
        }
        return (
            <button 
                key={index} 
                className={`topic-item ui button ${buttonColor}`}
                onClick={() => updateSelectedTopics(topic[0])}  // need arrow function to pass string argument
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