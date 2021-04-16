import React from 'react';
import topics from '../data/topics';

const Topics = ({selectedTopics, setSelectedTopics}) => {

    const updateSelectedTopics = (e) =>{
        console.log("Updating selected topic array: "); // debug

    };

    const TopicList = topics.map( (item, index) => {
        // console.log("Displaying buttons... Scanning for:", item[0]); // debug
        let buttonColor = "gray";
        const isInSelectedTopicsList = (selectedTopic) => selectedTopic===item[0];
        if(selectedTopics.findIndex(isInSelectedTopicsList) > -1){
            // console.log("Topic is already found among the selected topics!"); // debug
            buttonColor = "green";
        }
        console.log(buttonColor);
        return (
            <button 
                key={index} 
                className={`topic-item ui button ${buttonColor}`}
                onClick={updateSelectedTopics}
            >
                { item[0] }
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