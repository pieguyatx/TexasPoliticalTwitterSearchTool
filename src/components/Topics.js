import React from 'react';
import topics from '../data/topics';

const Topics = () => {

    const TopicList = topics.map( (item, index) => {
        return (
            <button key={index} className="topic-item ui button green">{ item[0] }</button>
        );
    });

    return (
        <div className="topics ui container">
            <h3>Topics</h3>
            <div className="ui grid">
                {TopicList}
            </div>
        </div>
    );
};

export default Topics;