import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Text, Block } from 'galio-framework';

import LocationThreeWords from '../components/LocationThreeWords';
import LocationLatLon from '../components/LocationLatLon';
import LocationAddress from '../components/LocationAddress';

export default function HomeScreen() {
  return (
    <Block style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Block style={styles.devModeContainer}>
          <DevelopmentModeNotice />
        </Block>
        <Block style={styles.iconContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/earth.gif')
                : require('../assets/images/earth.png')
            }
            style={styles.icon}
          />
        </Block>
        <Block><Text style={styles.header}>WHERE AM I?</Text></Block>
        <Block style={styles.locationBlockContainer}><LocationLatLon buttonText='Latitude/Longitude'/></Block>
        <Block style={styles.locationBlockContainer}><LocationAddress buttonText='Address'/></Block>
        <Block style={styles.locationBlockContainer}><LocationThreeWords buttonText='3 words'/></Block>
      </ScrollView>
    </Block>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        Development mode
      </Text>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  devModeContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  header: {
    fontSize:30, 
    alignSelf: 'center'
  },
  locationBlockContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center'
  }
});
