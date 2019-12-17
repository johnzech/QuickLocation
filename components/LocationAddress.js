import React, { Component } from 'react';
import * as coords from '../util/coords';
import Loc from './LocationGeneric';

class LocationAddress extends Loc {

    constructor (props) {
        super(props);
    }

    setConvertedText = async() => {
        //let text = 'Location not found/set';
        if (this.state.location){
            console.log("getting address");
            //let address = await 
            coords.latlonToAddress(this.state.location.coords.latitude, this.state.location.coords.longitude)
                .then((address) => {
                    this.setState({convertedText: address});
                },
                (err) => {
                    console.log(err);
                    this.setState({convertedText: 'Error fetching address'});
                }
                );
        }
    }
};

export default LocationAddress;