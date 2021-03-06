import React, { Component } from 'react';
import * as coords from '../util/coords';
import Loc from './LocationGeneric';

class LocationThreeWords extends Loc {

    constructor (props) {
        super(props);
    }

    setConvertedText = async() => {
        if (this.state.location) {
            let words = await coords.latLonToThreeWords(this.state.location.coords.latitude, this.state.location.coords.longitude);
            this.setState({convertedText: words});
        } else {
            this.setState({convertedText: 'Location not found/set.'});
        }
    };
};

export default LocationThreeWords;