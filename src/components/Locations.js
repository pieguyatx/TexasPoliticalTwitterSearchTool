import React from 'react';

const Locations = () => {

    return (
        <section className="locations ui container">
            <h3>Locations</h3>
            <div className="ui vertical menu">
                <a className="item active">Austin</a>
                <a className="item">Houston</a>
                <a className="item">RGV</a>
            </div>
        </section>
    );
};

export default Locations;