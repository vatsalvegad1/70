import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class fb extends React.Component {
  render() {
    return (
      <View>

        <AppHeader Text=' Read Story'/>
        <Text style={{ color: 'black', marginLeft: '35%', marginTop: '50%' }}>
         ReadStory
        </Text>
      </View>
    );
  }
}
