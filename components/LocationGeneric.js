import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

class Loc extends Component {
    constructor (props) {
        super(props);
        this.state = {location: null, errorMessage: null, convertedText: null};
    }

    getButtonText = () => {
        return (
            this.props.buttonText !== undefined
              ? this.props.buttonText
              : "Where Am I?"
          )
    }

    getLocationAsync = async () => {
        // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION 
        this.setState({ errorMessage: null });
        const { granted, canAskAgain } = await Permissions.getAsync(Permissions.LOCATION);
        let ask_obj = {};
        if (granted === false && canAskAgain) {
            ask_obj = await Permissions.askAsync(Permissions.LOCATION);
        }

        let granted2 = ask_obj['granted'];

        if (granted || granted2) {
            let location = await Location.getCurrentPositionAsync( {enableHighAccuracy: true});
            this.setState({location});

            await this.setConvertedText();

        } else {
            this.setState({
                errorMessage: 'Permission to access location denied'
            });
        }
      };

    setConvertedText = async() => {
        this.setState({convertedText: 'Not implemented'});
    };

    render() {
        let text = '';
        let address = '';
        let buttonText = this.getButtonText();
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        }else if (this.state.location) {
            text = this.state.convertedText;
        }
        return (
            <View>
                <Text style={{paddingBottom:10, fontSize:22, alignSelf:'center'}}>{text}</Text>
                <Button 
                    title={buttonText}
                    onPress={this.getLocationAsync}
                />
            </View>
        );
    }

}

export default Loc;