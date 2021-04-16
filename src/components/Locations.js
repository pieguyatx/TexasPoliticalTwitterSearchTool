import React from 'react';
import locations from '../data/locations';

const Locations = ({selectedLocation, setSelectedLocation}) => {

    const updateSelectedLocations = (location) =>{   
        setSelectedLocation(location);
    };

    const LocationList = locations.map( (location, index) => {
        let buttonColor = "gray";
        if(selectedLocation===location){
            buttonColor = "orange";
        }
        return (
            <button 
                key={index} 
                className={`location-item ui button ${buttonColor}`}
                onClick={() => updateSelectedLocations(location)}  // need arrow function to pass string argument
            >
                { location }
            </button>
        );
    });

    return (
        <section className="locations ui container">
            <h3>Locations</h3>
            <div className="ui">
                {LocationList}
            </div>
        </section>
    );
};

export default Locations;