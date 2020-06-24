import React, {
  useState,
} from 'react';

import {
  View,
} from 'react-native';

import MapView from 'react-native-maps';

export default MapTest = (props) => {

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  console.log(`MapTest: ${props.isContracted}`);

  const onRegionChange = region => {
    // if (!props.isContracted) {
      setMapRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      });
    // };
  };

  return(
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
      }}
    >
      <MapView
        region={mapRegion}
        onRegionChange={onRegionChange}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
}
