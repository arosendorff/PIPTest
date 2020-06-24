/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PIPView from 'react-native-pip';

import Video from 'react-native-video';

import MapTest from './MapTest';

const VideoTest = (props) => {
  console.log(`VideoTest: ${props.isContracted}`);
  return(
    <View
      style={{
        width: '100%',
        height: '100%',
        // backgroundColor: 'green',
      }}
    >
      <Video
        source={require('./Spring.mp4')}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
      }}
    >
      <View
        style={{
          width: '100%',
          height: 20,
          backgroundColor: 'orange',
        }}
      />
      <PIPView
        style={{
          width: '100%',
          flex: 1,
        }}
        primaryView={
          <VideoTest />
        }
        secondaryView={
          <MapTest />
        }
      />
    </View>
  );
};

export default App;
