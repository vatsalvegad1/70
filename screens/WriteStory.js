import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          backgroundColor: 'smokeWhite',
        }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Story Hub</Text>
        </View>
        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>
          Write Your Own Story{' '}
        </Text>

        <TextInput
          style={[styles.textInputStyle, { marginTop: '7%' }]}
          placeholder="    Title Of Your Story"
        />
        <TextInput style={styles.textInputStyle} placeholder="   Author" />

        <TextInput
          style={{
            margin: 10,
            width: '80%',
            height: '45%',
            borderRadius: 15,
            borderTopWidth: 3,
            borderBottomWidth: 5,
            backgroundColor: 'lightgrey',
          }}
          placeholder="   Your Story"
        />

        <TouchableOpacity style={styles.ButtonStyle}>
          <Text style={styles.ButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 10,
    borderRadius: 15,
    height: '8%',
    width: '80%',
    borderBottomWidth: 3,
    backgroundColor: 'lightgrey',
  },
  textContainer: {
    backgroundColor: '#464840',
    width: '100%',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    margin: 7,
    width: 100,
  },
  ButtonText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
