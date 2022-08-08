import {View, Text, FlatList} from 'react-native';
import React from 'react';
import SingleTile from '../components/SingleTile';

const TileScreen = ({navigation, route}) => {
  console.log(route.params, navigation);

  // Change header title
  route &&
    route.params &&
    route.params.title &&
    navigation.setOptions({headerTitle: route.params.title});

  const DATA = route.params.screenData;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.3)',
          padding: 10,
          borderRadius: 5,
          height: DATA.reduce(
            (tot, no) => (no.h ? tot + no.h + 10 : tot + 60),
            20,
          ),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <SingleTile {...item} />}
        />
      </View>
    </View>
  );
};

export default TileScreen;
