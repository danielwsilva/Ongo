import React from 'react';
import { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/core';

import { useTerminal } from '../../contexts/terminal';

import { 
  Container, 
  Map
} from './styles';

interface Coords {
  coordenate: {
    latitude: number;
    longitude: number;
  }
}

const Maps: React.FC = () => {
  const {getCoordenate} = useTerminal();
  const route = useRoute();
  const {coordenate} = route.params as Coords;

  function handleLocation(cordenate: object) {
    getCoordenate(cordenate);
  }

  return (
    <Container>
      <Map 
        initialRegion={{
          latitude: coordenate.latitude,
          longitude: coordenate.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: coordenate.latitude,
            longitude: coordenate.longitude
          }}

          onDragEnd={e => handleLocation(e.nativeEvent)}
          draggable
        />
     </Map>
   </Container>
  );
}

export default Maps;