import React, { Component } from 'react';
import * as coords from '../util/coords';
import Loc from './LocationGeneric';

class LocationAddress extends Loc {

    constructor (props) {
        super(props);
    }

    setConvertedText = async() => {
        if (this.state.location){
            coords.latlonToAddress(this.state.location.coords.latitude, this.state.location.coords.longitude)
                .then((address) => {
                    this.setState({convertedText: address});
                },
                (err) => {
                    this.setState({convertedText: 'Error fetching address'});
                }
                );
        }
    }
};

export default LocationAddress;