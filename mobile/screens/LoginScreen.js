import React from 'react';

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text,
  NativeModules,
  Button
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      waiting: false
    }
  }

  static route = {
    navigationBar: {
      visible: false
    },
  }

  render () {
    this.props.route.params.authFunction()
      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <TextInput
            onSubmitEditing={this.props.route.params.handleTextSubmit}
            onChangeText={this.props.route.params.handleTextChange}
            placeholder={'Enter your first name here'}
            placeholderTextColor={'#95a5a6'}
            style={styles.nameTextInput} />
          <Text style={styles.infoText}> 
            On the next screen, you will take a photo of yourself. Please make sure that only your face is in the photo
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
    borderColor: '#7f8c8d',
    borderWidth: 1,
    color: '#7f8c8d',
  },
  infoText: {
    color: '#ECECEC',
    fontSize: 24,
    alignSelf: 'center'
  },
  activityIndicator: {
    alignSelf: 'center',
  }
});