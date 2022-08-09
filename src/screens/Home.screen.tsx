import {View, Text, FlatList} from 'react-native';
import React from 'react';
import SingleTile from '../components/SingleTile';
import {DrawerItem} from '@react-navigation/drawer';

const Home = () => {
  const DATA = [
    {
      id: 0,
      title: 'Appointments',
      icon: 'file-signature',
      screenType: 'TileScreen',
      screenData: [
        {
          id: 0,
          title: "Today's Renewal Appointments",
          icon: 'file-signature',
          screenType: 'Individual',
          m: 5,
          h: 60,
        },
        {
          id: 1,
          title: "Today's Operational Activities Appointment",
          icon: 'file-signature',
          screenType: 'Individual',
          m: 5,
          h: 60,
        },
        {
          id: 2,
          title: 'Past Appointments',
          icon: 'file-signature',
          screenType: 'Individual',
          m: 5,
        },
        {
          id: 3,
          title: 'Transfer Appointments',
          icon: 'file-signature',
          screenType: 'Individual',
          m: 5,
        },
      ],
      m: 5,
    },
    {
      id: 1,
      title: 'Not Contacted Cases',
      icon: 'calendar-times',
      screenType: 'Individual',
      screenData: 'NotContactedCases',
      m: 5,
    },
    {
      id: 2,
      title: 'Transaction History',
      icon: 'history',
      screenType: 'Link',
      m: 5,
    },
    {
      id: 3,
      title: 'Update Contact',
      icon: 'address-card',
      screenType: 'Individual',
      screenData: 'UpdateContact',
      m: 5,
    },
    {
      id: 4,
      title: 'Other Activities',
      icon: 'calendar-check',
      screenType: 'Individual',
      screenData: 'OtherActivities',
      m: 5,
    },
  ];

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

export default Home;
