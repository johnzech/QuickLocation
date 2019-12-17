import React from 'react';
import { Text } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hello! Thanks for downloading this simple app. If you ever need to get your lat/lon real quick, just open the app and click the Latitude/Longitude button. Or, find your current address. Or, your three words location!</Text>
    </ScrollView>
  );
}

InfoScreen.navigationOptions = {
  title: 'Info',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
});
