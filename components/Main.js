import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
} from 'react-native';
import _ from 'lodash';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  textInput: {
    height: 40,
    fontSize: (Platform.OS === 'ios') ? 20 : 18,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 7,
    color: 'darkblue',
    paddingLeft: 7,
  },
});


class Main extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // wire up the navigation parameters
    this.props.navigation.setParams(
      {
      }
    );
  }


  render() {
    debugger;
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightsteelblue' }}>
        <Text>Hey</Text>
      </View>
    );
  }
};

export default Main;
