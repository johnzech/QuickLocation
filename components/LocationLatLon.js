import React, { Component } from 'react';
import * as coords from '../util/coords';
import Loc from './LocationGeneric';

class LocationLatLon extends Loc {

    constructor (props) {
        super(props);
    }

    setConvertedText = async() => {
        let text = 'Location not found/set.';
        if (this.state.location){
            let long = JSON.stringify(this.state.location.coords.longitude);
            let lat = JSON.stringify(this.state.location.coords.latitude);
            text = '('+long+', '+lat+')';
        }
        this.setState({convertedText: text});
    };
};

export default LocationLatLon;