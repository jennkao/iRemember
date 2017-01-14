import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

export default class FailedLoginScreen extends React.Component {
  constructor (props) {
    super (props);

    console.log(this.props.route.params)
  }

  static route = {
    navigationBar: {
      title: 'Failed Login'
    },
  }

  render () {
    return (
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <Text style={styles.infoText}> 
            We couldnt find ya please go back and try again
          </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
  },
  contentContainer: {
    paddingTop: 40,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  nameTextInput: {
    height: 40,
    fontSize: 36,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#ECECEC',
  },
  infoText: {
    color: '#ECECEC',
    fontSize: 24,
    alignSelf: 'center'
  }
});